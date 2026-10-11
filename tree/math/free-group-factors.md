---
title: Free Group Factor Isomorphism Problem
status: claimed
importance: 48
posed: 1943
requires: [operator-algebras, group-theory]
by: [OpenAI]
with: [OpenAI internal model, Lean 4]
field: operator algebras
aliases: [free group factors, "L(F₂) ≅ L(F₃)", interpolated free group factors]
links:
  - https://en.wikipedia.org/wiki/Free_probability
  - https://github.com/openai/math
progress:
  - year: 1994
    by: [Ken Dykema, Florin Rădulescu]
    what: "Independently showed that the interpolated free group factors are either all isomorphic or pairwise non-isomorphic."
  - year: 2026
    by: [OpenAI]
    with: [OpenAI internal model, Lean 4]
    what: "Claimed proof that L(F₂) ≅ L(F₃), so that all interpolated free group factors, including L(F∞), are isomorphic (family 287 of OpenAI’s math release, formalized in Lean). Not yet independently reviewed."
    link: https://github.com/openai/math
---
The free group factors L(Fₙ) are von Neumann algebras built from free groups, introduced by Francis Murray and John von Neumann in 1943. Whether L(F₂) and L(F₃) are isomorphic is a central problem of operator algebras, and Dan Voiculescu created free probability around 1986 to attack it. OpenAI’s October 2026 release claims that all of them are isomorphic, formalized in Lean but not yet independently reviewed.
