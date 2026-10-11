---
title: Taillard Job-Shop Benchmarks
status: open
importance: 32
posed: 1993
requires: [complexity-theory, assembly-line]
field: manufacturing
aliases: [job shop scheduling, JSSP, Taillard instances]
links:
  - https://en.wikipedia.org/wiki/Job-shop_scheduling
  - https://optimizizer.com/TA.php
progress:
  - year: 2024
    by: [Vilém Heinz, Zdeněk Hanzálek, Petr Vilím]
    what: "Reinforcement learning that shrinks constraint-programming search trees raised the lower bounds of many open instances."
    link: https://doi.org/10.2139/ssrn.4938242
  - year: 2026
    by: [Francisco Yuraszeck, Gonzalo Mejía, Daniel Alejandro Rossit, Armin Lüer-Villagra]
    what: "New constraint-programming lower bounds for ta18 and the open 20×20 instances."
    link: https://doi.org/10.1016/j.cor.2026.107396
  - year: 2026
    by: [Hernán Díaz Rodríguez]
    what: "A schedule of makespan 1997 for ta45, matching its lower bound and closing the instance, found by memetic tabu search with path relinking and CP-SAT (manuscript in preparation)."
    link: https://optimizizer.com/TA.php
  - year: 2026
    by: [Qihao Liu, Xinyu Li, Liang Gao]
    what: "New best schedules for ta26, ta32, ta44 and ta46."
    link: https://optimizizer.com/TA.php
---
Find the shortest schedules (makespans) for Taillard's 80 job-shop instances (1993), from 15 jobs on 15 machines to 100 jobs on 20 machines, and prove them optimal; they are the standard test of factory scheduling methods. As of the 28 September 2026 update, 20 instances with 20 or 30 jobs still have a gap between the best schedule and the best lower bound. Each instance closed counts.
