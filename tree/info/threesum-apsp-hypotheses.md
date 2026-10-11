---
title: "3SUM & APSP Hypotheses"
status: claimed
importance: 50
posed: 1995
requires: [fast-matrix-multiplication, dijkstra-algorithm]
by: [Josh Alman, Virginia Vassilevska Williams]
with: [Claude, Lean 4]
field: fine-grained complexity
aliases: ["3SUM conjecture", APSP conjecture, all-pairs shortest paths, fine-grained hypotheses]
links:
  - https://en.wikipedia.org/wiki/3SUM
  - https://arxiv.org/abs/2610.06783
progress:
  - year: 2014
    by: [Allan Grønlund, Seth Pettie]
    what: "A deterministic 3SUM algorithm in n²/(log n/log log n)^(2/3) time, the first to beat n² by more than a constant factor; the polynomial version of the conjecture stood."
    link: https://arxiv.org/abs/1404.0799
  - year: 2014
    by: [Ryan Williams]
    what: "All-pairs shortest paths in n³/2^Ω(√log n) time via circuit complexity, still not truly subcubic."
    link: https://arxiv.org/abs/1312.6680
  - year: 2026
    by: [Josh Alman, Virginia Vassilevska Williams]
    with: [Claude, Lean 4]
    what: "Claimed refutation (preprint, 5 October 2026): deterministic 3SUM in O(n^1.9992) time and APSP in O(n^2.9995) for polynomially bounded integers, from a new algorithm for thin matrix products. The paper credits an internal research model of Anthropic's Claude with finding the core algorithm and reports a Lean 4 formalization of the main results; not yet peer reviewed."
    link: https://arxiv.org/abs/2610.06783
---
Fine-grained complexity long assumed that 3SUM (do three of n integers sum to zero?) needs n^(2−o(1)) time and all-pairs shortest paths needs n^(3−o(1)); 3SUM-hardness dates from 1995 and many conditional lower bounds rest on the two hypotheses. A preprint of 5 October 2026 claims to refute both, with exponents 1.9992 and 2.9995.
