#!/usr/bin/env node
// Validates the tree in tree/ and compiles it to site/data/tree.json.
//   node scripts/build.mjs           validate + write site/data/tree.json
//   node scripts/build.mjs --check   validate only (CI); exits 1 on errors
//   node scripts/build.mjs --bundle  also write dist/techtree.html, a single self-contained page
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import YAML from 'yaml';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const TREE = path.join(ROOT, 'tree');
const SITE = path.join(ROOT, 'site');
const DIST = path.join(ROOT, 'dist');
const argv = new Set(process.argv.slice(2));
const CHECK_ONLY = argv.has('--check');
const BUNDLE = argv.has('--bundle');

const ID_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const RESERVED_IDS = new Set(['explore', 'frontier', 'ledger', 'about']); // used as URL routes
const STATUSES = new Set(['known', 'open', 'claimed']);
const KEYS = new Set(['title', 'status', 'importance', 'grand', 'year', 'circa', 'posed', 'requires', 'by', 'with', 'verified', 'field', 'aliases', 'tags', 'quote', 'links', 'progress']);
const PROGRESS_KEYS = new Set(['year', 'by', 'with', 'what', 'link']);

const errors = [];
const warnings = [];
const rel = (f) => path.relative(ROOT, f);
const error = (file, msg) => errors.push(`${rel(file)}: ${msg}`);
const warn = (file, msg) => warnings.push(`${rel(file)}: ${msg}`);

// ── typography & markdown ──────────────────────────────────────────────

const escapeHtml = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Curly quotes and apostrophes for display text. */
function smarten(s) {
  return s
    .replace(/(\w)'(\w)/g, '$1’$2')
    .replace(/(^|[\s([{—–-])'/g, '$1‘')
    .replace(/'/g, '’')
    .replace(/(^|[\s([{—–-])"/g, '$1“')
    .replace(/"/g, '”');
}

/** A deliberately small Markdown subset: paragraphs, **bold**, *italic*, `code`, [text](https://…), [[node-id]] and [[node-id|label]]. */
function renderMarkdown(src, file, ids, refs) {
  const inline = (text) => {
    const out = [];
    let rest = text;
    const re = /\[\[([a-z0-9-]+)(?:\|([^\]]+))?\]\]|\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)|`([^`]+)`|\*\*([^*]+)\*\*|\*([^*]+)\*/;
    let m;
    while ((m = re.exec(rest))) {
      out.push(escapeHtml(smarten(rest.slice(0, m.index))));
      if (m[1]) {
        if (!ids.has(m[1])) error(file, `link to unknown node [[${m[1]}]]`);
        refs.add(m[1]);
        out.push(`<a class="nref" href="#${m[1]}" data-node="${m[1]}">${escapeHtml(smarten(m[2] ?? m[1]))}</a>`);
      } else if (m[3]) out.push(`<a href="${escapeHtml(m[4])}" target="_blank" rel="noopener">${escapeHtml(smarten(m[3]))}</a>`);
      else if (m[5]) out.push(`<code>${escapeHtml(m[5])}</code>`);
      else if (m[6]) out.push(`<strong>${escapeHtml(smarten(m[6]))}</strong>`);
      else if (m[7]) out.push(`<em>${escapeHtml(smarten(m[7]))}</em>`);
      rest = rest.slice(m.index + m[0].length);
    }
    out.push(escapeHtml(smarten(rest)));
    return out.join('');
  };
  return src
    .split(/\n\s*\n/)
    .map((p) => p.trim().replace(/\s*\n\s*/g, ' '))
    .filter(Boolean)
    .map((p) => `<p>${inline(p)}</p>`)
    .join('');
}

const plainText = (html) => html.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"');

function linkLabel(url) {
  try {
    const h = new URL(url).hostname.replace(/^www\./, '');
    if (h.endsWith('wikipedia.org')) return 'Wikipedia';
    if (h === 'arxiv.org') return 'arXiv';
    if (h === 'doi.org') return 'Paper';
    if (h === 'github.com') return 'GitHub';
    if (h === 'deepmind.google') return 'Google DeepMind';
    return h;
  } catch {
    return url;
  }
}

// ── reading ────────────────────────────────────────────────────────────

function parseFrontMatter(text, file) {
  const m = /^---\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n|$)([\s\S]*)$/.exec(text);
  if (!m) {
    error(file, 'must start with a front-matter block between two "---" lines');
    return null;
  }
  try {
    const data = YAML.parse(m[1]) ?? {};
    if (typeof data !== 'object' || Array.isArray(data)) throw new Error('front matter must be a mapping');
    return { data, body: m[2].trim() };
  } catch (e) {
    error(file, `invalid YAML: ${e.message.split('\n')[0]}`);
    return null;
  }
}

const isStr = (v) => typeof v === 'string' && v.trim() !== '';
const isInt = (v) => Number.isInteger(v);
const isUrl = (v) => isStr(v) && /^https?:\/\/\S+$/.test(v);

function strList(v, file, key) {
  if (v === undefined || v === null) return [];
  if (!Array.isArray(v) || !v.every(isStr)) {
    error(file, `"${key}" must be a list of non-empty strings, e.g. ${key}: [a, b]`);
    return [];
  }
  return v.map((s) => s.trim());
}

const domainsFile = path.join(TREE, 'domains.yaml');
let domains = [];
try {
  domains = YAML.parse(fs.readFileSync(domainsFile, 'utf8'));
} catch (e) {
  error(domainsFile, e.message);
}
if (!Array.isArray(domains) || !domains.length) error(domainsFile, 'must be a non-empty list of domains');
domains = (Array.isArray(domains) ? domains : []).filter((d, i) => {
  const ok = d && ID_RE.test(d.id ?? '') && isStr(d.name) && Number.isFinite(d.hue);
  if (!ok) error(domainsFile, `domain #${i + 1} needs an id, a name and a numeric hue`);
  return ok;
});
const domainIds = new Set(domains.map((d) => d.id));

for (const entry of fs.readdirSync(TREE, { withFileTypes: true })) {
  if (entry.isDirectory() && !domainIds.has(entry.name)) error(path.join(TREE, entry.name), `folder is not a domain listed in domains.yaml`);
}

const raw = [];
for (const d of domains) {
  const dir = path.join(TREE, d.id);
  if (!fs.existsSync(dir)) continue;
  for (const name of fs.readdirSync(dir).sort()) {
    const file = path.join(dir, name);
    if (!name.endsWith('.md')) {
      if (!name.startsWith('.')) error(file, 'only .md node files belong in a domain folder');
      continue;
    }
    const id = name.slice(0, -3);
    if (!ID_RE.test(id)) error(file, 'file name must be a lowercase id like "fourier-analysis.md"');
    if (RESERVED_IDS.has(id) || id.startsWith('by-')) error(file, `"${id}" is reserved for site navigation; pick another id`);
    const parsed = parseFrontMatter(fs.readFileSync(file, 'utf8'), file);
    if (parsed) raw.push({ id, domain: d.id, file, ...parsed });
  }
}

const seen = new Map();
for (const r of raw) {
  if (seen.has(r.id)) error(r.file, `duplicate id; also used by ${rel(seen.get(r.id))}`);
  else seen.set(r.id, r.file);
}
const ids = new Set(seen.keys());

// ── validation ─────────────────────────────────────────────────────────

const nodes = [];
for (const { id, domain, file, data, body } of raw) {
  for (const k of Object.keys(data)) if (!KEYS.has(k)) error(file, `unknown field "${k}" (allowed: ${[...KEYS].join(', ')})`);

  const n = { id, domain, path: rel(file) };
  if (!isStr(data.title)) error(file, '"title" is required');
  else if (data.title.length > 48) warn(file, `title is ${data.title.length} characters; keep it under 48 so it fits on the map`);
  n.title = smarten(String(data.title ?? id));

  n.status = data.status ?? 'known';
  if (!STATUSES.has(n.status)) error(file, `"status" must be one of: ${[...STATUSES].join(', ')}`);

  if (data.importance !== undefined) {
    if (!isInt(data.importance) || data.importance < 1 || data.importance > 100) error(file, '"importance" must be a whole number from 1 to 100 (see CONTRIBUTING.md)');
    else n.importance = data.importance;
  }
  if (data.grand !== undefined) {
    if (typeof data.grand !== 'boolean') error(file, '"grand" must be true or false');
    else if (data.grand && n.status === 'known') warn(file, '"grand" only applies to open or claimed problems');
    else if (data.grand) n.grand = true;
  }

  for (const k of ['year', 'posed']) {
    if (data[k] !== undefined && !isInt(data[k])) error(file, `"${k}" must be a whole number (negative for BCE)`);
    else if (data[k] !== undefined) n[k] = data[k];
  }
  if (n.status === 'known' && n.year === undefined) warn(file, 'known discoveries should have a "year"');
  if (data.circa !== undefined && typeof data.circa !== 'boolean') error(file, '"circa" must be true or false');
  if (data.circa) n.circa = true;

  if (!Array.isArray(data.requires)) error(file, '"requires" is required: a list of node ids, or [] for a root');
  n.requires = strList(data.requires, file, 'requires');
  for (const p of n.requires) {
    if (p === id) error(file, 'a node cannot require itself');
    else if (!ids.has(p)) error(file, `requires unknown node "${p}"`);
  }
  if (new Set(n.requires).size !== n.requires.length) error(file, '"requires" lists the same node twice');
  if (n.requires.length > 5) warn(file, 'more than 5 prerequisites; list only the direct, essential ones');

  n.by = strList(data.by, file, 'by');
  n.with = strList(data.with, file, 'with');
  n.aliases = strList(data.aliases, file, 'aliases');
  n.tags = strList(data.tags, file, 'tags');
  if (n.status === 'open' && n.by.length) warn(file, 'open problems should credit partial results under "progress", not "by"');
  if (data.verified !== undefined) {
    if (!isStr(data.verified)) error(file, '"verified" must be text, e.g. "Lean" or "Coq (2005)"');
    else n.verified = data.verified;
  }
  if (data.field !== undefined) {
    if (!isStr(data.field)) error(file, '"field" must be text');
    else n.field = data.field;
  }
  if (data.quote !== undefined) {
    if (!data.quote || !isStr(data.quote.text) || !isStr(data.quote.by)) error(file, '"quote" needs "text" and "by"');
    else n.quote = { text: smarten(data.quote.text), by: smarten(data.quote.by) };
  }

  n.links = [];
  for (const l of data.links ?? []) {
    const url = typeof l === 'string' ? l : l?.url;
    if (!isUrl(url)) error(file, `link "${JSON.stringify(l)}" must be an http(s) URL`);
    else n.links.push({ url, label: (typeof l === 'object' && l.label) || linkLabel(url) });
  }

  n.progress = [];
  if (data.progress !== undefined && !Array.isArray(data.progress)) error(file, '"progress" must be a list');
  for (const [i, p] of (Array.isArray(data.progress) ? data.progress : []).entries()) {
    if (!p || typeof p !== 'object') {
      error(file, `progress entry ${i + 1} must be a mapping`);
      continue;
    }
    for (const k of Object.keys(p)) if (!PROGRESS_KEYS.has(k)) error(file, `progress entry ${i + 1}: unknown field "${k}"`);
    if (!isInt(p.year)) error(file, `progress entry ${i + 1} needs a "year"`);
    if (!isStr(p.what)) error(file, `progress entry ${i + 1} needs "what"`);
    if (p.link !== undefined && !isUrl(p.link)) error(file, `progress entry ${i + 1}: "link" must be an http(s) URL`);
    const by = strList(p.by, file, 'progress.by');
    if (!by.length) error(file, `progress entry ${i + 1} needs "by"`);
    n.progress.push({ year: p.year, by, with: strList(p.with, file, 'progress.with'), what: smarten(String(p.what ?? '')), link: p.link });
  }
  if (n.status === 'claimed' && !n.progress.length) warn(file, 'claimed results should record the claim under "progress", with a link');

  if (!body) warn(file, 'add a one- or two-sentence description below the front matter');
  else if (body.length > 700) warn(file, `description is ${body.length} characters; aim for under 500`);
  n.body = body;
  nodes.push(n);
}

// Cycles: an edge always points from prerequisite to dependent, so the graph must be acyclic.
{
  const byId = new Map(nodes.map((n) => [n.id, n]));
  const state = new Map();
  const stack = [];
  const visit = (n) => {
    state.set(n.id, 1);
    stack.push(n.id);
    for (const p of n.requires) {
      const q = byId.get(p);
      if (!q) continue;
      if (state.get(p) === 1) {
        const cycle = [...stack.slice(stack.indexOf(p)), p];
        error(path.join(ROOT, n.path), `prerequisite cycle: ${cycle.join(' → ')}`);
      } else if (!state.get(p)) visit(q);
    }
    stack.pop();
    state.set(n.id, 2);
  };
  for (const n of nodes) if (!state.get(n.id)) visit(n);
}

// Render descriptions last, once every id is known.
for (const n of nodes) {
  const refs = new Set();
  n.html = renderMarkdown(n.body, path.join(ROOT, n.path), ids, refs);
  n.summary = plainText(n.html).split(/(?<=[.!?])\s/)[0];
  for (const p of n.progress) p.html = escapeHtml(p.what);
  delete n.body;
}

// ── report ─────────────────────────────────────────────────────────────

for (const w of warnings) console.warn(`warning  ${w}`);
for (const e of errors) console.error(`error    ${e}`);
const open = nodes.filter((n) => n.status !== 'known').length;
console.log(`${nodes.length} nodes (${open} open or claimed) in ${domains.length} domains · ${nodes.reduce((s, n) => s + n.requires.length, 0)} prerequisite links · ${errors.length} errors · ${warnings.length} warnings`);
if (errors.length) process.exit(1);
if (CHECK_ONLY) process.exit(0);

// ── output ─────────────────────────────────────────────────────────────

const order = new Map(domains.map((d, i) => [d.id, i]));
const sortYear = (n) => n.year ?? n.posed ?? 1e9;
nodes.sort((a, b) => order.get(a.domain) - order.get(b.domain) || sortYear(a) - sortYear(b) || a.id.localeCompare(b.id));

const tree = {
  version: 1,
  generated: new Date().toISOString(),
  site: {
    name: 'Tech Tree',
    url: (process.env.SITE_URL || 'https://techtree.earth').replace(/\/$/, ''),
    repo: process.env.SITE_REPO || null,
    branch: process.env.SITE_BRANCH || 'main',
  },
  domains: domains.map((d) => ({ id: d.id, name: d.name, short: d.short || d.name, hue: d.hue, blurb: d.blurb || '' })),
  nodes: nodes.map((n) => Object.fromEntries(Object.entries(n).filter(([, v]) => v !== undefined && !(Array.isArray(v) && !v.length)))),
};
const json = JSON.stringify(tree);
fs.mkdirSync(path.join(SITE, 'data'), { recursive: true });
fs.writeFileSync(path.join(SITE, 'data', 'tree.json'), json);
console.log(`wrote site/data/tree.json (${(json.length / 1024).toFixed(0)} KB)`);

// ── share pages ────────────────────────────────────────────────────────
// Link previews (Reddit, Discord, chat apps) never see the part after "#", so every node and person
// gets a tiny page at /n/<id>/ or /p/<name>/ with its own title and description that forwards to the map.

const SITE_URL = (process.env.SITE_URL || 'https://techtree.earth').replace(/\/$/, '');
const slugify = (s) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[’‘]/g, "'").replace(/\s+/g, ' ').trim().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
const clip = (s, max = 200) => (s.length <= max ? s : `${s.slice(0, s.lastIndexOf(' ', max - 1))}…`);
const fmtYear = (y, circa) => (y === undefined ? '' : `${circa ? 'c. ' : ''}${y < 0 ? `${(-y).toLocaleString('en-US')} BCE` : y}`);

function sharePage({ title, description, url, target }) {
  const e = escapeHtml;
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${e(title)} · Tech Tree</title>
<meta name="description" content="${e(description)}">
<link rel="canonical" href="${e(url)}">
<meta property="og:site_name" content="Tech Tree">
<meta property="og:type" content="website">
<meta property="og:title" content="${e(title)}">
<meta property="og:description" content="${e(description)}">
<meta property="og:url" content="${e(url)}">
<meta property="og:image" content="${SITE_URL}/og.png">
<meta name="twitter:card" content="summary_large_image">
<meta http-equiv="refresh" content="0; url=${e(target)}">
<script>location.replace(${JSON.stringify(target)})</script>
</head>
<body style="background:#0a0f1e;color:#e9edf7;font-family:system-ui,sans-serif"><p><a style="color:#f2c46d" href="${e(target)}">${e(title)} on the Tech Tree</a></p></body>
</html>
`;
}

for (const dir of ['n', 'p']) fs.rmSync(path.join(SITE, dir), { recursive: true, force: true });
const people = new Map();
const credit = (name, n) => {
  const slug = slugify(name);
  if (!slug) return;
  if (!people.has(slug)) people.set(slug, { name, ids: new Set() });
  people.get(slug).ids.add(n.id);
};
for (const n of nodes) {
  for (const name of n.by) credit(name, n);
  for (const pr of n.progress) for (const name of pr.by) credit(name, n);
  const who = n.by.length ? n.by.slice(0, 3).join(', ') + (n.by.length > 3 ? ' and others' : '') : '';
  const lead =
    n.status === 'open'
      ? `Open problem${n.posed !== undefined ? ` since ${fmtYear(n.posed)}` : ''}${n.importance ? ` · importance ${n.importance}/100` : ''}.`
      : n.status === 'claimed'
        ? `Claimed${who ? ` by ${who}` : ''}, under review.`
        : `${[fmtYear(n.year, n.circa), who].filter(Boolean).join(' · ')}.`;
  const dir = path.join(SITE, 'n', n.id);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(
    path.join(dir, 'index.html'),
    sharePage({ title: n.title, description: clip(`${lead} ${n.summary}`), url: `${SITE_URL}/n/${n.id}/`, target: `/#${n.id}` }),
  );
}
for (const [slug, p] of people) {
  const dir = path.join(SITE, 'p', slug);
  fs.mkdirSync(dir, { recursive: true });
  const titles = [...p.ids].map((id) => nodes.find((n) => n.id === id).title);
  fs.writeFileSync(
    path.join(dir, 'index.html'),
    sharePage({ title: p.name, description: clip(`${p.ids.size} ${p.ids.size === 1 ? 'entry' : 'entries'} on the Tech Tree: ${titles.join(', ')}.`), url: `${SITE_URL}/p/${slug}/`, target: `/#by-${slug}` }),
  );
}
const today = new Date().toISOString().slice(0, 10);
fs.writeFileSync(
  path.join(SITE, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n<url><loc>${SITE_URL}/</loc><lastmod>${today}</lastmod></url>\n${nodes.map((n) => `<url><loc>${SITE_URL}/n/${n.id}/</loc></url>`).join('\n')}\n</urlset>\n`,
);
fs.writeFileSync(path.join(SITE, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${SITE_URL}/sitemap.xml\n`);
console.log(`wrote ${nodes.length} node pages, ${people.size} people pages and sitemap.xml`);

if (BUNDLE) {
  // A single page with styles, script and data inlined, and no <html>/<head>/<body> wrapper,
  // so it can be published as one file or wrapped by a host page.
  const html = fs.readFileSync(path.join(SITE, 'index.html'), 'utf8');
  const head = /<head>([\s\S]*?)<\/head>/.exec(html)[1];
  const body = /<body>([\s\S]*?)<\/body>/.exec(html)[1];
  const css = fs.readFileSync(path.join(SITE, 'style.css'), 'utf8');
  const js = fs.readFileSync(path.join(SITE, 'app.js'), 'utf8');
  const safeJson = json.replace(/</g, '\\u003c');
  const headKeep = head
    .split('\n')
    .filter((l) => /<title>|fonts\.g(oogleapis|static)\.com/.test(l))
    .join('\n');
  const out = [
    headKeep.trim(),
    `<style>\n${css}\n</style>`,
    body
      .replace(/<script src="app\.js"[^>]*><\/script>/, () => `<script id="tree-data" type="application/json">${safeJson}</script>\n<script>\n${js}\n</script>`)
      .trim(),
    '',
  ].join('\n');
  fs.mkdirSync(DIST, { recursive: true });
  fs.writeFileSync(path.join(DIST, 'techtree.html'), out);
  console.log(`wrote dist/techtree.html (${(out.length / 1024).toFixed(0)} KB)`);
}
