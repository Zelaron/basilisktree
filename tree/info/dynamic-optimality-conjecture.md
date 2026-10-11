---
title: Dynamic Optimality Conjecture
status: open
importance: 42
posed: 1985
requires: [splay-trees, competitive-analysis]
field: data structures
aliases: [splay tree conjecture, dynamic optimality]
links:
  - https://en.wikipedia.org/wiki/Optimal_binary_search_tree
  - https://en.wikipedia.org/wiki/Splay_tree
progress:
  - year: 2004
    by: [Erik Demaine, Dion Harmon, John Iacono, Mihai Pătrașcu]
    what: "Tango trees are O(log log n)-competitive, the first sublogarithmic ratio for any binary search tree."
  - year: 2013
    by: [John Iacono]
    what: "A binary search tree algorithm that is dynamically optimal if any is."
    link: https://arxiv.org/abs/1306.0207
  - year: 2019
    by: [Caleb C. Levy, Robert Tarjan]
    what: "Splaying is dynamically optimal if and only if it is approximately monotone, a proposed route to a proof."
    link: https://arxiv.org/abs/1907.06310
  - year: 2026
    by: [Petr Chmel, Bernhard Haeupler, Richard Hladík, Michal Koucký, Antti Roeyskoe, Václav Rozhoň, Ondřej Sladký, Robert Tarjan]
    what: "Preprint: splay trees are O(log log n · (log log log n)²)-competitive, the first o(log n) bound for splaying."
    link: https://arxiv.org/abs/2607.18498
---
Do splay trees serve every sequence of accesses within a constant factor of the best binary search tree that may restructure itself with rotations? Sleator and Tarjan conjectured it in 1985. Tango trees (2004) are O(log log n)-competitive, and a July 2026 preprint claims the first sublogarithmic ratio, about log log n, for splay trees themselves.
