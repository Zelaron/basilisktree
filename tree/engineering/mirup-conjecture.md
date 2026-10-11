---
title: MIRUP Cutting-Stock Conjecture
status: open
importance: 35
posed: 1995
requires: [linear-programming, linear-algebra]
field: manufacturing
aliases: [modified integer round-up property, cutting stock integrality gap, Gilmore–Gomory gap]
links:
  - https://en.wikipedia.org/wiki/Cutting_stock_problem
  - https://arxiv.org/abs/1405.5988
progress:
  - year: 2008
    by: [J. Rietz, S. Dempe]
    what: "Instances with integrality gap 6/5, the largest known."
    link: https://arxiv.org/abs/1405.5988
  - year: 2015
    by: [Rebecca Hoberg, Thomas Rothvoss]
    what: "For bin packing, the configuration LP has an additive integrality gap of O(log OPT), the best bound known."
    link: https://arxiv.org/abs/1503.08796
  - year: 2015
    by: [Vadim M. Kartak, Artem V. Ripatti, Guntram Scheithauer, Sascha Kurz]
    what: "All instances with up to 9 item lengths have the round-up property; the smallest counterexample has 10, and the worst known proper gap rose from 1.003 to 1.0625."
    link: https://doi.org/10.1016/j.dam.2015.02.020
---
In one-dimensional cutting stock, rolls or bars are cut into ordered lengths using as few stock pieces as possible. Scheithauer and Terno conjectured in 1995 that the optimum never exceeds the Gilmore–Gomory linear-programming bound rounded up, plus one; the largest gap found is 6/5, and the best general bound grows logarithmically. Solving it means a proof that the gap is always below 2, or an instance with gap at least 2.
