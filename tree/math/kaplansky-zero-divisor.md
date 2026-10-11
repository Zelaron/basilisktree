---
title: Kaplansky's Zero-Divisor Conjecture
status: claimed
importance: 40
posed: 1956
requires: [abstract-algebra, unit-conjecture]
by: [OpenAI]
with: [OpenAI internal model, Lean 4]
field: algebra
aliases: [zero divisor conjecture, Kaplansky's conjectures]
links:
  - https://en.wikipedia.org/wiki/Kaplansky%27s_conjectures
progress:
  - year: 1988
    by: [Peter Kropholler, Peter Linnell, John Moody]
    what: "The conjecture holds for every torsion-free elementary amenable group."
  - year: 2021
    by: [Giles Gardam]
    with: [SAT solver]
    what: "Refuted the stronger unit conjecture in characteristic 2 with a group from the Hantzsche–Wendt manifold; the zero-divisor conjecture survives."
    link: https://arxiv.org/abs/2102.11818
  - year: 2026
    by: [OpenAI]
    with: [OpenAI internal model, Lean 4]
    what: "Claimed counterexample: a finitely presented torsion-free group whose group algebra over 𝔽₂ has nonzero zero divisors (family 196 of OpenAI’s math release, formalized in Lean). Not yet independently reviewed."
    link: https://github.com/openai/math
---
If G is a torsion-free group and K a field, can the group ring K[G] have zero divisors? Kaplansky conjectured in 1956 that it cannot. The conjecture holds for large classes of groups, including the elementary amenable ones (1988), while its stronger relative, the unit conjecture, was disproved in 2021 ([[unit-conjecture]]). OpenAI’s October 2026 release claims a counterexample over 𝔽₂.
