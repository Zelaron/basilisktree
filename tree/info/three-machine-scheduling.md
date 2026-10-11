---
title: Three-Machine Scheduling Problem
status: claimed
importance: 35
posed: 1979
requires: [complexity-theory]
by: [OpenAI]
with: [OpenAI internal model, Lean 4]
field: scheduling
aliases: ["P3|prec,pj=1|Cmax", precedence-constrained scheduling]
links:
  - https://arxiv.org/abs/1509.07808
  - https://en.wikipedia.org/wiki/Optimal_job_scheduling
progress:
  - year: 2016
    by: [Elaine Levey, Thomas Rothvoss]
    what: "A (1 + ε)-approximation for any fixed number of machines from LP hierarchies, in slightly superpolynomial time."
    link: https://arxiv.org/abs/1509.07808
  - year: 2017
    by: [Shashwat Garg]
    what: "The same approximation in quasipolynomial time."
    link: https://arxiv.org/abs/1708.04369
  - year: 2022
    by: [Jesper Nederlof, Céline Swennenhuis, Karol Węgrzycki]
    what: "An exact O(1.995^n) algorithm for any number of machines; before it, even three machines needed about 2^n time."
    link: https://arxiv.org/abs/2208.02664
  - year: 2026
    by: [OpenAI]
    with: [OpenAI internal model, Lean 4]
    what: "Claimed polynomial-time algorithm that minimizes the makespan of unit jobs with precedence constraints on three identical machines (family 124 of OpenAI’s math release, formalized in Lean). Not yet independently reviewed."
    link: https://github.com/openai/math
---
Schedule n unit-time jobs with precedence constraints on three identical machines so that the last one finishes as early as possible: is this NP-hard or polynomial? Two machines are easy (Coffman and Graham, 1972) and an unbounded number is NP-hard, but the three-machine case is one of the last open problems from Garey and Johnson's 1979 book. OpenAI’s October 2026 release claims a polynomial-time algorithm.
