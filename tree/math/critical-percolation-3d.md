---
title: No Percolation at Criticality
status: claimed
importance: 52
posed: 1982
requires: [percolation, probability]
by: [OpenAI]
with: [OpenAI internal model, Lean 4]
field: probability
aliases: ["θ(p_c) = 0", dying percolation conjecture, critical percolation in three dimensions, Benjamini–Schramm conjecture]
links:
  - https://en.wikipedia.org/wiki/Dying_percolation_conjecture
  - https://github.com/openai/math
progress:
  - year: 1980
    by: [Harry Kesten]
    what: "Proved that the critical point of bond percolation on the square lattice is 1/2, where Theodore Harris had shown in 1960 that there is no infinite cluster. This settled two dimensions."
    link: https://doi.org/10.1007/BF01197577
  - year: 1990
    by: [Takashi Hara, Gordon Slade]
    what: "Proved it in high dimensions with the lace expansion (d ≥ 19, later d ≥ 11)."
    link: https://doi.org/10.1007/BF02108785
  - year: 2026
    by: [OpenAI]
    with: [OpenAI internal model, Lean 4]
    what: "Claimed proof that critical bond and site percolation on ℤ³ have no infinite cluster, and that critical bond percolation has none on any quasi-transitive graph with p_c < 1, the Benjamini–Schramm conjecture (family 213 of OpenAI’s math release, formalized in Lean). Not yet independently reviewed."
    link: https://github.com/openai/math
---
Critical percolation should have no infinite cluster in any dimension d ≥ 2. Harry Kesten listed d ≥ 3 as open in 1982; it was known in the plane (Harris, 1960; Kesten, 1980) and in high dimensions (Hara and Slade, 1990), with three dimensions the key case. OpenAI’s October 2026 release claims ℤ³ and, for bond percolation, all quasi-transitive graphs, formalized in Lean but not yet independently reviewed.
