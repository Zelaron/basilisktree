---
title: Deterministic Linear-Time MST
status: open
importance: 38
requires: [minimum-spanning-tree]
field: algorithms
aliases: [minimum spanning tree complexity, Pettie–Ramachandran algorithm]
links:
  - https://en.wikipedia.org/wiki/Minimum_spanning_tree
progress:
  - year: 1995
    by: [David Karger, Philip N. Klein, Robert Tarjan]
    what: "Randomized linear expected time."
  - year: 2000
    by: [Bernard Chazelle]
    what: "Deterministic O(m α(m, n)) time using soft heaps."
  - year: 2002
    by: [Seth Pettie, Vijaya Ramachandran]
    what: "An optimal deterministic comparison-based algorithm, with running time somewhere between linear and Chazelle's bound."
---
Can a minimum spanning tree of a graph with m edges be found deterministically in O(m) time using only comparisons of edge weights? Randomized linear time is known (Karger, Klein and Tarjan, 1995) and Chazelle's deterministic algorithm (2000) is within an inverse-Ackermann factor; Pettie and Ramachandran (2002) gave a provably optimal algorithm whose running time nobody can determine.
