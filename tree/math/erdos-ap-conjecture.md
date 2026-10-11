---
title: Erdős Conjecture on Arithmetic Progressions
status: claimed
importance: 50
posed: 1976
requires: [additive-combinatorics]
by: [OpenAI]
with: [OpenAI internal model, Lean 4]
field: number theory
aliases: [Erdős–Turán conjecture, reciprocal-sum conjecture]
links:
  - https://en.wikipedia.org/wiki/Erd%C5%91s_conjecture_on_arithmetic_progressions
  - https://github.com/openai/math
progress:
  - year: 2004
    by: [Ben Green, Terence Tao]
    what: "The primes, whose reciprocals diverge, contain arbitrarily long arithmetic progressions."
  - year: 2020
    by: [Thomas Bloom, Olof Sisask]
    what: "The first nontrivial case: every set with divergent reciprocal sum contains a 3-term progression."
    link: https://arxiv.org/abs/2007.03528
  - year: 2023
    by: [Zander Kelley, Raghu Meka]
    what: "Much stronger bounds for sets without 3-term progressions."
    link: https://arxiv.org/abs/2302.05537
  - year: 2026
    by: [OpenAI]
    with: [OpenAI internal model, Lean 4]
    what: "Claimed proof of the full conjecture, with quasipolynomial bounds for Szemerédi's theorem (family 159 of OpenAI's math release, formalized in Lean). Not yet independently reviewed."
    link: https://github.com/openai/math
---
If the reciprocals of a set of positive integers have a divergent sum, must the set contain arbitrarily long arithmetic progressions? Erdős offered $3,000 for it in 1976, later $5,000. The primes are the Green–Tao case (2004) and the 3-term case was settled in 2020; in October 2026 OpenAI claimed a full proof, formalized in Lean but not yet reviewed.
