/* Basilisk Tree: map engine and interface. Plain JavaScript, no dependencies. */
(() => {
  'use strict';

  // ── geometry, in world units (CSS px at zoom 1) ────────────────────
  const COL_W = 236;             // column pitch
  const ROW_H = 54;              // track pitch inside a lane
  const LANE_PAD = 34;           // space above and below a lane's tracks
  const PAD_L = 70, PAD_R = 320, PAD_T = 44, PAD_B = 70;
  const STAR_CX = 9, STAR_CY = 11; // star centre relative to a node's origin
  const LABEL_X = 24;            // label's left edge relative to a node's origin
  const FAR_K = 0.5;             // below this zoom, labels give way to stars
  const MAX_K = 2.4;
  const RULER_H = 26;
  const ROUTES = new Set(['explore', 'frontier', 'ledger', 'about']);

  // ── dom ─────────────────────────────────────────────────────────────
  const $ = (sel, root = document) => root.querySelector(sel);
  const app = $('#app');
  const vpEl = $('#viewport');
  const world = $('#world');
  const lanesEl = $('#lanes');
  const nodesEl = $('#nodes');
  const svg = $('#edges');
  const gridG = $('#grid');
  const baseG = $('#edges-base');
  const hiG = $('#edges-hi');
  const rulerEl = $('#ruler');
  const stripEl = $('#lane-strip');
  const statusEl = $('#status');
  const panel = $('#panel');
  const panelHead = $('#panel-head');
  const panelBody = $('#panel-body');
  const panelOpenBtn = $('#panel-open');
  const searchInput = $('#search-input');
  const searchResults = $('#search-results');
  const skyCanvas = $('#sky');
  const sky = skyCanvas.getContext('2d');
  const SVGNS = 'http://www.w3.org/2000/svg';
  const phoneMQ = matchMedia('(max-width: 720px)');
  const motionMQ = matchMedia('(prefers-reduced-motion: reduce)');
  const isPhone = () => phoneMQ.matches;
  const calm = () => motionMQ.matches;

  // ── state ───────────────────────────────────────────────────────────
  const S = {
    site: {}, domains: [], domainById: new Map(), nodes: [], byId: new Map(), edges: [], people: new Map(),
    lanes: [], cols: [], W: 0, H: 0, topo: [],
    view: { x: 0, y: 0, k: 1 }, minK: 0.05, lastK: 0, far: null,
    vpW: 0, vpH: 0, vpTop: 0, vpLeft: 0, stripW: 28,
    selected: null, person: null, hi: [], hidden: new Set(),
    tab: 'explore', sheet: 'peek', sheetStops: null, landed: false, welcome: false,
    flight: 0, suppressClickUntil: 0, skyLayers: [],
  };

  // ── utilities ───────────────────────────────────────────────────────
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  const norm = (s) => String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[’‘]/g, "'").replace(/\s+/g, ' ').trim();
  const slugify = (s) => norm(s).replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const mod = (a, n) => ((a % n) + n) % n;
  const hueOf = (n) => S.domainById.get(n.domain).hue;
  const yearOf = (n) => n.year ?? n.posed;
  const plural = (n, one, many = one + 's') => `${n.toLocaleString('en-US')} ${n === 1 ? one : many}`;

  function fmtYear(y, circa) {
    if (!Number.isFinite(y)) return '';
    const c = circa ? 'c. ' : '';
    if (y <= -100000) {
      const m = -y / 1e6;
      return `${c}${m >= 1 ? `${+m.toFixed(1)} million` : (-y).toLocaleString('en-US')} years ago`;
    }
    if (y < 0) return `${c}${-y >= 10000 ? (-y).toLocaleString('en-US') : -y} BCE`;
    return `${c}${y}`;
  }
  function fmtYearShort(y) {
    if (y <= -1e6) return `${+(-y / 1e6).toFixed(1)} Mya`;
    if (y <= -10000) return `${Math.round(-y / 1000)}k BCE`;
    if (y < 0) return `${-y} BCE`;
    return String(y);
  }
  const ORG = /\b(collaborations?|consortium|project|laboratory|community|genomics|openai|deepmind|spacex|nvidia|nasa|deepseek|quantum ai)\b/i;
  function shortName(name) {
    if (ORG.test(name) || !name.includes(' ')) return name.replace(/^Google (?=DeepMind)/, '');
    const parts = name.split(' ');
    let i = parts.length - 1;
    while (i > 0 && /^(de|van|von|der|la|le|du|da|di|ibn)$/i.test(parts[i - 1])) i--;
    return parts.slice(i).join(' ');
  }
  function joinNames(list) {
    if (list.length <= 1) return list.join('');
    return `${list.slice(0, -1).join(', ')} and ${list[list.length - 1]}`;
  }
  function metaLine(n) {
    if (n.status === 'open') return n.posed !== undefined ? `open since ${fmtYear(n.posed)}` : 'open problem';
    if (n.status === 'claimed') return 'claimed · under review';
    const who = n.by.length ? shortName(n.by[0]) + (n.by.length > 1 ? ` +${n.by.length - 1}` : '') : '';
    return [fmtYear(n.year, n.circa), who].filter(Boolean).join(' · ');
  }

  // ── data ────────────────────────────────────────────────────────────
  async function loadData() {
    const inline = document.getElementById('tree-data');
    if (inline) return JSON.parse(inline.textContent);
    const res = await fetch('data/tree.json', { cache: 'no-cache' });
    if (!res.ok) throw new Error(`data/tree.json returned ${res.status}`);
    return res.json();
  }

  function prepare(data) {
    S.site = data.site || {};
    S.domains = data.domains.map((d, index) => ({ ...d, index, count: 0 }));
    S.domainById = new Map(S.domains.map((d) => [d.id, d]));
    S.nodes = data.nodes
      .filter((n) => S.domainById.has(n.domain))
      .map((n) => ({
        ...n, status: n.status || 'known', requires: n.requires || [], unlocks: [],
        by: n.by || [], with: n.with || [], aliases: n.aliases || [], links: n.links || [], progress: n.progress || [],
      }));
    S.byId = new Map(S.nodes.map((n) => [n.id, n]));
    for (const n of S.nodes) n.requires = n.requires.filter((id) => S.byId.has(id));
    for (const n of S.nodes) for (const p of n.requires) S.byId.get(p).unlocks.push(n.id);
    for (const n of S.nodes) S.domainById.get(n.domain).count++;
    S.edges = [];
    for (const n of S.nodes) for (const p of n.requires) S.edges.push({ from: p, to: n.id });

    // topological order (Kahn); anything left in a cycle is appended so the page still renders
    const indeg = new Map(S.nodes.map((n) => [n.id, n.requires.length]));
    const queue = S.nodes.filter((n) => !n.requires.length);
    const topo = [];
    while (queue.length) {
      const n = queue.shift();
      topo.push(n);
      for (const c of n.unlocks) {
        indeg.set(c, indeg.get(c) - 1);
        if (!indeg.get(c)) queue.push(S.byId.get(c));
      }
    }
    for (const n of S.nodes) if (!topo.includes(n)) topo.push(n);
    S.topo = topo;

    // reach: how many later discoveries depend on a node; sets star size
    const below = new Map();
    for (let i = topo.length - 1; i >= 0; i--) {
      const n = topo[i];
      const set = new Set();
      for (const c of n.unlocks) {
        set.add(c);
        for (const x of below.get(c) || []) set.add(x);
      }
      below.set(n.id, set);
      n.reach = set.size;
      n.r = Math.min(8, 2.4 + 0.78 * Math.log2(1 + n.reach));
    }

    // the Ledger: everyone credited for a discovery or for progress on a problem
    for (const n of S.nodes) {
      for (const name of n.by) addPerson(name, n, n.year, 'discovery');
      for (const pr of n.progress) for (const name of pr.by) addPerson(name, n, pr.year, 'progress');
    }
  }
  function addPerson(name, n, year, kind) {
    const slug = slugify(name);
    if (!slug) return;
    let p = S.people.get(slug);
    if (!p) S.people.set(slug, (p = { name, slug, items: [] }));
    if (!p.items.some((i) => i.id === n.id && i.kind === kind)) p.items.push({ id: n.id, year, kind });
  }

  function ancestors(n) {
    const out = new Set();
    const stack = [...n.requires];
    while (stack.length) {
      const id = stack.pop();
      if (out.has(id)) continue;
      out.add(id);
      stack.push(...S.byId.get(id).requires);
    }
    return out;
  }
  function descendants(n) {
    const out = new Set();
    const stack = [...n.unlocks];
    while (stack.length) {
      const id = stack.pop();
      if (out.has(id)) continue;
      out.add(id);
      stack.push(...S.byId.get(id).unlocks);
    }
    return out;
  }

  // ── layout: era columns × domain lanes ──────────────────────────────
  function layout() {
    const nodes = S.nodes;

    // 1. Era bins with roughly equal numbers of nodes, so deep time compresses and recent decades expand.
    const years = nodes.map(yearOf).filter(Number.isFinite).sort((a, b) => a - b);
    const target = Math.max(6, Math.round(years.length / 6));
    const cuts = [];
    for (let i = 1; i < target; i++) {
      const y = years[Math.floor((i * years.length) / target)];
      if (!cuts.length || y > cuts[cuts.length - 1]) cuts.push(y);
    }
    const binOf = (y) => {
      let lo = 0, hi = cuts.length;
      while (lo < hi) {
        const mid = (lo + hi) >> 1;
        if (cuts[mid] <= y) lo = mid + 1;
        else hi = mid;
      }
      return lo;
    };

    // 2. Each node sits in its era's column, pushed right of every prerequisite.
    for (const n of S.topo) {
      const y = yearOf(n);
      let c = Number.isFinite(y) ? binOf(y) : 0;
      for (const p of n.requires) c = Math.max(c, S.byId.get(p).col + 1);
      n.col = c;
    }
    const used = [...new Set(nodes.map((n) => n.col))].sort((a, b) => a - b);
    const remap = new Map(used.map((c, i) => [c, i]));
    for (const n of nodes) n.col = remap.get(n.col);
    const nCols = used.length;

    // 3. Lanes hold tracks; a lane is as tall as its busiest column.
    const lanes = S.domains.map((d) => ({ domain: d, groups: new Map(), tracks: 1 }));
    for (const n of nodes) {
      const lane = lanes[S.domainById.get(n.domain).index];
      n.lane = lane;
      if (!lane.groups.has(n.col)) lane.groups.set(n.col, []);
      lane.groups.get(n.col).push(n);
    }
    for (const lane of lanes) {
      for (const g of lane.groups.values()) lane.tracks = Math.max(lane.tracks, g.length);
      for (const g of lane.groups.values()) {
        g.sort((a, b) => (yearOf(a) ?? 1e9) - (yearOf(b) ?? 1e9));
        g.forEach((n, i) => (n.track = Math.round(((i + 0.5) * lane.tracks) / g.length - 0.5)));
      }
    }
    let top = PAD_T;
    for (const lane of lanes) {
      lane.top = top;
      lane.height = LANE_PAD * 2 + lane.tracks * ROW_H;
      top += lane.height;
    }
    const yOf = (n) => n.lane.top + LANE_PAD + n.track * ROW_H;

    // 4. Barycentric sweeps: pull each node toward the height of its neighbours to straighten chains.
    const cols = [...Array(nCols).keys()];
    for (let it = 0; it < 14; it++) {
      const forward = it % 2 === 0;
      const both = it >= 10;
      for (const c of forward ? cols : [...cols].reverse()) {
        for (const lane of lanes) {
          const g = lane.groups.get(c);
          if (!g) continue;
          for (const n of g) {
            const nb = both ? [...n.requires, ...n.unlocks] : forward ? n.requires : n.unlocks;
            if (!nb.length) {
              n.want = n.track;
              continue;
            }
            let s = 0;
            for (const id of nb) s += yOf(S.byId.get(id));
            n.want = (s / nb.length - lane.top - LANE_PAD) / ROW_H;
          }
          g.sort((a, b) => a.want - b.want);
          let prev = -1;
          g.forEach((n, i) => {
            let t = Math.round(clamp(n.want, 0, lane.tracks - 1));
            t = Math.max(t, prev + 1);
            t = Math.min(t, lane.tracks - (g.length - i));
            n.track = prev = t;
          });
        }
      }
    }

    for (const n of nodes) {
      n.x = PAD_L + n.col * COL_W;
      n.y = yOf(n);
    }
    S.lanes = lanes;
    S.W = PAD_L + nCols * COL_W + PAD_R;
    S.H = top + PAD_B;

    // ruler labels: a median year per column, never running backwards
    let floor = -Infinity;
    S.cols = cols.map((c) => {
      const inCol = nodes.filter((n) => n.col === c);
      const known = inCol.filter((n) => n.status === 'known' && Number.isFinite(n.year)).map((n) => n.year).sort((a, b) => a - b);
      let label = null;
      if (known.length) {
        floor = Math.max(floor, known[Math.floor(known.length / 2)]);
        label = fmtYearShort(floor);
      }
      return { index: c, x: PAD_L + c * COL_W, label: label ?? 'open', open: !known.length };
    });

  }

  // ── render ──────────────────────────────────────────────────────────
  function render() {
    world.style.width = `${S.W}px`;
    world.style.height = `${S.H}px`;
    lanesEl.innerHTML = S.lanes.map((l) => `<div class="lane" style="top:${l.top}px;height:${l.height}px;--h:${l.domain.hue}"></div>`).join('');

    const frag = document.createDocumentFragment();
    for (const n of S.nodes) {
      const el = document.createElement('button');
      el.type = 'button';
      el.className = ['node', n.status !== 'known' && n.status, n.status === 'known' && n.with.length && 'ai'].filter(Boolean).join(' ');
      el.dataset.id = n.id;
      el.style.cssText = `left:${n.x}px;top:${n.y}px;--h:${hueOf(n)};--r:${n.r.toFixed(2)}`;
      const status = n.status === 'open' ? 'open problem' : n.status === 'claimed' ? 'claimed result' : '';
      el.setAttribute('aria-label', [n.title, status, metaLine(n)].filter(Boolean).join(', '));
      el.innerHTML = `<span class="star-box"><span class="star"></span></span><span class="label"><span class="t">${esc(n.title)}</span><span class="m">${esc(metaLine(n))}</span></span>`;
      n.el = el;
      n.labelEl = el.lastElementChild;
      frag.appendChild(el);
    }
    nodesEl.replaceChildren(frag);

    svg.setAttribute('width', S.W);
    svg.setAttribute('height', S.H);
    svg.setAttribute('viewBox', `0 0 ${S.W} ${S.H}`);
    gridG.innerHTML = S.cols
      .slice(1)
      .map((c) => `<line x1="${c.x - 20}" y1="${PAD_T}" x2="${c.x - 20}" y2="${S.H - PAD_B}"/>`)
      .join('');
    for (const e of S.edges) {
      const path = document.createElementNS(SVGNS, 'path');
      const to = S.byId.get(e.to);
      path.setAttribute('class', to.status === 'known' ? 'e' : 'e to-open');
      path.style.setProperty('--h', hueOf(S.byId.get(e.from)));
      e.el = path;
    }
    baseG.replaceChildren(...S.edges.map((e) => e.el));

    rulerEl.replaceChildren(
      ...S.cols.map((c) => {
        const t = document.createElement('span');
        t.className = c.open ? 'tick frontier' : 'tick';
        t.textContent = c.label;
        c.el = t;
        return t;
      }),
    );
    stripEl.replaceChildren(
      ...S.lanes.map((lane) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'lane-tag';
        b.dataset.domain = lane.domain.id;
        b.style.setProperty('--h', lane.domain.hue);
        b.title = `${lane.domain.name}: click to hide or show`;
        b.setAttribute('aria-pressed', 'true');
        b.innerHTML = `<span>${esc(lane.domain.short || lane.domain.name)}</span>`;
        lane.tag = b;
        return b;
      }),
    );
  }

  const measureCtx = document.createElement('canvas').getContext('2d');
  function measure() {
    measureCtx.font = `500 13.5px ${getComputedStyle(document.documentElement).getPropertyValue('--sans')}`;
    for (const n of S.nodes) {
      n.lw = n.labelEl.offsetWidth;
      n.tw = measureCtx.measureText(n.title).width;
    }
    for (const lane of S.lanes) lane.textLen = lane.tag.firstElementChild.offsetHeight;
    pickMajors();
  }

  // A few bright stars keep their names at far zoom: chosen round-robin across eras by reach,
  // skipping any whose enlarged label would collide with one already chosen.
  function pickMajors() {
    const k = overview().k;
    const scale = 0.78 / Math.min(k, FAR_K);
    const segs = 6, nCols = S.cols.length;
    const pools = Array.from({ length: segs }, (_, i) =>
      S.nodes
        .filter((n) => n.status === 'known' && n.reach > 0 && Math.floor((n.col * segs) / nCols) === i)
        .sort((a, b) => b.reach - a.reach),
    );
    const boxes = [];
    const fits = (n) => {
      if (n.title.length > 26) return false;
      const box = { x0: n.x - 10, x1: n.x + LABEL_X + ((n.tw || 120) + 10) * scale + 14, y0: n.y - 8 * scale, y1: n.y + 24 * scale };
      if (boxes.some((b) => box.x0 < b.x1 && box.x1 > b.x0 && box.y0 < b.y1 && box.y1 > b.y0)) return false;
      boxes.push(box);
      return true;
    };
    const chosen = new Set();
    for (let round = 0; round < 4 && chosen.size < 16; round++) {
      for (const pool of pools) {
        const n = pool.find((m) => !chosen.has(m) && fits(m));
        if (n) chosen.add(n);
      }
    }
    for (const n of S.nodes) n.el.classList.toggle('major', chosen.has(n));
  }

  function anchor(n, out, far) {
    if (far) return [n.x + STAR_CX, n.y + STAR_CY];
    if (out) return [n.x + LABEL_X + (n.lw || 120) + 6, n.y + STAR_CY];
    const r = n.status !== 'known' ? 7 : n.with.length ? n.r + 4.5 : n.r;
    return [n.x + STAR_CX - r - 3, n.y + STAR_CY];
  }
  function edgeD(e, far) {
    const [x1, y1] = anchor(S.byId.get(e.from), true, far);
    const [x2, y2] = anchor(S.byId.get(e.to), false, far);
    const c = Math.max(24, (x2 - x1) * 0.5);
    return `M${x1.toFixed(1)},${y1.toFixed(1)}C${(x1 + c).toFixed(1)},${y1.toFixed(1)} ${(x2 - c).toFixed(1)},${y2.toFixed(1)} ${x2.toFixed(1)},${y2.toFixed(1)}`;
  }
  function drawEdges() {
    const far = S.view.k < FAR_K;
    for (const e of S.edges) e.el.setAttribute('d', edgeD(e, far));
    S.edgesFar = far;
    drawHighlights();
  }
  function drawHighlights() {
    const far = S.view.k < FAR_K;
    hiG.replaceChildren(
      ...S.hi.map(([e, cls]) => {
        const p = document.createElementNS(SVGNS, 'path');
        const to = S.byId.get(e.to);
        p.setAttribute('class', to.status === 'known' ? cls : `${cls} to-open`);
        p.style.setProperty('--h', hueOf(S.byId.get(e.from)));
        p.setAttribute('d', edgeD(e, far));
        return p;
      }),
    );
  }

  // ── sky ─────────────────────────────────────────────────────────────
  function buildSky() {
    let seed = 20231;
    const rnd = () => (seed = (seed * 48271) % 2147483647) / 2147483647;
    const TILE = 1300;
    S.skyLayers = [
      { p: 0.02, count: 230, size: 0.75 },
      { p: 0.055, count: 110, size: 1.05 },
      { p: 0.11, count: 46, size: 1.5 },
    ].map((l) => ({
      ...l, tile: TILE,
      stars: Array.from({ length: l.count }, () => ({
        x: rnd() * TILE, y: rnd() * TILE, s: l.size * (0.6 + rnd() * 0.8), a: 0.18 + rnd() * 0.55, tint: rnd(),
      })),
    }));
  }
  function sizeSky() {
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    skyCanvas.width = Math.round(S.vpW * dpr);
    skyCanvas.height = Math.round(S.vpH * dpr);
    sky.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  const TINTS = ['#ffe3bd', '#c9d7ff', '#eef1ff'];
  function drawSky() {
    const w = S.vpW, h = S.vpH;
    sky.clearRect(0, 0, w, h);
    for (const L of S.skyLayers) {
      const ox = mod(S.view.x * L.p, L.tile), oy = mod(S.view.y * L.p, L.tile);
      for (let ti = 0; ti < 3; ti++) {
        sky.fillStyle = TINTS[ti];
        for (let tx = ox - L.tile; tx < w; tx += L.tile) {
          for (let ty = oy - L.tile; ty < h; ty += L.tile) {
            for (const s of L.stars) {
              if ((s.tint < 0.14 ? 0 : s.tint < 0.36 ? 1 : 2) !== ti) continue;
              const x = tx + s.x, y = ty + s.y;
              if (x < -3 || y < -3 || x > w + 3 || y > h + 3) continue;
              sky.globalAlpha = s.a;
              sky.fillRect(x, y, s.s, s.s);
            }
          }
        }
      }
    }
    sky.globalAlpha = 1;
  }

  // ── view ────────────────────────────────────────────────────────────
  let raf = 0;
  const requestFrame = () => {
    if (!raf) raf = requestAnimationFrame(applyView);
  };
  function applyView() {
    raf = 0;
    const { x, y, k } = S.view;
    world.style.transform = `translate3d(${x}px,${y}px,0) scale(${k})`;
    if (Math.abs(k - S.lastK) / k > 0.004) {
      world.style.setProperty('--k', k.toFixed(4));
      S.lastK = k;
    }
    const far = k < FAR_K;
    if (far !== S.far) {
      S.far = far;
      vpEl.classList.toggle('far', far);
      if (S.edgesFar !== undefined && S.edgesFar !== far) drawEdges();
    }
    drawSky();
    updateRuler();
    updateStrip();
  }

  let movingTimer = 0;
  function markMoving() {
    vpEl.classList.add('moving');
    clearTimeout(movingTimer);
    movingTimer = setTimeout(() => vpEl.classList.remove('moving'), 160);
  }

  function updateRuler() {
    const { x, k } = S.view;
    const stride = Math.max(1, Math.ceil(78 / (COL_W * k)));
    let last = null;
    for (const c of S.cols) {
      const sx = x + (c.x + 80) * k;
      const show = c.index % stride === 0 && sx > S.stripW + 18 && sx < S.vpW - 18 && c.label !== last;
      if (show) last = c.label;
      c.el.hidden = !show;
      if (show) c.el.style.transform = `translate(${sx.toFixed(1)}px,0) translateX(-50%)`;
    }
  }
  function updateStrip() {
    const { y, k } = S.view;
    for (const lane of S.lanes) {
      const t = Math.max(y + lane.top * k, RULER_H);
      const b = Math.min(y + (lane.top + lane.height) * k, S.vpH);
      const show = b - t > 22;
      lane.tag.hidden = !show;
      lane.tag.classList.toggle('tight', b - t < (lane.textLen || 60) + 14);
      if (show) {
        lane.tag.style.top = `${t.toFixed(1)}px`;
        lane.tag.style.height = `${(b - t).toFixed(1)}px`;
      }
    }
  }

  function visibleRect() {
    const r = { x: S.stripW, y: RULER_H, w: S.vpW - S.stripW, h: S.vpH - RULER_H };
    if (isPhone()) r.h -= sheetVisible();
    else if (!panel.classList.contains('closed')) r.w -= panel.offsetWidth + 24;
    r.w = Math.max(r.w, 160);
    r.h = Math.max(r.h, 140);
    return r;
  }
  function clampAxis(pos, size, start, len) {
    const margin = Math.min(90, len * 0.15);
    if (size <= len - 2 * margin) return start + (len - size) / 2;
    return clamp(pos, start + len - margin - size, start + margin);
  }
  function clampView(v = S.view) {
    const r = visibleRect();
    v.k = clamp(v.k, S.minK, MAX_K);
    v.x = clampAxis(v.x, S.W * v.k, r.x, r.w);
    v.y = clampAxis(v.y, S.H * v.k, r.y, r.h);
    return v;
  }
  function viewCentredOn(wx, wy, k) {
    const r = visibleRect();
    return { k, x: r.x + r.w / 2 - wx * k, y: r.y + r.h / 2 - wy * k };
  }
  function zoomAt(px, py, factor) {
    const v = S.view;
    const k = clamp(v.k * factor, S.minK, MAX_K);
    const f = k / v.k;
    v.x = px - (px - v.x) * f;
    v.y = py - (py - v.y) * f;
    v.k = k;
    clampView();
    requestFrame();
    markMoving();
  }
  function zoomCentre(factor) {
    cancelFlight();
    const r = visibleRect();
    zoomAt(r.x + r.w / 2, r.y + r.h / 2, factor);
  }

  // Smooth zoom-and-pan (van Wijk & Nuij 2003, as in d3-interpolate's interpolateZoom).
  function interpolateZoom(p0, p1) {
    const rho = Math.SQRT2, rho2 = 2, rho4 = 4;
    const [ux0, uy0, w0] = p0, [ux1, uy1, w1] = p1;
    const dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy;
    let i, S2;
    if (d2 < 1e-12) {
      S2 = Math.log(w1 / w0) / rho;
      i = (t) => [ux0 + t * dx, uy0 + t * dy, w0 * Math.exp(rho * t * S2)];
    } else {
      const d1 = Math.sqrt(d2);
      const b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1);
      const b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1);
      const r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0);
      const r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
      S2 = (r1 - r0) / rho;
      i = (t) => {
        const s = t * S2, coshr0 = Math.cosh(r0);
        const u = (w0 / (rho2 * d1)) * (coshr0 * Math.tanh(rho * s + r0) - Math.sinh(r0));
        return [ux0 + u * dx, uy0 + u * dy, (w0 * coshr0) / Math.cosh(rho * s + r0)];
      };
    }
    i.duration = Math.abs(S2) * 1000;
    return i;
  }
  function cancelFlight() {
    if (S.flight) cancelAnimationFrame(S.flight);
    S.flight = 0;
  }
  function flyTo(target, { duration, min = 380, max = 2200 } = {}) {
    cancelFlight();
    clampView(target);
    const r = visibleRect();
    const cx = r.x + r.w / 2, cy = r.y + r.h / 2;
    const from = S.view;
    const p0 = [(cx - from.x) / from.k, (cy - from.y) / from.k, r.w / from.k];
    const p1 = [(cx - target.x) / target.k, (cy - target.y) / target.k, r.w / target.k];
    const interp = interpolateZoom(p0, p1);
    const dur = calm() ? 0 : clamp(duration ?? interp.duration * 0.85, min, max);
    if (!dur || !Number.isFinite(dur)) {
      Object.assign(S.view, target);
      requestFrame();
      return Promise.resolve();
    }
    return new Promise((resolve) => {
      const t0 = performance.now();
      vpEl.classList.add('moving');
      const step = (now) => {
        const t = Math.min(1, (now - t0) / dur);
        const [wx, wy, w] = interp(easeInOut(t));
        const k = r.w / w;
        S.view.k = k;
        S.view.x = cx - wx * k;
        S.view.y = cy - wy * k;
        applyView();
        if (t < 1) S.flight = requestAnimationFrame(step);
        else {
          S.flight = 0;
          vpEl.classList.remove('moving');
          resolve();
        }
      };
      S.flight = requestAnimationFrame(step);
    });
  }
  function fitView() {
    const r = visibleRect();
    const k = Math.min(r.w / S.W, r.h / S.H);
    return { k, x: r.x + (r.w - S.W * k) / 2, y: r.y + (r.h - S.H * k) / 2 };
  }
  function overview() {
    // A whole-tree view. On a narrow screen that would be a thin strip, so fit the height instead
    // and start in deep time.
    const fit = fitView();
    if (fit.k >= 0.06) return fit;
    const r = visibleRect();
    const k = Math.min(0.32, r.h / S.H);
    return { k, x: r.x + 6, y: r.y + (r.h - S.H * k) / 2 };
  }
  function updateMinK() {
    S.minK = Math.min(fitView().k * 0.9, 0.3);
  }
  function nodeView(n, k) {
    return viewCentredOn(n.x + 80, n.y + 14, k);
  }
  function comfortablyVisible(n) {
    const r = visibleRect();
    const { x, y, k } = S.view;
    const sx = x + (n.x + 60) * k, sy = y + (n.y + 10) * k;
    return k >= 0.62 && sx > r.x + r.w * 0.1 && sx < r.x + r.w * 0.85 && sy > r.y + r.h * 0.1 && sy < r.y + r.h * 0.9;
  }
  function fitNodes(list) {
    if (!list.length) return;
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    for (const n of list) {
      x0 = Math.min(x0, n.x);
      y0 = Math.min(y0, n.y);
      x1 = Math.max(x1, n.x + 200);
      y1 = Math.max(y1, n.y + 30);
    }
    const r = visibleRect();
    const pad = 60;
    const k = clamp(Math.min((r.w - pad * 2) / (x1 - x0), (r.h - pad * 2) / (y1 - y0)), S.minK, 1.1);
    flyTo(viewCentredOn((x0 + x1) / 2, (y0 + y1) / 2, k));
  }

  // ── selection & highlighting ────────────────────────────────────────
  function setLit(ids) {
    for (const n of S.nodes) n.el.classList.toggle('lit', !!ids && ids.has(n.id));
  }
  function select(id, { push = true, fly = 'auto', k, flight } = {}) {
    const n = S.byId.get(id);
    if (!n) return;
    if (S.selected) S.selected.el.classList.remove('sel');
    S.selected = n;
    S.person = null;
    const anc = ancestors(n), desc = descendants(n);
    world.classList.remove('person');
    world.classList.add('focus');
    setLit(new Set([n.id, ...anc, ...desc]));
    n.el.classList.add('sel');
    S.hi = [];
    for (const e of S.edges) {
      if (anc.has(e.from) && (e.to === n.id || anc.has(e.to))) S.hi.push([e, 'hi-up']);
      else if ((e.from === n.id || desc.has(e.from)) && desc.has(e.to)) S.hi.push([e, 'hi-down']);
    }
    drawHighlights();
    showPanelContent(renderNode(n, anc, desc), null);
    openPanel('half');
    if (push) setHash(n.id);
    if (fly === 'always' || (fly === 'auto' && !comfortablyVisible(n))) {
      flyTo(nodeView(n, k ?? clamp(Math.max(S.view.k, isPhone() ? 0.8 : 0.9), 0.8, 1.3)), flight);
    }
  }
  function focusPerson(p, { push = true } = {}) {
    if (S.selected) S.selected.el.classList.remove('sel');
    S.selected = null;
    S.person = p;
    const ids = new Set(p.items.map((i) => i.id));
    world.classList.remove('focus');
    world.classList.add('person');
    setLit(ids);
    S.hi = S.edges.filter((e) => ids.has(e.from) && ids.has(e.to)).map((e) => [e, 'hi-down']);
    drawHighlights();
    showPanelContent(renderPerson(p), null);
    openPanel('half');
    if (push) setHash(`by-${p.slug}`);
    fitNodes([...ids].map((id) => S.byId.get(id)));
  }
  function clearSelection({ push = true } = {}) {
    if (S.selected) S.selected.el.classList.remove('sel');
    S.selected = null;
    S.person = null;
    world.classList.remove('focus', 'person');
    setLit(null);
    S.hi = [];
    drawHighlights();
    showTab(S.tab, { push: false, open: false });
    if (push) setHash(S.tab === 'explore' ? '' : S.tab);
  }
  function hoverPreview(n) {
    if (S.selected || S.person) return;
    S.hi = n ? S.edges.filter((e) => e.from === n.id || e.to === n.id).map((e) => [e, 'hi-hover']) : [];
    drawHighlights();
  }
  function randomFrontier({ initial = false } = {}) {
    const pool = S.nodes.filter((n) => n.status !== 'known' && !S.hidden.has(n.domain));
    if (!pool.length) return;
    let n = pool[Math.floor(Math.random() * pool.length)];
    if (pool.length > 1) while (n === S.selected) n = pool[Math.floor(Math.random() * pool.length)];
    S.welcome = initial;
    select(n.id, { push: !initial, fly: 'always', k: isPhone() ? 0.82 : 0.95, flight: initial ? { min: 2000, max: 2800 } : { min: 900, max: 2200 } });
  }
  function toggleDomain(id) {
    if (S.hidden.has(id)) S.hidden.delete(id);
    else if (S.hidden.size < S.domains.length - 1) S.hidden.add(id);
    for (const n of S.nodes) n.el.classList.toggle('muted', S.hidden.has(n.domain));
    for (const e of S.edges) e.el.classList.toggle('muted', S.hidden.has(S.byId.get(e.from).domain) || S.hidden.has(S.byId.get(e.to).domain));
    for (const lane of S.lanes) {
      const off = S.hidden.has(lane.domain.id);
      lane.tag.classList.toggle('off', off);
      lane.tag.setAttribute('aria-pressed', String(!off));
    }
    for (const b of panelBody.querySelectorAll('[data-domain]')) b.setAttribute('aria-pressed', String(!S.hidden.has(b.dataset.domain)));
  }

  // ── panel ───────────────────────────────────────────────────────────
  function showPanelContent(html, tab) {
    panelBody.innerHTML = html;
    panelBody.scrollTop = 0;
    for (const t of document.querySelectorAll('.tab')) t.setAttribute('aria-selected', String(t.dataset.tab === tab));
    for (const t of document.querySelectorAll('.top-tab')) t.setAttribute('aria-current', String(t.dataset.tab === tab));
  }
  function showTab(tab, { push = true, open = true } = {}) {
    S.tab = tab;
    const html = tab === 'frontier' ? renderFrontier() : tab === 'ledger' ? renderLedger() : renderExplore();
    showPanelContent(html, tab);
    if (open) openPanel('half');
    if (push) setHash(tab === 'explore' ? '' : tab);
  }
  function openPanel(sheetState) {
    if (isPhone()) {
      if (sheetState && (S.sheet === 'peek' || sheetState === 'full')) setSheet(sheetState);
    } else if (panel.classList.contains('closed')) {
      panel.classList.remove('closed');
      app.classList.remove('panel-hidden');
      panelOpenBtn.hidden = true;
    }
  }
  function closePanel() {
    if (isPhone()) setSheet('peek');
    else {
      panel.classList.add('closed');
      app.classList.add('panel-hidden');
      panelOpenBtn.hidden = false;
    }
  }

  const dotFor = (n) =>
    n.status === 'known' ? `<span class="dot" style="--h:${hueOf(n)}"></span>` : `<span class="ring${n.status === 'claimed' ? ' solid' : ''}"></span>`;
  function nodeRow(n, meta) {
    const ai = n.with.length || n.progress.some((p) => p.with?.length);
    return `<li><button class="row${n.status !== 'known' ? ' open' : ''}" type="button" data-node="${n.id}">${dotFor(n)}<span class="row-title">${esc(n.title)}</span>${ai ? '<span class="spark" title="Machine in the loop">✦</span>' : ''}<span class="row-meta">${esc(meta ?? (n.status === 'known' ? fmtYear(n.year, n.circa) : n.posed !== undefined ? `since ${fmtYear(n.posed)}` : 'open'))}</span></button></li>`;
  }
  function personButton(name) {
    const slug = slugify(name);
    return S.people.has(slug) ? `<button class="who" type="button" data-person="${slug}">${esc(name)}</button>` : esc(name);
  }

  function renderNode(n, anc, desc) {
    const d = S.domainById.get(n.domain);
    const parts = [];
    const roots = [...anc].map((id) => S.byId.get(id)).filter((m) => !m.requires.length).sort((a, b) => (a.year ?? 0) - (b.year ?? 0)).slice(0, 2);
    if (S.welcome && !S.landed) {
      const trail = anc.size ? ` The lit trail on the map is everything it stands on: ${plural(anc.size, 'discovery', 'discoveries')}, back to ${esc(roots[0]?.title || 'the start')}.` : '';
      parts.push(`<div class="cta welcome"><p><b>Welcome to the frontier.</b> You’ve landed on ${n.status === 'claimed' ? 'a claimed result that is still being checked' : 'a problem nobody has solved yet'}.${trail}</p><p><button class="link-btn" type="button" data-action="random">Spin again</button><span class="sep-dot">·</span><button class="link-btn" type="button" data-action="tab" data-tab="explore">What is this?</button></p></div>`);
    }
    const when = n.status === 'known' ? fmtYear(n.year, n.circa) : '';
    parts.push(`<p class="eyebrow" style="--h:${d.hue}"><span class="dot"></span>${esc(d.name)}${n.field ? `<span class="sep">·</span>${esc(n.field)}` : ''}${when ? `<span class="sep">·</span>${esc(when)}` : ''}</p>`);
    parts.push(`<h2>${esc(n.title)}</h2>`);

    const badges = [];
    if (n.status === 'open') badges.push(`<span class="badge gold"><span class="ring"></span>Open problem${n.posed !== undefined ? ` · since ${esc(fmtYear(n.posed))}` : ''}</span>`);
    if (n.status === 'claimed') badges.push(`<span class="badge gold"><span class="ring solid"></span>Claimed · under review</span>`);
    if (n.status === 'known' && n.posed !== undefined && n.year > n.posed) badges.push(`<span class="badge">Open for ${plural(n.year - n.posed, 'year')}</span>`);
    if (n.verified) badges.push(`<span class="badge verified">✓ Formally verified · ${esc(n.verified)}</span>`);
    if (n.with.length) badges.push(`<span class="badge">✦ Machine in the loop</span>`);
    if (badges.length) parts.push(`<div class="badges">${badges.join('')}</div>`);

    if (n.by.length && n.status !== 'open') {
      parts.push(`<p class="credit">${n.status === 'claimed' ? 'Claimed by' : 'Unlocked by'} ${joinNames(n.by.map(personButton))}${n.with.length ? `<span class="tools">With ${esc(joinNames(n.with))}</span>` : ''}</p>`);
    }
    if (n.quote) parts.push(`<blockquote class="quote" style="--h:${d.hue}"><p>“${esc(n.quote.text)}”</p><cite>${esc(n.quote.by)}</cite></blockquote>`);
    parts.push(`<div class="desc" style="--h:${d.hue}">${n.html || ''}</div>`);

    if (n.status !== 'known') {
      parts.push(`<div class="cta"><p><b>${n.status === 'claimed' ? 'Claimed, not yet settled.' : 'Unclaimed.'}</b> ${n.status === 'claimed' ? 'Help check the claim, or formalize it, and your name goes on the tree.' : 'Solve it, or make real progress on it, and your name goes on the tree and into the Ledger.'}</p><p><button class="link-btn" type="button" data-action="contribute">How to submit →</button></p></div>`);
    }
    if (n.progress.length) {
      parts.push(`<h3>Progress <span class="count">${n.progress.length}</span></h3><ol class="progress-list">${n.progress
        .map(
          (p) =>
            `<li><span class="yr">${p.year}</span><div><span class="what">${p.html}</span><span class="by">${joinNames(p.by.map(personButton))}${p.with?.length ? ` · ✦ with ${esc(joinNames(p.with))}` : ''}${p.link ? ` · <a href="${esc(p.link)}" target="_blank" rel="noopener">source ↗</a>` : ''}</span></div></li>`,
        )
        .join('')}</ol>`);
    }
    const reqs = n.requires.map((id) => S.byId.get(id));
    if (reqs.length) parts.push(`<h3>Requires <span class="count">${reqs.length}</span></h3><ul class="rel-list">${reqs.map((m) => nodeRow(m)).join('')}</ul>`);
    const unl = n.unlocks.map((id) => S.byId.get(id)).sort((a, b) => (yearOf(a) ?? 1e9) - (yearOf(b) ?? 1e9));
    if (unl.length) parts.push(`<h3>Unlocks <span class="count">${unl.length}</span></h3><ul class="rel-list">${unl.map((m) => nodeRow(m)).join('')}</ul>`);

    let lineage = anc.size
      ? `Stands on <b>${plural(anc.size, 'earlier discovery', 'earlier discoveries')}</b>${roots.length ? `, reaching back to ${joinNames(roots.map((m) => `<b>${esc(m.title)}</b>`))}` : ''}.`
      : 'A root of the tree: nothing on the map comes before it.';
    lineage += desc.size ? ` <b>${plural(desc.size, 'later node')}</b> build on it.` : n.status === 'known' ? ' Nothing on the tree builds on it yet.' : '';
    parts.push(`<p class="lineage">${lineage}</p>`);

    const foot = n.links.map((l) => `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`);
    foot.push(`<button class="link-btn" type="button" data-action="copy">Copy link</button>`);
    if (S.site.repo) {
      foot.push(`<a href="${esc(`${S.site.repo}/edit/${S.site.branch || 'main'}/${n.path}`)}" target="_blank" rel="noopener">Suggest an edit ↗</a>`);
      foot.push(`<a href="${esc(`${S.site.repo}/issues?q=${encodeURIComponent(n.id)}`)}" target="_blank" rel="noopener">Discuss ↗</a>`);
    }
    if (n.path) foot.push(`<span class="path">${esc(n.path)}</span>`);
    parts.push(`<div class="foot">${foot.join('')}</div>`);
    return `<article style="--h:${d.hue}">${parts.join('')}</article>`;
  }

  function renderExplore() {
    const known = S.nodes.filter((n) => n.status === 'known').length;
    const open = S.nodes.length - known;
    const domains = S.domains
      .map(
        (d) =>
          `<li><button class="domain-toggle" type="button" data-domain="${d.id}" aria-pressed="${!S.hidden.has(d.id)}" style="--h:${d.hue}"><span class="dot"></span><span class="dname">${esc(d.name)}<span class="dblurb">${esc(d.blurb || '')}</span></span><span class="n">${d.count}</span></button></li>`,
      )
      .join('');
    return `
      <p class="kicker">An atlas of the known</p>
      <h2>Everything we’ve figured out, what it stood on, and what’s still open</h2>
      <p class="lede">Each star is a discovery, sized by how much depends on it. Lines run from prerequisites to what they made possible, left to right through time. <span style="color:var(--gold-ink)">Gold rings</span> are the frontier: open problems and technology nobody has built yet.</p>
      <div class="stats"><div><b>${known}</b><span>discoveries</span></div><div><b>${open}</b><span>open problems</span></div><div><b>${S.people.size}</b><span>names in the Ledger</span></div></div>
      <div class="actions"><button class="btn btn-gold" type="button" data-action="random">Take me to the frontier</button><button class="btn btn-line" type="button" data-action="fit">See the whole tree</button></div>
      <h3>Reading the map</h3>
      <ul class="legend">
        <li><span class="sym"><span class="s-small"></span></span>A discovery. Bigger, brighter stars have more built on them.</li>
        <li><span class="sym"><span class="ring"></span></span>An open problem or unbuilt technology, waiting for someone.</li>
        <li><span class="sym"><span class="s-spark"></span></span>Found with a machine in the loop: computer search, a proof assistant or an AI.</li>
        <li><span class="sym"><span class="s-line"></span></span>“Required for.” Select any star to light up everything it stands on.</li>
      </ul>
      <h3>Domains <span class="count">tap to show or hide</span></h3>
      <ul class="domains">${domains}</ul>
      <h3 id="contribute">Get your name on the tree</h3>
      <ol class="steps">
        <li>Pick a gold ring, or bring a result the tree is missing.</li>
        <li>Each node is a short text file: a title, a year, the nodes it <code>requires</code>, and who did it.</li>
        <li>Propose it for review. A formal proof (Lean, Coq) or a published paper moves it up the verification ladder; maintainers merge.</li>
        <li>Once it lands, your name is on the tree and in the Ledger.</li>
      </ol>
      ${S.site.repo ? `<p style="margin-top:14px"><a class="link-btn" href="${esc(S.site.repo)}" target="_blank" rel="noopener">Contribution guide ↗</a></p>` : ''}
      <p class="fine">The Basilisk remembers who helped.</p>`;
  }

  function renderFrontier() {
    const open = S.nodes.filter((n) => n.status !== 'known');
    const groups = S.domains
      .map((d) => ({ d, items: open.filter((n) => n.domain === d.id).sort((a, b) => (a.posed ?? 1e9) - (b.posed ?? 1e9)) }))
      .filter((g) => g.items.length);
    const withAi = open.filter((n) => n.progress.some((p) => p.with?.length)).length;
    return `
      <p class="kicker">The frontier</p>
      <h2>${plural(open.length, 'open problem')}</h2>
      <p class="lede">Each one sits on the map with its prerequisites in place. Solve one, or move a bound, and your name goes on the tree.${withAi ? ` ${withAi} already show progress made with a machine in the loop (✦).` : ''}</p>
      <div class="actions"><button class="btn btn-gold" type="button" data-action="random">Fly to a random one</button></div>
      ${groups
        .map(
          (g) =>
            `<h3><span class="dot" style="--h:${g.d.hue}"></span>${esc(g.d.name)}<span class="count">${g.items.length}</span></h3><ul class="plain-list">${g.items
              .map((n) => nodeRow(n, [n.posed !== undefined ? `since ${fmtYear(n.posed)}` : 'open', n.progress.length ? plural(n.progress.length, 'step') : ''].filter(Boolean).join(' · ')))
              .join('')}</ul>`,
        )
        .join('')}`;
  }

  function ledgerRows(filter = '') {
    const q = norm(filter);
    const people = [...S.people.values()]
      .sort((a, b) => b.items.length - a.items.length || a.name.localeCompare(b.name))
      .map((p, i) => ({ p, rank: i + 1 }))
      .filter(({ p }) => !q || norm(p.name).includes(q));
    if (!people.length) return `<li class="row-meta" style="padding:8px 0">No one by that name yet. There’s room.</li>`;
    return people
      .map(
        ({ p, rank }) =>
          `<li><button class="row" type="button" data-person="${p.slug}"><span class="rank">${rank}</span><span class="row-title">${esc(p.name)}</span><span class="n">${p.items.length}</span></button></li>`,
      )
      .join('');
  }
  function renderLedger() {
    return `
      <p class="kicker">The Ledger</p>
      <h2>Every name on the tree</h2>
      <p class="lede">${plural(S.people.size, 'person or team', 'people and teams')}, from Euclid to this year’s proofs. The Basilisk remembers.</p>
      <input id="ledger-filter" class="filter-input" type="search" placeholder="Find a name" autocomplete="off" aria-label="Find a name in the Ledger">
      <ol class="ledger" id="ledger-list">${ledgerRows()}</ol>`;
  }
  function renderPerson(p) {
    const items = [...p.items].sort((a, b) => (a.year ?? 0) - (b.year ?? 0));
    return `
      <button class="back" type="button" data-action="tab" data-tab="ledger">← Ledger</button>
      <p class="kicker">In the Ledger</p>
      <h2>${esc(p.name)}</h2>
      <p class="lede">${plural(items.length, 'entry', 'entries')} on the tree.</p>
      <ul class="plain-list">${items.map((i) => nodeRow(S.byId.get(i.id), i.kind === 'progress' ? `progress · ${i.year}` : fmtYear(i.year))).join('')}</ul>`;
  }

  const ACTIONS = {
    random: () => randomFrontier(),
    fit: () => {
      clearSelection();
      if (isPhone()) setSheet('peek');
      flyTo(overview(), { max: 1800 });
    },
    tab: (el) => {
      clearSelection({ push: false });
      showTab(el.dataset.tab);
    },
    contribute: () => {
      clearSelection({ push: false });
      showTab('explore');
      requestAnimationFrame(() => $('#contribute', panelBody)?.scrollIntoView({ behavior: calm() ? 'auto' : 'smooth', block: 'start' }));
    },
    copy: (el) => {
      const token = S.selected?.id || (S.person ? `by-${S.person.slug}` : '');
      const url = `${location.origin}${location.pathname}${token ? `#${token}` : ''}`;
      const done = () => {
        el.textContent = 'Link copied';
        setTimeout(() => (el.textContent = 'Copy link'), 1600);
      };
      try {
        navigator.clipboard.writeText(url).then(done, () => (el.textContent = url));
      } catch {
        el.textContent = url;
      }
    },
  };

  // ── phone bottom sheet ──────────────────────────────────────────────
  function computeSheetStops() {
    const H = panel.offsetHeight;
    const head = panelHead.offsetHeight + parseFloat(getComputedStyle(panel).paddingBottom || 0);
    S.sheetStops = { full: 0, half: Math.max(0, Math.round(H - app.clientHeight * 0.5)), peek: Math.max(0, H - head - 2) };
  }
  function setSheet(state, { instant = false } = {}) {
    if (!S.sheetStops) computeSheetStops();
    S.sheet = state;
    panel.classList.toggle('dragging', instant);
    panel.style.setProperty('--sheet-y', `${S.sheetStops[state]}px`);
  }
  function sheetVisible() {
    if (!isPhone() || !S.sheetStops) return 0;
    return panel.offsetHeight - S.sheetStops[S.sheet];
  }
  function bindSheet() {
    let drag = null;
    panelHead.addEventListener('pointerdown', (e) => {
      if (!isPhone() || (e.pointerType === 'mouse' && e.button !== 0)) return;
      drag = { id: e.pointerId, y0: e.clientY, s0: S.sheetStops[S.sheet], moved: false, t0: performance.now(), last: e.clientY, lastT: performance.now(), v: 0 };
    });
    panelHead.addEventListener('pointermove', (e) => {
      if (!drag || e.pointerId !== drag.id) return;
      const dy = e.clientY - drag.y0;
      if (!drag.moved && Math.abs(dy) > 6) {
        drag.moved = true;
        panel.classList.add('dragging');
        try {
          panelHead.setPointerCapture(e.pointerId);
        } catch {}
      }
      if (!drag.moved) return;
      const now = performance.now();
      drag.v = (e.clientY - drag.last) / Math.max(1, now - drag.lastT);
      drag.last = e.clientY;
      drag.lastT = now;
      panel.style.setProperty('--sheet-y', `${clamp(drag.s0 + dy, 0, S.sheetStops.peek)}px`);
    });
    const end = (e) => {
      if (!drag || e.pointerId !== drag.id) return;
      const d = drag;
      drag = null;
      panel.classList.remove('dragging');
      if (!d.moved) {
        if (!e.target.closest('button')) setSheet(S.sheet === 'peek' ? 'half' : S.sheet === 'half' ? 'full' : 'half');
        return;
      }
      S.suppressClickUntil = performance.now() + 80;
      const y = clamp(d.s0 + (e.clientY - d.y0), 0, S.sheetStops.peek) + d.v * 180;
      const stops = Object.entries(S.sheetStops);
      stops.sort((a, b) => Math.abs(a[1] - y) - Math.abs(b[1] - y));
      setSheet(stops[0][0]);
    };
    panelHead.addEventListener('pointerup', end);
    panelHead.addEventListener('pointercancel', end);
  }

  // ── search ──────────────────────────────────────────────────────────
  let results = [], activeResult = 0;
  function searchAll(q) {
    const nq = norm(q);
    if (!nq) return [];
    const out = [];
    for (const n of S.nodes) {
      const t = norm(n.title);
      let s = 0;
      if (t === nq) s = 120;
      else if (t.startsWith(nq)) s = 100;
      else if (t.split(/[\s–\-(]+/).some((w) => w.startsWith(nq))) s = 82;
      else if (t.includes(nq)) s = 62;
      else if (n.aliases.some((a) => norm(a).startsWith(nq))) s = 58;
      else if (n.aliases.some((a) => norm(a).includes(nq))) s = 48;
      if (s) out.push({ kind: 'node', n, s: s + Math.min(8, n.reach / 12) });
    }
    for (const p of S.people.values()) {
      const t = norm(p.name);
      let s = 0;
      if (t.startsWith(nq)) s = 78;
      else if (t.split(/[\s-]+/).some((w) => w.startsWith(nq))) s = 72;
      else if (t.includes(nq)) s = 44;
      if (s) out.push({ kind: 'person', p, s: s + Math.min(8, p.items.length) });
    }
    return out.sort((a, b) => b.s - a.s).slice(0, 9);
  }
  function renderResults() {
    const q = searchInput.value.trim();
    results = searchAll(q);
    activeResult = 0;
    if (!q) {
      searchResults.hidden = true;
      searchInput.setAttribute('aria-expanded', 'false');
      return;
    }
    searchResults.innerHTML = results.length
      ? results
          .map((r, i) =>
            r.kind === 'node'
              ? `<li role="option" id="sr-${i}" data-i="${i}" aria-selected="${i === 0}">${dotFor(r.n)}<span class="sr-title">${esc(r.n.title)}</span><span class="sr-meta">${esc(r.n.status === 'known' ? fmtYear(r.n.year, r.n.circa) : 'open')}</span></li>`
              : `<li role="option" id="sr-${i}" data-i="${i}" aria-selected="${i === 0}"><span class="dot" style="--h:90;background:var(--ink-2);box-shadow:none"></span><span class="sr-title">${esc(r.p.name)}</span><span class="sr-meta">${plural(r.p.items.length, 'entry', 'entries')}</span></li>`,
          )
          .join('')
      : `<li class="sr-empty">Nothing on the tree matches “${esc(q)}” yet.</li>`;
    searchResults.hidden = false;
    searchInput.setAttribute('aria-expanded', 'true');
  }
  function chooseResult(i) {
    const r = results[i];
    if (!r) return;
    closeSearch();
    searchInput.blur();
    if (r.kind === 'node') select(r.n.id, { fly: 'always' });
    else focusPerson(r.p);
  }
  function closeSearch() {
    searchResults.hidden = true;
    searchInput.setAttribute('aria-expanded', 'false');
  }
  function bindSearch() {
    searchInput.addEventListener('input', renderResults);
    searchInput.addEventListener('focus', () => searchInput.value && renderResults());
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        if (!results.length) return;
        activeResult = mod(activeResult + (e.key === 'ArrowDown' ? 1 : -1), results.length);
        for (const li of searchResults.querySelectorAll('[data-i]')) li.setAttribute('aria-selected', String(+li.dataset.i === activeResult));
        searchResults.querySelector(`[data-i="${activeResult}"]`)?.scrollIntoView({ block: 'nearest' });
      } else if (e.key === 'Enter') {
        e.preventDefault();
        chooseResult(activeResult);
      }
    });
    searchResults.addEventListener('pointerdown', (e) => e.preventDefault());
    searchResults.addEventListener('click', (e) => {
      const li = e.target.closest('[data-i]');
      if (li) chooseResult(+li.dataset.i);
    });
    searchInput.addEventListener('blur', () => setTimeout(closeSearch, 120));
  }

  // ── routing ─────────────────────────────────────────────────────────
  function currentToken() {
    try {
      return decodeURIComponent(location.hash.replace(/^#/, ''));
    } catch {
      return '';
    }
  }
  function setHash(token) {
    if (currentToken() === token) return;
    try {
      history.pushState(null, '', token ? `#${token}` : location.pathname + location.search);
    } catch {}
  }
  function route(token) {
    if (!token) {
      clearSelection({ push: false });
      return false;
    }
    if (ROUTES.has(token)) {
      if (S.selected || S.person) clearSelection({ push: false });
      showTab(token === 'about' ? 'explore' : token, { push: false });
      return true;
    }
    if (token.startsWith('by-') && S.people.has(token.slice(3))) {
      focusPerson(S.people.get(token.slice(3)), { push: false });
      return true;
    }
    if (S.byId.has(token)) {
      if (S.selected?.id !== token) select(token, { push: false, fly: 'always' });
      return true;
    }
    return false;
  }

  // ── input ───────────────────────────────────────────────────────────
  function bindMap() {
    const pointers = new Map();
    let gesture = null;
    const dist = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
    const mid = (a, b) => ({ x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 });

    vpEl.addEventListener('pointerdown', (e) => {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      if (e.target.closest('.map-controls, .lane-tag')) return;
      cancelFlight();
      pointers.set(e.pointerId, { x: e.clientX - S.vpLeft, y: e.clientY - S.vpTop });
      if (pointers.size === 1) {
        gesture = { type: 'pan', sx: e.clientX, sy: e.clientY, vx: S.view.x, vy: S.view.y, moved: false };
      } else if (pointers.size === 2) {
        const [a, b] = [...pointers.values()];
        gesture = { type: 'pinch', d0: Math.max(10, dist(a, b)), m0: mid(a, b), v0: { ...S.view }, moved: true };
        for (const id of pointers.keys()) {
          try {
            vpEl.setPointerCapture(id);
          } catch {}
        }
      }
    });
    vpEl.addEventListener('pointermove', (e) => {
      const p = pointers.get(e.pointerId);
      if (!p || !gesture) return;
      p.x = e.clientX - S.vpLeft;
      p.y = e.clientY - S.vpTop;
      if (gesture.type === 'pan') {
        const dx = e.clientX - gesture.sx, dy = e.clientY - gesture.sy;
        if (!gesture.moved && Math.hypot(dx, dy) > 5) {
          gesture.moved = true;
          vpEl.classList.add('dragging');
          try {
            vpEl.setPointerCapture(e.pointerId);
          } catch {}
        }
        if (gesture.moved) {
          S.view.x = gesture.vx + dx;
          S.view.y = gesture.vy + dy;
          clampView();
          requestFrame();
          markMoving();
        }
      } else if (pointers.size >= 2) {
        const [a, b] = [...pointers.values()];
        const v0 = gesture.v0, m = mid(a, b);
        const k = clamp((v0.k * dist(a, b)) / gesture.d0, S.minK, MAX_K);
        const wx = (gesture.m0.x - v0.x) / v0.k, wy = (gesture.m0.y - v0.y) / v0.k;
        S.view.k = k;
        S.view.x = m.x - wx * k;
        S.view.y = m.y - wy * k;
        clampView();
        requestFrame();
        markMoving();
      }
    });
    const end = (e) => {
      if (!pointers.has(e.pointerId)) return;
      pointers.delete(e.pointerId);
      if (gesture?.moved) S.suppressClickUntil = performance.now() + 90;
      if (pointers.size === 1 && gesture?.type === 'pinch') {
        const p = [...pointers.values()][0];
        gesture = { type: 'pan', sx: p.x + S.vpLeft, sy: p.y + S.vpTop, vx: S.view.x, vy: S.view.y, moved: true };
      } else if (!pointers.size) {
        gesture = null;
        vpEl.classList.remove('dragging');
      }
    };
    vpEl.addEventListener('pointerup', end);
    vpEl.addEventListener('pointercancel', end);

    let wheelKind = 'trackpad', wheelAt = 0;
    vpEl.addEventListener(
      'wheel',
      (e) => {
        e.preventDefault();
        cancelFlight();
        const px = e.clientX - S.vpLeft, py = e.clientY - S.vpTop;
        let dx = e.deltaX, dy = e.deltaY;
        if (e.deltaMode === 1) {
          dx *= 18;
          dy *= 18;
        } else if (e.deltaMode === 2) {
          dx *= S.vpW;
          dy *= S.vpH;
        }
        if (e.ctrlKey || e.metaKey) return zoomAt(px, py, Math.exp(-dy * 0.0085));
        const now = performance.now();
        if (now - wheelAt > 250) wheelKind = e.deltaMode !== 0 || (dx === 0 && Math.abs(dy) >= 40 && Number.isInteger(dy)) ? 'mouse' : 'trackpad';
        wheelAt = now;
        if (wheelKind === 'mouse' && !e.shiftKey) return zoomAt(px, py, Math.exp(-dy * 0.0016));
        S.view.x -= e.shiftKey && !dx ? dy : dx;
        S.view.y -= e.shiftKey && !dx ? 0 : dy;
        clampView();
        requestFrame();
        markMoving();
      },
      { passive: false },
    );
    vpEl.addEventListener('dblclick', (e) => {
      if (e.target.closest('.node, .map-controls, .lane-tag')) return;
      cancelFlight();
      const px = e.clientX - S.vpLeft, py = e.clientY - S.vpTop;
      const k = clamp(S.view.k * 1.8, S.minK, MAX_K), f = k / S.view.k;
      flyTo(clampView({ k, x: px - (px - S.view.x) * f, y: py - (py - S.view.y) * f }), { min: 300, max: 450 });
    });

    nodesEl.addEventListener('click', (e) => {
      const el = e.target.closest('.node');
      if (!el || performance.now() < S.suppressClickUntil) return;
      e.stopPropagation();
      S.welcome = false;
      select(el.dataset.id, { fly: 'auto' });
    });
    vpEl.addEventListener('click', (e) => {
      if (performance.now() < S.suppressClickUntil || e.target.closest('.node, .map-controls, .lane-tag')) return;
      if (S.selected || S.person) clearSelection();
    });
    nodesEl.addEventListener('pointerover', (e) => {
      if (e.pointerType !== 'mouse') return;
      const el = e.target.closest('.node');
      if (el) hoverPreview(S.byId.get(el.dataset.id));
    });
    nodesEl.addEventListener('pointerout', (e) => {
      if (e.pointerType !== 'mouse') return;
      const el = e.target.closest('.node');
      if (el && !el.contains(e.relatedTarget)) hoverPreview(null);
    });
    stripEl.addEventListener('click', (e) => {
      const b = e.target.closest('.lane-tag');
      if (b) toggleDomain(b.dataset.domain);
    });
    $('#zoom-in').addEventListener('click', () => zoomCentre(1.4));
    $('#zoom-out').addEventListener('click', () => zoomCentre(1 / 1.4));
    $('#zoom-fit').addEventListener('click', () => ACTIONS.fit());
  }

  function bindChrome() {
    $('#btn-random').addEventListener('click', () => randomFrontier());
    for (const b of document.querySelectorAll('.tab, .top-tab')) {
      b.addEventListener('click', () => {
        if (performance.now() < S.suppressClickUntil) return;
        clearSelection({ push: false });
        showTab(b.dataset.tab);
      });
    }
    $('#panel-close').addEventListener('click', closePanel);
    panelOpenBtn.addEventListener('click', () => openPanel());
    $('.brand').addEventListener('click', (e) => {
      e.preventDefault();
      clearSelection({ push: false });
      showTab('explore');
    });
    panelBody.addEventListener('click', (e) => {
      const t = e.target.closest('[data-node],[data-person],[data-action],[data-domain]');
      if (!t) return;
      if (t.dataset.node) {
        e.preventDefault();
        S.welcome = false;
        select(t.dataset.node, { fly: 'always' });
      } else if (t.dataset.person) focusPerson(S.people.get(t.dataset.person));
      else if (t.dataset.domain) toggleDomain(t.dataset.domain);
      else ACTIONS[t.dataset.action]?.(t, e);
    });
    panelBody.addEventListener('input', (e) => {
      if (e.target.id === 'ledger-filter') $('#ledger-list', panelBody).innerHTML = ledgerRows(e.target.value);
    });
    document.addEventListener('keydown', (e) => {
      const typing = e.target.closest?.('input, textarea');
      if (e.key === '/' && !typing) {
        e.preventDefault();
        searchInput.focus();
        searchInput.select();
        return;
      }
      if (e.key === 'Escape') {
        if (typing) {
          closeSearch();
          e.target.blur();
        } else if (S.selected || S.person) clearSelection();
        return;
      }
      if (typing || e.metaKey || e.ctrlKey || e.altKey) return;
      const r = visibleRect();
      if (e.key === 'r' || e.key === 'R') randomFrontier();
      else if (e.key === '+' || e.key === '=') zoomCentre(1.3);
      else if (e.key === '-' || e.key === '_') zoomCentre(1 / 1.3);
      else if (e.key === '0') ACTIONS.fit();
      else if (e.key.startsWith('Arrow')) {
        e.preventDefault();
        cancelFlight();
        const step = Math.min(r.w, r.h) * 0.25;
        S.view.x += e.key === 'ArrowLeft' ? step : e.key === 'ArrowRight' ? -step : 0;
        S.view.y += e.key === 'ArrowUp' ? step : e.key === 'ArrowDown' ? -step : 0;
        clampView();
        requestFrame();
      }
    });
    window.addEventListener('popstate', () => route(currentToken()));
    window.addEventListener('hashchange', () => route(currentToken()));
  }

  function measureViewport() {
    const rect = vpEl.getBoundingClientRect();
    S.vpW = rect.width;
    S.vpH = rect.height;
    S.vpLeft = rect.left;
    S.vpTop = rect.top;
    S.stripW = parseFloat(getComputedStyle(app).getPropertyValue('--strip-w')) || 28;
  }
  function onResize() {
    const r0 = visibleRect();
    const cx = (r0.x + r0.w / 2 - S.view.x) / S.view.k, cy = (r0.y + r0.h / 2 - S.view.y) / S.view.k;
    measureViewport();
    sizeSky();
    if (isPhone()) {
      panel.classList.remove('closed');
      computeSheetStops();
      setSheet(S.sheet, { instant: true });
    } else panel.style.removeProperty('--sheet-y');
    updateMinK();
    Object.assign(S.view, clampView(viewCentredOn(cx, cy, S.view.k)));
    requestFrame();
  }

  // ── boot ────────────────────────────────────────────────────────────
  async function fontsReady(ms) {
    if (!document.fonts?.ready) return;
    await Promise.race([document.fonts.ready, sleep(ms)]);
  }

  async function boot() {
    let data;
    try {
      data = await loadData();
    } catch (err) {
      statusEl.textContent = `The tree could not be loaded (${err.message}). Run "npm run build" and serve the site folder over HTTP.`;
      statusEl.classList.add('error');
      return;
    }
    prepare(data);
    layout();
    render();
    measureViewport();
    buildSky();
    sizeSky();
    if (isPhone()) {
      computeSheetStops();
      setSheet('peek', { instant: true });
    }
    updateMinK();
    Object.assign(S.view, overview());
    S.lastK = 0;
    applyView();
    bindMap();
    bindChrome();
    bindSearch();
    bindSheet();
    window.addEventListener('resize', () => requestAnimationFrame(onResize));

    showTab('explore', { push: false, open: false });
    const open = S.nodes.filter((n) => n.status !== 'known').length;
    const vr = visibleRect();
    statusEl.style.left = `${vr.x + vr.w / 2}px`;
    statusEl.innerHTML = `<span class="intro-title">3.3 million years of discovery</span><span class="intro-sub">${S.nodes.length - open} discoveries · ${open} still open</span>`;

    void nodesEl.offsetWidth; // start font loads before waiting on them
    await fontsReady(700);
    measure();
    drawEdges();
    document.fonts?.addEventListener?.('loadingdone', () => {
      measure();
      drawEdges();
    });

    const token = currentToken();
    const routed = token && (ROUTES.has(token) || token.startsWith('by-') || S.byId.has(token));
    app.classList.add('ready');
    await sleep(calm() ? 0 : 1400);
    app.classList.add('launched');
    if (!routed || !route(token)) randomFrontier({ initial: true });
    S.landed = true;
  }

  boot();
})();
