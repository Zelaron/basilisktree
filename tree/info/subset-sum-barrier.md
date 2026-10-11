---
title: "Subset Sum Faster Than 2^(n/2)"
status: claimed
importance: 40
posed: 1974
requires: [complexity-theory]
by: [OpenAI]
with: [OpenAI internal model]
field: exact algorithms
aliases: [Subset Sum, meet in the middle, knapsack]
links:
  - https://en.wikipedia.org/wiki/Subset_sum_problem
progress:
  - year: 1974
    by: [Ellis Horowitz, Sartaj Sahni]
    what: "Meet-in-the-middle solves Subset Sum in O(2^(n/2)) time."
  - year: 1979
    by: [Richard Schroeppel, Adi Shamir]
    what: "The same time bound with O(2^(n/4)) space."
  - year: 2021
    by: [Jesper Nederlof, Karol Węgrzycki]
    what: "The first improvement on that space bound: O*(2^(n/2)) time with O*(2^(0.249999n)) space."
    link: https://arxiv.org/abs/2010.08576
  - year: 2023
    by: [Xi Chen, Yaonan Jin, Tim Randolph, Rocco Servedio]
    what: "Worst-case time O(2^(n/2) n^(−0.5023)), the first improvement on meet-in-the-middle by a polynomial factor."
    link: https://arxiv.org/abs/2301.07134
  - year: 2026
    by: [OpenAI]
    with: [OpenAI internal model]
    what: "Claimed randomized algorithm that solves every Subset Sum instance in O(2^(0.49n)) time (family 138 of OpenAI’s math release, not formalized). Not yet independently reviewed."
    link: https://github.com/openai/math
---
Given n integers and a target, does some subset sum to the target? Meet-in-the-middle (Horowitz and Sahni, 1974) takes about 2^(n/2) steps, and solving every instance in 2^((1/2 − c)n) time for a constant c > 0 is a central open problem of exact algorithms; random instances are known to be easier. OpenAI’s October 2026 release claims a 2^(0.49n) algorithm.
