---
title: Černý Conjecture
status: open
importance: 38
posed: 1969
requires: [graph-theory, finite-automata]
field: combinatorics
aliases: [synchronizing word, reset word]
links:
  - https://en.wikipedia.org/wiki/Synchronizing_word
progress:
  - year: 1982
    by: [Péter Frankl, Jean-Éric Pin]
    what: "Every synchronizing automaton with n states has a reset word of length at most (n³ − n)/6. The bound stood for about 35 years."
  - year: 2018
    by: [Marek Szykuła]
    what: "The first improvement of the leading constant, to about 0.1664 n³."
    link: https://arxiv.org/abs/1702.05455
  - year: 2019
    by: [Yaroslav Shitov]
    what: "About 0.1654 n³, the best general bound."
    link: https://arxiv.org/abs/1901.06542
---
An automaton is synchronizing if some input word, a reset word, sends every state to the same state. Černý found n-state automata whose shortest reset word has length (n − 1)² (1964) and conjectured in 1969 that no synchronizing automaton needs more. The best general bound is about 0.1654 n³ (Shitov, 2019); the conjecture is known for special classes, such as automata whose transitions preserve a cyclic order (Eppstein).
