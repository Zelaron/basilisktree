---
title: Falconer Distance Conjecture
status: claimed
importance: 44
posed: 1985
requires: [hausdorff-dimension, fourier-analysis]
by: [OpenAI]
with: [OpenAI internal model, Lean 4]
field: geometric measure theory
aliases: [Falconer's conjecture, distance set problem]
links:
  - https://en.wikipedia.org/wiki/Falconer%27s_conjecture
  - https://github.com/openai/math
progress:
  - year: 1985
    by: [Kenneth Falconer]
    what: "Sets of Hausdorff dimension above (d + 1)/2 have distance sets of positive measure."
  - year: 2020
    by: [Larry Guth, Alex Iosevich, Yumeng Ou, Hong Wang]
    what: "In the plane, lowered the dimension threshold to 5/4."
    link: https://doi.org/10.1007/s00222-019-00917-x
  - year: 2026
    by: [OpenAI]
    with: [OpenAI internal model, Lean 4]
    what: "Claimed proof in every dimension d ≥ 2: compact sets of Hausdorff dimension above d/2 have distance sets of positive Lebesgue measure (family 073 of OpenAI’s math release, formalized in Lean). Not yet independently reviewed."
    link: https://github.com/openai/math
---
Falconer's conjecture says that a compact set in d-dimensional space with Hausdorff dimension above d/2 has a set of pairwise distances of positive length. It grew out of Kenneth Falconer's 1985 work and is a continuous analogue of Erdős's distinct distances problem. OpenAI’s October 2026 release claims a proof in every dimension, formalized in Lean but not yet independently reviewed.
