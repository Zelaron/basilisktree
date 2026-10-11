---
title: Graceful Tree Conjecture
status: open
importance: 36
posed: 1964
requires: [graph-theory]
field: graph theory
aliases: [Ringel–Kotzig conjecture, graceful labeling]
links:
  - https://en.wikipedia.org/wiki/Graceful_labeling
progress:
  - year: 1967
    by: [Alexander Rosa]
    what: "Introduced graceful labellings (as β-valuations), showed that paths and caterpillars have them, and showed that a graceful tree with n edges tiles the complete graph on 2n + 1 vertices."
  - year: 1998
    by: [Robert Aldred, Brendan McKay]
    with: [computer search]
    what: "Every tree with at most 27 vertices is graceful."
  - year: 2016
    by: [Anna Adamaszek, Peter Allen, Codruț Grosu, Jan Hladký]
    what: "Almost all trees are almost graceful: labels from 1 to (1 + ε)n suffice for trees whose maximum degree is O(n/log n)."
    link: https://arxiv.org/abs/1608.01577
  - year: 2020
    by: [Richard Montgomery, Alexey Pokrovskiy, Benny Sudakov]
    what: "Proved Ringel's 1963 conjecture for large n: copies of any tree with n edges tile the complete graph on 2n + 1 vertices."
    link: https://arxiv.org/abs/2001.02665
---
Can the vertices of every tree with n edges be labelled with distinct numbers from 0 to n so that the n edge differences are exactly 1, 2, …, n? The Ringel–Kotzig conjecture (1964) says yes. It is known for paths, caterpillars and other families and checked by computer for small trees; it would imply Ringel's decomposition conjecture, proved for large trees in 2020.
