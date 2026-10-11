---
title: Mutually Unbiased Bases in Dimension 6
status: claimed
importance: 35
posed: 1999
requires: [quantum-mechanics, linear-algebra]
by: [OpenAI]
with: [OpenAI internal model, Lean 4]
field: quantum information
aliases: [MUBs in dimension 6, Zauner's MUB conjecture, "N(6) = 3"]
links:
  - https://en.wikipedia.org/wiki/Mutually_unbiased_bases
  - https://github.com/openai/math
progress:
  - year: 2007
    by: [Paul Butterley, William Hall]
    what: "Numerical searches find no set of four mutually unbiased bases in dimension 6."
    link: https://arxiv.org/abs/quant-ph/0701122
  - year: 2009
    by: [Philippe Jaming, Máté Matolcsi, Péter Móra, Ferenc Szöllősi, Mihály Weiner]
    what: "The standard basis together with any member of the Fourier family F(a,b) of Hadamard matrices cannot be extended to four mutually unbiased bases."
    link: https://arxiv.org/abs/0902.0882
  - year: 2026
    by: [OpenAI]
    with: [OpenAI internal model, Lean 4]
    what: "Claimed proof that the maximum is three (manuscript dated 24 September 2026). The exclusion of a fourth basis is a computer-assisted floating-point certification, and the accompanying Lean formalization proves only a weaker bound of five bases. Not independently reviewed."
    link: https://github.com/openai/math
---
Two orthonormal bases of ℂ^d are mutually unbiased if every vector of one has squared overlap 1/d with every vector of the other. Prime-power dimensions have d + 1 such bases (Wootters and Fields, 1989), but in dimension 6 only three were ever found, and Zauner conjectured in 1999 that three is the maximum. OpenAI claimed a computer-assisted proof in October 2026, not yet reviewed.
