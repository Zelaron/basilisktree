---
title: Hilbert's Sixteenth Problem
status: claimed
importance: 58
grand: true
posed: 1900
requires: [odes]
by: [OpenAI]
with: [OpenAI internal model, Lean 4]
field: dynamical systems
aliases: [limit cycles, Hilbert number, Smale's 13th problem]
links:
  - https://en.wikipedia.org/wiki/Hilbert%27s_sixteenth_problem
progress:
  - year: 1979
    by: [Chen Lansun, Wang Mingshu, Shi Songling]
    what: "Quadratic vector fields with four limit cycles (Chen and Wang 1979, Shi 1980), so H(2) ≥ 4."
  - year: 1991
    by: [Yulij Ilyashenko, Jean Écalle]
    what: "Independent proofs that every polynomial vector field has finitely many limit cycles, repairing Dulac's 1923 argument."
  - year: 2009
    by: [Chengzhi Li, Changjian Liu, Jiazhong Yang]
    what: "A cubic system with 13 limit cycles, so H(3) ≥ 13."
  - year: 2026
    by: [OpenAI]
    with: [OpenAI internal model, Lean 4]
    what: "Claimed proof that the number of limit cycles of a planar polynomial vector field is bounded by a constant depending only on its degree (family 143 of OpenAI’s math release, formalized in Lean). Not yet independently reviewed."
    link: https://github.com/openai/math
---
How many limit cycles can a planar polynomial vector field of degree n have? The second part of Hilbert’s 16th problem (1900), also Smale’s 13th problem, asks for a bound H(n) that depends only on n. Each single field has finitely many (Ilyashenko and Écalle, around 1991), and quadratic fields can have at least four. OpenAI’s October 2026 release claims that H(n) is always finite.
