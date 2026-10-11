---
title: Hilbert's Tenth Problem over ℚ
status: claimed
importance: 50
year: 2026
requires: [mrdp-theorem, elliptic-curves]
by: [OpenAI]
with: [OpenAI internal model]
field: logic
aliases: [Hilbert's tenth problem over the rationals]
links:
  - https://en.wikipedia.org/wiki/Hilbert%27s_tenth_problem
progress:
  - year: 1949
    by: [Julia Robinson]
    what: "Defined ℤ inside ℚ by a first-order formula, so the full first-order theory of ℚ is undecidable."
  - year: 2016
    by: [Jochen Koenigsmann]
    what: "Defined ℤ in ℚ by a universal formula. An existential definition would settle the problem negatively."
  - year: 2024
    by: [Peter Koymans, Carlo Pagano]
    what: "No algorithm exists for any infinite ring finitely generated over ℤ, including the ring of integers of every number field."
    link: https://arxiv.org/abs/2412.01768
  - year: 2025
    by: [Levent Alpöge, Manjul Bhargava, Wei Ho, Ari Shnidman]
    what: "An independent proof for rings of integers of number fields, through rank stability of abelian varieties in quadratic extensions."
    link: https://arxiv.org/abs/2501.18774
  - year: 2026
    by: [OpenAI]
    with: [OpenAI internal model]
    what: "Claimed negative answer: no algorithm decides whether a polynomial equation with integer coefficients has a rational solution (family 004 of OpenAI’s math release, not formalized). Not yet independently reviewed."
    link: https://github.com/openai/math
---
Is there an algorithm that decides whether a polynomial equation with integer coefficients has a solution in rational numbers? Over the integers the answer is no ([[mrdp-theorem|1970]]), and proofs posted in 2024 and 2025 give the same answer for the ring of integers of every number field, and OpenAI’s October 2026 release claims the same for ℚ. Mazur's conjectures suggest that ℤ is not Diophantine over ℚ, so a negative answer would need a different approach.
