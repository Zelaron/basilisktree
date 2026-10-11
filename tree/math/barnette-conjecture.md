---
title: Barnette's Conjecture
status: claimed
importance: 38
posed: 1969
requires: [graph-theory, euler-polyhedron]
by: [OpenAI]
with: [OpenAI internal model, Lean 4]
field: graph theory
aliases: [Barnette graphs, Hamiltonian bipartite polyhedra]
links:
  - https://en.wikipedia.org/wiki/Barnette%27s_conjecture
  - https://github.com/openai/math
progress:
  - year: 1975
    by: [P. R. Goodey]
    what: "Proved the case where every face has four or six edges."
    link: https://doi.org/10.1007/BF02757273
  - year: 1985
    by: [Derek Holton, Bennet Manvel, Brendan McKay]
    what: "A computer search found no counterexample with up to 64 vertices."
    link: https://doi.org/10.1016/0095-8956(85)90072-3
  - year: 2026
    by: [OpenAI]
    with: [OpenAI internal model, Lean 4]
    what: "Claimed proof that every cubic, bipartite, 3-connected planar graph has a Hamiltonian cycle (family 180 of OpenAI’s math release, formalized in Lean). Not yet independently reviewed."
    link: https://github.com/openai/math
---
David Barnette conjectured in 1969 that every cubic, bipartite, 3-connected planar graph has a Hamiltonian cycle, a cycle through every vertex. Without bipartiteness this fails, as Tutte showed in 1946, and computer searches found no counterexample with fewer than 86 vertices. OpenAI’s October 2026 release claims a proof, formalized in Lean but not yet independently reviewed.
