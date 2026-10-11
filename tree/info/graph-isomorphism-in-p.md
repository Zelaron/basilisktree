---
title: Graph Isomorphism in P
status: open
importance: 52
posed: 1972
requires: [quasipolynomial-graph-isomorphism, group-theory]
field: algorithms
aliases: [GI, graph isomorphism problem]
links:
  - https://en.wikipedia.org/wiki/Graph_isomorphism_problem
progress:
  - year: 1982
    by: [Eugene M. Luks]
    what: "Polynomial time for graphs of bounded degree, using group theory."
  - year: 1983
    by: [László Babai, Eugene M. Luks]
    what: "2^O(√(n log n)) time for general graphs."
  - year: 2017
    by: [László Babai]
    what: "Quasipolynomial time 2^O((log n)^c), announced in 2015 and repaired in January 2017 after Harald Helfgott found an error; Helfgott showed that c = 3 works."
    link: https://en.wikipedia.org/wiki/Graph_isomorphism_problem
  - year: 2019
    by: [László Babai]
    what: "Canonical forms for graphs in quasipolynomial time (preliminary report)."
---
Can one decide in polynomial time whether two graphs are isomorphic? The problem is in NP but unlikely to be NP-complete, since that would collapse the polynomial hierarchy, and many special classes are easy. The best general algorithm is Babai's quasipolynomial one, announced in 2015 and corrected in 2017.
