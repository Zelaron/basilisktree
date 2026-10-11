---
title: Irrationality Measure of π
status: claimed
importance: 42
posed: 1953
requires: [irrational-numbers, transcendental-numbers]
by: [OpenAI]
with: [OpenAI internal model, Lean 4]
field: number theory
aliases: [irrationality exponent of π, Flint Hills series, "μ(π) = 2"]
links:
  - https://en.wikipedia.org/wiki/Irrationality_measure
  - https://github.com/openai/math
progress:
  - year: 1953
    by: [Kurt Mahler]
    what: "First effective bound: the irrationality measure of π is at most 42."
  - year: 2020
    by: [Doron Zeilberger, Wadim Zudilin]
    what: "Lowered the bound to about 7.103."
    link: https://doi.org/10.2140/moscow.2020.9.407
  - year: 2026
    by: [OpenAI]
    with: [OpenAI internal model, Lean 4]
    what: "Claimed proof that the irrationality measure of π is exactly 2, which also gives convergence of the Flint Hills series ∑ 1/(n³ sin² n) (family 017 of OpenAI’s math release, formalized in Lean). Not yet independently reviewed."
    link: https://github.com/openai/math
---
The irrationality measure of π says how closely fractions p/q can approach π. Almost every real number has measure 2, and π was expected to as well, but the proven bounds only went from 42 (Kurt Mahler, 1953) down to about 7.10. OpenAI’s October 2026 release claims the value 2, which would also make the Flint Hills series converge; it is formalized in Lean but not yet independently reviewed.
