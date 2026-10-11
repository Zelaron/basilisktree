---
title: Partition Principle and Choice
status: claimed
importance: 36
posed: 1906
requires: [set-theory, formal-logic]
by: [OpenAI]
with: [OpenAI internal model, Lean 4]
field: set theory
aliases: [partition principle, PP and AC]
links:
  - https://en.wikipedia.org/wiki/Axiom_of_choice#Possibly_equivalent_implications_of_AC
  - https://github.com/openai/math
progress:
  - year: 2026
    by: [OpenAI]
    with: [OpenAI internal model, Lean 4]
    what: "Claimed construction, assuming ZF is consistent, of a model of ZF in which the Partition Principle holds but the axiom of choice fails (family 244 of OpenAI’s math release, formalized in Lean). Not yet independently reviewed."
    link: https://github.com/openai/math
---
The Partition Principle says that if a set A maps onto a set B, then B injects into A. It follows from the axiom of choice, and Bertrand Russell declared the two equivalent in 1906, but whether it implies choice stayed open for over a century. OpenAI’s October 2026 release claims a model where it holds and choice fails, formalized in Lean but not yet independently reviewed.
