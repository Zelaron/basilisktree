---
title: Deterministic Polynomial Factoring
status: claimed
importance: 45
posed: 1970
requires: [abstract-algebra, randomized-primality-testing, complexity-theory]
by: [OpenAI]
with: [OpenAI internal model]
field: algebraic algorithms
aliases: [polynomial factorization over finite fields, "deterministic factoring over F_p"]
links:
  - https://en.wikipedia.org/wiki/Factorization_of_polynomials_over_finite_fields
  - https://github.com/openai/math
progress:
  - year: 1967
    by: [Elwyn Berlekamp]
    what: "Berlekamp's algorithm factors deterministically in time polynomial in the degree and in p, so it is fast only for small fields."
  - year: 1988
    by: [Lajos Rónyai]
    what: "Assuming the generalized Riemann hypothesis, deterministic polynomial time for polynomials of bounded degree."
  - year: 1994
    by: [Sergei Evdokimov]
    what: "Assuming the generalized Riemann hypothesis, deterministic time (n^(log n) log p)^O(1)."
    link: https://en.wikipedia.org/wiki/Evdokimov%27s_algorithm
  - year: 2026
    by: [OpenAI]
    with: [OpenAI internal model]
    what: "Claimed in OpenAI's math release (manuscript dated 4 October 2026): a deterministic algorithm that completely factors any degree-n polynomial over F_p in time polynomial in n and log p, with no GRH assumption. Not formalized and not independently reviewed."
    link: https://github.com/openai/math
---
Can every polynomial of degree n over a prime field F_p be factored by a deterministic algorithm in time polynomial in n and log p? Randomized algorithms have done it since Berlekamp (1970), but deterministic ones needed small p or the generalized Riemann hypothesis. OpenAI claimed an unconditional algorithm in October 2026, not yet reviewed.
