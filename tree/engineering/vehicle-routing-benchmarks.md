---
title: Vehicle Routing Benchmarks
status: open
importance: 32
posed: 1959
requires: [complexity-theory, linear-programming, automobile]
field: transport
aliases: [CVRP, CVRPLIB X instances, truck dispatching problem]
links:
  - https://en.wikipedia.org/wiki/Vehicle_routing_problem
  - http://galgos.inf.puc-rio.br/cvrplib/index.php/en/
progress:
  - year: 2017
    by: [Eduardo Uchoa, Diego Pecin, Artur Pessoa, Marcus Poggi, Thibaut Vidal, Anand Subramanian]
    what: "Introduced the 100-instance X benchmark set."
    link: https://doi.org/10.1016/j.ejor.2016.08.012
  - year: 2020
    by: [Artur Pessoa, Ruslan Sadykov, Eduardo Uchoa, François Vanderbeck]
    what: "VRPSolver, a generic branch-cut-and-price exact solver for vehicle routing and related problems."
    link: https://doi.org/10.1007/s10107-020-01523-z
  - year: 2022
    by: [Thibaut Vidal]
    what: "An open-source hybrid genetic search with the SWAP* neighbourhood, a state-of-the-art heuristic for the benchmark."
    link: https://doi.org/10.1016/j.cor.2021.105643
---
Find, and prove optimal, the shortest set of routes for capacity-limited delivery trucks leaving one depot, the problem Dantzig and Ramser posed in 1959. The standard test is the X set of Uchoa et al. (2017): 100 instances with 100 to 1,000 customers, of which 39 still lack optimality proofs on CVRPLIB (October 2026). Each new proof, or a better best-known solution, counts.
