---
title: Log-Rank Conjecture
status: open
importance: 45
posed: 1988
requires: [communication-complexity, linear-algebra]
field: complexity theory
aliases: [Lovász–Saks conjecture]
links:
  - https://en.wikipedia.org/wiki/Log-rank_conjecture
progress:
  - year: 2014
    by: [Shachar Lovett]
    what: "Communication complexity O(√rank · log rank)."
    link: https://arxiv.org/abs/1306.1877
  - year: 2015
    by: [Mika Göös, Toniann Pitassi, Thomas Watson]
    what: "Functions whose communication complexity is about (log rank)², so the exponent must be at least 2."
  - year: 2019
    by: [Arkadev Chattopadhyay, Nikhil Mande, Suhail Sherif]
    what: "Disproved the log-approximate-rank conjecture, the analogous statement for randomized communication."
  - year: 2023
    by: [Benny Sudakov, István Tomon]
    what: "Communication complexity O(√rank), the best known upper bound."
    link: https://arxiv.org/abs/2311.18524
---
Lovász and Saks conjectured in 1988 that the deterministic communication complexity of a Boolean function is bounded by a polynomial in the logarithm of the rank of its communication matrix. The best upper bound is O(√rank) (Sudakov and Tomon, 2023), and the polynomial must have degree at least 2 (Göös, Pitassi and Watson).
