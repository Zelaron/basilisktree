---
title: Stellarator Design Benchmark
status: open
importance: 33
posed: 2025
requires: [stellarator, mhd]
field: nuclear
aliases: [ConStellaration, quasi-isodynamic stellarator optimization]
links:
  - https://arxiv.org/abs/2506.19583
  - https://huggingface.co/datasets/proxima-fusion/constellaration
progress:
  - year: 2025
    by: [Santiago A. Cadena, Proxima Fusion]
    what: "Released the benchmark: a dataset of quasi-isodynamic-like plasma boundaries with ideal-MHD equilibria, three problems of increasing difficulty, evaluation scripts and baselines."
    link: https://arxiv.org/abs/2506.19583
---
ConStellaration (Proxima Fusion, June 2025) poses three open optimization problems for quasi-isodynamic stellarator shapes: a geometric problem, a simple-to-build design, and a multi-objective design trading compactness against coil simplicity while staying ideal-MHD stable. Each comes with public evaluation code and classical-optimization baselines; solving it means designs that beat those baselines under the official evaluators.
