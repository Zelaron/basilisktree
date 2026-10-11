---
title: Optimal Sorting Networks
status: open
importance: 30
posed: 1962
requires: [sorting-networks, cdcl-sat-solvers]
field: algorithms
aliases: [Bose–Nelson sorting problem, minimal comparator networks]
links:
  - https://en.wikipedia.org/wiki/Sorting_network
progress:
  - year: 2014
    by: [Daniel Bundala, Jakub Závodný]
    what: "SAT solving proved the optimal depths for up to 16 inputs."
    link: https://arxiv.org/abs/1310.6271
  - year: 2014
    by: [Michael Codish, Luís Cruz-Filipe, Michael Frank, Peter Schneider-Kamp]
    what: "25 comparators are optimal for 9 inputs and 29 for 10."
    link: https://arxiv.org/abs/1405.5754
  - year: 2015
    by: [Michael Codish, Luís Cruz-Filipe, Thorsten Ehlers, Mike Müller, Peter Schneider-Kamp]
    what: "New parallel networks for 17 to 20 inputs, including a depth-10 network for 17 inputs, which is optimal."
    link: https://arxiv.org/abs/1507.01428
  - year: 2020
    by: [Jannis Harder]
    what: "35 comparators are optimal for 11 inputs and 39 for 12."
    link: https://arxiv.org/abs/2012.04400
---
What is the fewest comparators, or the fewest parallel layers, in a network that sorts n inputs? Bose and Nelson raised the question in 1962. Optimal size is known only up to 12 inputs (13 inputs need 43, 44 or 45 comparators) and optimal depth up to 17 (18 inputs need depth 10 or 11); recent cases were settled with SAT solvers.
