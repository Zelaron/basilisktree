---
title: Thomson Problem
status: open
importance: 36
posed: 1904
requires: [geometry, electrostatics]
field: geometry
aliases: [electrons on a sphere, minimal energy points]
links:
  - https://en.wikipedia.org/wiki/Thomson_problem
progress:
  - year: 1996
    by: [N. N. Andreev]
    what: "The regular icosahedron is optimal for 12 charges."
  - year: 2013
    by: [Richard Evan Schwartz]
    with: [computer-assisted proof]
    what: "A computer-assisted proof that the triangular bipyramid is optimal for 5 charges."
  - year: 2026
    by: [Liudmyla Kryvonos, Lukas Liehr, Mitchell A. Taylor]
    with: [Lean 4]
    what: "A computer-assisted proof, verified in Lean, that a square antiprism is the unique minimizer for 8 charges."
    link: https://arxiv.org/abs/2609.22077
  - year: 2026
    by: [Hung Tran]
    with: [Claude Sonnet 5.5, Lean 4]
    what: "A Lean proof that the pentagonal bipyramid is the unique minimizer for 7 charges, written by ten Claude Sonnet 5.5 agents over about 15 hours and accepted by two independent Lean kernels."
    link: https://www.vals.ai/blogs/thomson-n7-lean-proof
---
How do n equal charges on a sphere arrange themselves to minimize their electrostatic energy? J. J. Thomson posed the problem in 1904 for his model of the atom. Proofs exist only for a handful of n: 2 to 6 and 12, plus 8 and 7, whose computer-assisted proofs, checked in Lean, appeared in September 2026.
