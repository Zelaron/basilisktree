---
title: Splay Trees
importance: 36
year: 1985
requires: [balanced-search-trees]
by: [Daniel Sleator, Robert Tarjan]
field: data structures
aliases: [self-adjusting trees, amortized analysis]
links:
  - https://en.wikipedia.org/wiki/Splay_tree
---
Daniel Sleator and Robert Tarjan's splay trees (1985) are binary search trees that move each accessed key to the root and need no balance information, yet take O(log n) amortized time per operation. Whether they are as fast as any binary search tree, the dynamic optimality conjecture, remains open.
