---
title: Kakeya Conjecture
status: open
importance: 50
requires: [kakeya-3d]
field: harmonic analysis
aliases: [Kakeya set conjecture, Besicovitch sets]
links:
  - https://en.wikipedia.org/wiki/Kakeya_set
progress:
  - year: 1995
    by: [Thomas Wolff]
    what: "Kakeya sets in ℝⁿ have Hausdorff dimension at least (n + 2)/2."
  - year: 2002
    by: [Nets Katz, Terence Tao]
    what: "A bound of (2 − √2)(n − 4) + 3, better than Wolff's in high dimensions."
  - year: 2021
    by: [Nets Katz, Joshua Zahl]
    what: "Kakeya sets in ℝ⁴ have Hausdorff dimension at least 3.059."
  - year: 2025
    by: [Hong Wang, Joshua Zahl]
    what: "Proved the conjecture in three dimensions."
    link: https://arxiv.org/abs/2502.17655
  - year: 2026
    by: [OpenAI]
    with: [OpenAI internal model]
    what: "Claimed proof of the conjecture in four dimensions, and of the stronger maximal-function version in three (family 074 of OpenAI’s math release, not formalized). Not yet independently reviewed."
    link: https://github.com/openai/math
---
Must every set in ℝⁿ that contains a unit line segment in every direction have Hausdorff dimension n? It is true in the plane (Davies, 1971) and in three dimensions ([[kakeya-3d|Wang and Zahl, 2025]]), OpenAI’s October 2026 release claims four dimensions, and for n ≥ 5 only partial lower bounds are known. The restriction conjecture of Fourier analysis implies it, so it is a necessary step toward that problem.
