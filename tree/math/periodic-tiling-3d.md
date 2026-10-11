---
title: Periodic Tiling Conjecture in 3D
status: claimed
importance: 35
posed: 1987
requires: [aperiodic-tilings]
by: [OpenAI]
with: [OpenAI internal model, Lean 4]
field: discrete geometry
aliases: [periodic tiling conjecture, translational tiling]
links:
  - https://github.com/openai/math
progress:
  - year: 2020
    by: [Siddhartha Bhattacharya]
    what: "Proved the conjecture for the integer lattice ℤ²."
  - year: 2022
    by: [Rachel Greenfeld, Terence Tao]
    what: "Disproved it in a sufficiently high dimension."
  - year: 2026
    by: [OpenAI]
    with: [OpenAI internal model, Lean 4]
    what: "Claimed construction of a finite tile in ℤ³, and its unit-cube thickening in ℝ³, that tiles space by translations but admits no periodic tiling (family 155 of OpenAI’s math release, formalized in Lean). Not yet independently reviewed."
    link: https://github.com/openai/math
---
The periodic tiling conjecture of Grünbaum and Shephard (1987) and Lagarias and Wang (1996) says a shape tiling space by translations can also tile it periodically. It holds for ℤ², and Greenfeld and Tao disproved it in 2022 in a high dimension, leaving three as the smallest open dimension. OpenAI’s October 2026 release claims a counterexample in ℤ³ and ℝ³, formalized in Lean but not yet independently reviewed.
