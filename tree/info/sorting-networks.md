---
title: Sorting Networks
importance: 36
year: 1968
requires: [merge-sort]
by: [Ken Batcher]
field: algorithms
aliases: [bitonic sort, odd-even merge sort, AKS network]
links:
  - https://en.wikipedia.org/wiki/Sorting_network
---
Ken Batcher's odd-even merge sort and bitonic sort (1968) are fixed networks of comparators that sort n numbers in O(log² n) parallel steps. They suit hardware and graphics processors, and Ajtai, Komlós and Szemerédi (1983) built networks of depth O(log n) whose constants are too large for practice.
