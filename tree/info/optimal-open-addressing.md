---
title: Optimal Open Addressing
importance: 34
year: 2025
posed: 1985
requires: [hash-table]
by: [Andrew Krapivin, Martín Farach-Colton, William Kuszmaul]
field: data structures
aliases: [funnel hashing, Yao's conjecture, uniform hashing]
links:
  - https://en.wikipedia.org/wiki/Open_addressing
  - https://arxiv.org/abs/2501.02305
---
Andrew Krapivin, then an undergraduate at Rutgers, with Martín Farach-Colton and William Kuszmaul (arXiv, January 2025) built hash tables whose worst-case cost grows like (log x)² as the table fills, where x measures how full it is, contradicting a conjecture of Andrew Yao from 1985 that the cost must be of order x. They also proved matching lower bounds.
