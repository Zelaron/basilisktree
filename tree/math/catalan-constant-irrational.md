---
title: Irrationality of Catalan's Constant
status: claimed
importance: 40
posed: 1865
requires: [irrational-numbers, zeta-function]
by: [OpenAI]
with: [OpenAI internal model, Lean 4]
field: number theory
aliases: [Catalan's constant, β(2)]
links:
  - https://en.wikipedia.org/wiki/Catalan%27s_constant
  - https://github.com/openai/math
progress:
  - year: 2003
    by: [Tanguy Rivoal, Wadim Zudilin]
    what: "Infinitely many of the values β(2n) of the Dirichlet beta function are irrational; Catalan's constant is β(2)."
    link: https://doi.org/10.1007/s00208-003-0420-2
  - year: 2018
    by: [Wadim Zudilin]
    what: "At least one of β(2), β(4), β(6), β(8), β(10) and β(12) is irrational."
    link: https://doi.org/10.1007/s12188-019-00203-w
  - year: 2026
    by: [OpenAI]
    with: [OpenAI internal model, Lean 4]
    what: "Claimed proof that Catalan's constant is irrational (family 005 of OpenAI’s math release, formalized in Lean). Not yet independently reviewed."
    link: https://github.com/openai/math
---
Catalan's constant G = 1 − 1/9 + 1/25 − 1/49 + … ≈ 0.916 appears throughout combinatorics and analysis; Eugène Catalan published a memoir on it in 1865. It has been called arguably the most basic constant whose irrationality is unproven, and only partial results were known. OpenAI’s October 2026 release claims a proof, formalized in Lean but not yet independently reviewed.
