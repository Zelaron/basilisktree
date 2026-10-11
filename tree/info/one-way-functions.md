---
title: One-Way Functions
status: open
importance: 88
grand: true
posed: 1976
requires: [public-key-crypto, complexity-theory]
field: cryptography
aliases: [OWF, existence of one-way functions]
links:
  - https://en.wikipedia.org/wiki/One-way_function
progress:
  - year: 1987
    by: [Leonid Levin]
    what: "An explicit universal one-way function, which is one-way if any one-way function exists."
  - year: 1989
    by: [Russell Impagliazzo, Michael Luby]
    what: "One-way functions are necessary for private-key encryption, signatures and most other cryptography."
  - year: 1999
    by: [Johan Håstad, Russell Impagliazzo, Leonid Levin, Michael Luby]
    what: "Any one-way function yields a pseudorandom generator."
  - year: 2020
    by: [Yanyi Liu, Rafael Pass]
    what: "One-way functions exist if and only if time-bounded Kolmogorov complexity is mildly hard on average."
    link: https://arxiv.org/abs/2009.11514
---
Do functions exist that are easy to compute but hard to invert on average? Nearly all cryptography assumes so, an assumption made central by Diffie and Hellman (1976). Existence would imply P ≠ NP, and Liu and Pass (2020) showed it is equivalent to the average-case hardness of time-bounded Kolmogorov complexity.
