---
title: Evasiveness Conjecture
status: open
importance: 40
posed: 1973
requires: [graph-theory, complexity-theory]
field: query complexity
aliases: [Aanderaa–Karp–Rosenberg conjecture, AKR conjecture, evasive graph properties]
links:
  - https://en.wikipedia.org/wiki/Aanderaa%E2%80%93Karp%E2%80%93Rosenberg_conjecture
progress:
  - year: 1975
    by: [Ronald Rivest, Jean Vuillemin]
    what: "Every nontrivial monotone graph property needs at least n²/16 queries, settling the weaker Aanderaa–Rosenberg conjecture."
  - year: 1984
    by: [Jeff Kahn, Michael Saks, Dean Sturtevant]
    what: "Such properties are evasive whenever n is a prime power, by a topological argument."
  - year: 1988
    by: [Andrew Yao]
    what: "All nontrivial monotone properties of bipartite graphs are evasive."
  - year: 2013
    by: [Robert Scheidweiler, Eberhard Triesch]
    what: "The general lower bound reaches (1/3 − o(1))n² queries."
---
The Aanderaa–Karp–Rosenberg conjecture (1973): every nontrivial monotone graph property on n vertices is evasive, meaning some graph forces any deterministic algorithm to query all n(n − 1)/2 vertex pairs. It is proved when n is a prime power and for bipartite properties; in general only about n²/3 queries are known to be necessary.
