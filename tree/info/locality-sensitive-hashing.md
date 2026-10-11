---
title: Locality-Sensitive Hashing
importance: 46
year: 1998
requires: [hash-table, probability]
by: [Piotr Indyk, Rajeev Motwani]
field: algorithms
aliases: [LSH, approximate nearest neighbour, MinHash]
links:
  - https://en.wikipedia.org/wiki/Locality-sensitive_hashing
---
Piotr Indyk and Rajeev Motwani (1998) showed that hash functions that collide more often for nearby points allow approximate nearest-neighbour search in time sublinear in the size of the data, even in high dimensions. Locality-sensitive hashing is used in near-duplicate detection and similarity search.
