---
title: Nagata's Conjecture on Curves
status: claimed
importance: 45
posed: 1959
requires: [projective-geometry, riemann-roch]
by: [OpenAI]
with: [OpenAI internal model, Lean 4]
field: algebraic geometry
aliases: [Nagata conjecture, Seshadri constants, Nagata–Biran conjecture]
links:
  - https://en.wikipedia.org/wiki/Nagata%27s_conjecture_on_curves
  - https://github.com/openai/math
progress:
  - year: 1959
    by: [Masayoshi Nagata]
    what: "Proved the case where the number of points is a perfect square at least 16, and used it in his counterexample to Hilbert's fourteenth problem."
  - year: 2026
    by: [OpenAI]
    with: [OpenAI internal model, Lean 4]
    what: "Claimed proof of Nagata's strict inequality for every r ≥ 10 and arbitrary multiplicities, together with maximal multipoint Seshadri constants on any polarized variety for enough points (family 039 of OpenAI’s math release, formalized in Lean). Not yet independently reviewed."
    link: https://github.com/openai/math
---
Masayoshi Nagata conjectured in 1959 that a plane curve of degree d through r ≥ 10 very general points with multiplicities m₁, …, mᵣ satisfies m₁ + … + mᵣ < d√r. He proved it for square r and used that case to answer Hilbert's fourteenth problem, and it governs Seshadri constants. OpenAI’s October 2026 release claims a proof, formalized in Lean but not yet independently reviewed.
