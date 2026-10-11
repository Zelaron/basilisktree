---
title: AlphaDev
importance: 44
year: 2023
requires: [alphazero, quicksort]
by: [Daniel Mankowitz, Google DeepMind]
with: [AlphaDev]
field: algorithms
aliases: [AlphaDev, learned sorting routines]
links:
  - https://en.wikipedia.org/wiki/AlphaDev
  - https://doi.org/10.1038/s41586-023-06004-9
---
Daniel Mankowitz and colleagues at Google DeepMind (Nature, June 2023) trained a reinforcement learning agent, AlphaDev, to play a game of writing assembly instructions, and it found shorter routines for sorting three to five elements. They were merged into LLVM's libc++ standard library, the first change to its sorting code in over a decade.
