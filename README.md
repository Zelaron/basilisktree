# Basilisk Tree

A tech tree of human knowledge in the spirit of Sid Meier's Alpha Centauri, running from the first stone tools to the open frontier. Every node is a discovery, linked to the discoveries it stood on. Gold rings are open problems and unbuilt technology. Solve one, or make real progress on it, and your name goes on the tree.

The site opens on a view of the whole tree, then flies to a random open problem and lights up everything that problem depends on.

```
tree/               the data: one Markdown file per node, one folder per domain
  domains.yaml      the lanes (domains), their order and colours
scripts/build.mjs   validates tree/ and compiles it to site/data/tree.json
site/               the static website: index.html, style.css, app.js (no framework)
deploy/             Apache config and a deploy script for a self-hosted server
```

## Run it

```sh
npm install
npm run dev        # build the data, then serve site/ at http://localhost:8080
npm run check      # validate only; this is what CI runs on every pull request
npm run bundle     # also write dist/basilisktree.html, one self-contained page
```

The build fails on anything that would break the map: unknown or misspelled fields, a prerequisite that doesn't exist, a cycle, a duplicate id or a malformed link.

## A node

`tree/math/fourier-analysis.md`:

```markdown
---
title: Fourier Analysis
year: 1822
requires: [pdes, trigonometry]
by: [Joseph Fourier]
links:
  - https://en.wikipedia.org/wiki/Fourier_analysis
---
Fourier claimed that any function is a sum of sines and cosines (1822). Making that
precise drove much of 19th-century analysis; today it runs signal processing, JPEG and MRI.
```

The file name is the id. Only prerequisites are stored. The "unlocks" direction is computed, so a new node never has to edit an old one. See [CONTRIBUTING.md](CONTRIBUTING.md) for every field, the rules for credit and the verification ladder.

## How the map is drawn

- **Columns are eras.** Years are cut into bins with roughly equal numbers of nodes, so deep time compresses and recent decades spread out. A node is then pushed right of all its prerequisites.
- **Lanes are domains**, in the order of `domains.yaml`. Inside a lane, a few sweeps pull each node toward the height of its neighbours to straighten chains.
- **Star size is reach**: how many later nodes depend on it.
- **Gold rings** are `status: open`, and **four-point stars** mark results found with a machine in the loop (`with:`).
- Zoomed out, labels give way to stars, and a few of the brightest stars keep their names.

The layout is computed in the browser from the compiled JSON, so adding a node never means hand-placing it.

## How changes go live

```
merge to main
  → GitHub Actions (.github/workflows/deploy.yml): npm run check, npm run build,
    then force-push the built site/ to the "live" branch
web server, every minute (cron)
  → deploy/sync.sh: fetch "live"; if it changed, rsync it into /var/www/basilisktree.org/public_html
```

From merge to live takes about two minutes. If the check fails, the live branch doesn't move. To roll back, revert the commit on main. The server never holds credentials: it only reads this public repo. Apache configs for basilisktree.org and the basilisktree.net redirect are in `deploy/`. If `sync.sh` changes, copy it to the server by hand.

Pull requests run the same check through `.github/workflows/check.yml`.

## Roadmap

1. **Git as the database.** Contributions arrive as pull requests. CI runs `npm run check`, maintainers review and merge, and a merge redeploys the site. Bans and spam control come from the host (GitHub or Codeberg).
2. **A discussion thread per node** through giscus (GitHub Discussions), linked from each node's panel.
3. **A "Propose a node" form** on the site that opens the pull request for you, so contributors never touch YAML.
4. **An AI reviewer** that comments on each pull request with prerequisite suggestions, duplicate and literature checks, and a significance estimate against a published rubric. It advises and never merges.
5. **Formal verification in CI**: a node with a Lean proof gets its proof built against Mathlib before it can be marked verified.
6. **Imports from VibeMathed** (CC BY 4.0) for AI-assisted results that already have a curated verification status.
