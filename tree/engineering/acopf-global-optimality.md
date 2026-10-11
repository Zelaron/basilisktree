---
title: Global Optimum of AC Power Flow
status: open
importance: 42
posed: 1962
requires: [electric-power, three-phase-power, semidefinite-programming]
field: electrical
aliases: [ACOPF, optimal power flow, OPF]
links:
  - https://en.wikipedia.org/wiki/Power_system_simulation
  - https://github.com/power-grid-lib/pglib-opf/blob/master/BASELINE.md
progress:
  - year: 2012
    by: [Javad Lavaei, Steven Low]
    what: "A semidefinite relaxation is exact on several IEEE test systems, certifying their global optima."
    link: https://doi.org/10.1109/TPWRS.2011.2160974
  - year: 2016
    by: [Karsten Lehmann, Alban Grastien, Pascal Van Hentenryck]
    what: "AC feasibility is NP-hard even on tree networks."
    link: https://doi.org/10.1109/TPWRS.2015.2407363
  - year: 2019
    by: [Daniel Bienstock, Abhinav Verma]
    what: "AC power flow feasibility is strongly NP-hard."
    link: https://doi.org/10.1016/j.orl.2019.08.009
---
Find, and certify, the cheapest operating point of an AC power grid that satisfies the power-flow physics and equipment limits: the optimal power flow problem posed by Carpentier in 1962. It is NP-hard, and on the PGLib-OPF library (v23.07) the gap between the best known solution and the QC convex relaxation exceeds 1% on 134 of 198 cases, up to 55% on an 8,387-bus grid. Solving it at benchmark scale means closing those gaps with proofs.
