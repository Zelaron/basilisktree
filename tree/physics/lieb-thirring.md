---
title: Lieb–Thirring Conjecture
status: open
importance: 38
posed: 1976
requires: [stability-of-matter, functional-analysis]
field: mathematical physics
aliases: [Lieb–Thirring inequality, sharp Lieb–Thirring constant]
links:
  - https://en.wikipedia.org/wiki/Lieb%E2%80%93Thirring_inequality
  - https://arxiv.org/abs/1808.09017
progress:
  - year: 1998
    by: [Dirk Hundertmark, Elliott H. Lieb, Lawrence E. Thomas]
    what: "Sharp constant in one dimension for γ = 1/2: it equals 1/2, the one-bound-state value."
    link: https://arxiv.org/abs/math-ph/9806012
  - year: 2000
    by: [Ari Laptev, Timo Weidl]
    what: "The semiclassical constant is sharp for every γ ≥ 3/2 in every dimension."
    link: https://doi.org/10.1007/BF02392782
  - year: 2018
    by: [Rupert L. Frank, Dirk Hundertmark, Michal Jex, Phan Thành Nam]
    what: "Best bound for the key case: the constant for γ = 1 in three dimensions is at most 1.456 times the semiclassical value."
    link: https://arxiv.org/abs/1808.09017
  - year: 2026
    by: [OpenAI]
    with: [OpenAI internal model, Lean 4]
    what: "Claimed proof of the one-dimensional conjecture for 1/2 < γ < 3/2: the sharp constant is the one-bound-state value, also for matrix-valued potentials (family 262 of OpenAI's math release, main theorem formalized in Lean). Not yet independently reviewed; the three-dimensional case is untouched."
    link: https://github.com/openai/math
---
Lieb and Thirring (1976) conjectured the sharp constants in their inequality, which bounds the kinetic energy of many fermions and underlies the stability of matter. The key case, three dimensions with γ = 1, should have the semiclassical constant of Thomas–Fermi theory; the best proven bound is 1.456 times that value (2018), and sharp constants are known only for γ ≥ 3/2 and a few one-dimensional cases.
