---
title: Shortest Paths Beyond Dijkstra
importance: 42
year: 2025
requires: [dijkstra-algorithm]
by: [Ran Duan, Jiayi Mao, Xiao Mao, Xinkai Shu, Longhui Yin]
field: algorithms
aliases: [sorting barrier, single-source shortest paths]
links:
  - https://en.wikipedia.org/wiki/Shortest_path_problem
  - https://arxiv.org/abs/2504.17033
---
Ran Duan, Jiayi Mao, Xiao Mao, Xinkai Shu and Longhui Yin (arXiv April 2025, STOC 2025) gave a deterministic O(m log^(2/3) n) algorithm for single-source shortest paths on directed graphs with nonnegative real weights. It is the first to beat the O(m + n log n) bound of Dijkstra's algorithm on sparse graphs, breaking the sorting barrier.
