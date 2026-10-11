---
title: Deterministic Prime Generation
status: open
importance: 40
posed: 2009
requires: [primes-in-p, hardness-vs-randomness]
field: algorithms
aliases: [finding primes deterministically, Polymath4, pseudodeterministic primes]
links:
  - https://arxiv.org/abs/1009.3956
  - https://arxiv.org/abs/2305.15140
progress:
  - year: 2010
    by: [D. H. J. Polymath]
    what: "The parity of the number of primes in an interval of [N, 2N] can be computed in O(N^(1/2 − c)) time; finding a prime above N deterministically still takes Odlyzko's O(N^(1/2 + o(1)))."
    link: https://arxiv.org/abs/1009.3956
  - year: 2017
    by: [Igor C. Oliveira, Rahul Santhanam]
    what: "A pseudodeterministic construction of primes in subexponential time for infinitely many lengths."
    link: https://arxiv.org/abs/1612.01817
  - year: 2023
    by: [Lijie Chen, Zhenjian Lu, Igor C. Oliveira, Hanlin Ren, Rahul Santhanam]
    what: "A pseudodeterministic polynomial-time construction of n-bit primes for infinitely many n."
    link: https://arxiv.org/abs/2305.15140
---
Is there a deterministic algorithm that outputs a prime with n digits in time polynomial in n? Random search with a primality test does it easily, but the best deterministic method takes about 10^(n/2) steps; the Polymath4 project (2009–10) did not beat it, and a randomized algorithm that outputs one fixed prime with high probability exists for infinitely many n (2023).
