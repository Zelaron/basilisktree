---
title: Penrose Inequality
status: claimed
importance: 48
posed: 1973
requires: [black-hole-thermodynamics, positive-mass-theorem]
by: [OpenAI]
with: [OpenAI internal model]
field: relativity
aliases: [Penrose conjecture, spacetime Penrose inequality, Riemannian Penrose inequality]
links:
  - https://en.wikipedia.org/wiki/Riemannian_Penrose_inequality
  - https://github.com/openai/math
progress:
  - year: 1997
    by: [Gerhard Huisken, Tom Ilmanen]
    what: "Proved the time-symmetric (Riemannian) inequality for the area of a connected horizon, using weak inverse mean curvature flow."
    link: https://doi.org/10.1155/S1073792897000664
  - year: 1999
    by: [Hubert Bray]
    what: "Proved the Riemannian inequality for horizons with any number of components, using a conformal flow of metrics and the positive mass theorem."
    link: https://arxiv.org/abs/math/9911173
  - year: 2025
    by: [Brian Allen, Edward Bryden, Demetre Kazaras, Marcus Khuri]
    what: "Proved a spacetime Penrose inequality with a suboptimal constant, for asymptotically flat and asymptotically hyperboloidal data."
    link: https://arxiv.org/abs/2504.10641
  - year: 2026
    by: [OpenAI]
    with: [OpenAI internal model]
    what: "Claimed proof of the sharp spacetime Penrose inequality, with minimal enclosing area, for one-ended asymptotically flat data obeying the dominant energy condition in every dimension n ≥ 3 (family 260 of OpenAI's math release). The main inequality is not formalized in Lean and has not been independently reviewed."
    link: https://github.com/openai/math
---
Penrose (1973) argued that a spacetime containing black holes has total mass at least √(A/16π), where A is the horizon area. The time-symmetric (Riemannian) case was proved by Huisken and Ilmanen (1997) and Bray (1999); the general case with momentum, the spacetime Penrose conjecture, stayed open until a 2026 claim of the sharp inequality, which awaits independent review.
