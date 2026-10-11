---
title: Witsenhausen's Counterexample
status: open
importance: 38
posed: 1968
requires: [optimal-control, kalman-filter, information-theory]
field: control
aliases: [Witsenhausen problem, decentralized LQG control, signalling in control]
links:
  - https://en.wikipedia.org/wiki/Witsenhausen%27s_counterexample
progress:
  - year: 1986
    by: [Christos Papadimitriou, John Tsitsiklis]
    what: "The discrete version of the problem is NP-complete."
    link: https://doi.org/10.1137/0324038
  - year: 2001
    by: [J. T. Lee, E. Lau, Yu-Chi Ho]
    what: "Hierarchical search finds sloped step-function strategies with benchmark cost 0.1673, far below the best linear cost of about 0.96."
    link: https://doi.org/10.1109/9.911416
  - year: 2013
    by: [Pulkit Grover, Se Yong Park, Anant Sahai]
    what: "Lattice quantization strategies come within a constant factor of the optimal cost for every choice of parameters."
    link: https://doi.org/10.1109/TAC.2013.2257595
  - year: 2017
    by: [Shih-Hao Tseng, Ao Tang]
    what: "A local search guided by variational optimality conditions gives the lowest known costs on the benchmark."
    link: https://doi.org/10.1109/CDC.2017.8264401
---
Two controllers act in turn on a Gaussian state: the first sees it exactly but pays k² per unit of control energy, the second sees it only through noise and must cancel it. Witsenhausen showed in 1968 that nonlinear signalling strategies beat every linear one, and the optimal pair is still unknown. Solving it means finding and proving the optimal laws; the standard benchmark is k = 0.2, σ = 5, best known cost about 0.1669.
