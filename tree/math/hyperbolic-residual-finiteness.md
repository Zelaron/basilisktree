---
title: Residual Finiteness of Hyperbolic Groups
status: claimed
importance: 45
posed: 1987
requires: [group-theory, non-euclidean]
by: [OpenAI]
with: [OpenAI internal model, Lean 4]
field: geometric group theory
aliases: [residually finite hyperbolic groups, non-residually-finite hyperbolic group]
links:
  - https://en.wikipedia.org/wiki/Hyperbolic_group#Algebraic_properties
  - https://github.com/openai/math
progress:
  - year: 2000
    by: [Ilya Kapovich, Daniel Wise]
    what: "Every hyperbolic group is residually finite if and only if every hyperbolic group has a proper finite-index subgroup."
  - year: 2013
    by: [Ian Agol]
    what: "Hyperbolic groups acting geometrically on CAT(0) cube complexes are virtually special, hence residually finite, completing Daniel Wise's program."
  - year: 2026
    by: [OpenAI]
    with: [OpenAI internal model, Lean 4]
    what: "Claimed construction of a torsion-free hyperbolic group that is not residually finite and not linear over any field (family 252 of OpenAI’s math release, formalized in Lean). Not yet independently reviewed."
    link: https://github.com/openai/math
---
Hyperbolic groups, introduced by Mikhail Gromov in 1987, include the fundamental groups of negatively curved manifolds. Whether all are residually finite, so that elements can be told apart in finite quotients, was a central open question, answered yes for cubulated groups by Ian Agol (2013). OpenAI’s October 2026 release claims a torsion-free counterexample, formalized in Lean but not yet independently reviewed.
