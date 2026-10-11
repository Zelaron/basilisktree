---
title: Low-Autocorrelation Binary Sequences
status: open
importance: 33
posed: 1972
requires: [radar]
field: telecom
aliases: [LABS, merit factor problem, Bernasconi model, Golay merit factor]
links:
  - https://arxiv.org/abs/1512.02475
progress:
  - year: 2013
    by: [Jonathan Jedwab, Daniel J. Katz, Kai-Uwe Schmidt]
    what: "Skew-symmetric families with asymptotic merit factor above 6.34, matching the best known for any binary sequences."
    link: https://arxiv.org/abs/1205.0626
  - year: 2016
    by: [Tom Packebusch, Stephan Mertens]
    what: "A branch-and-bound algorithm running in time Θ(N·1.73^N) finds all optimal sequences up to N = 66, and skew-symmetric optima up to 119."
    link: https://arxiv.org/abs/1512.02475
  - year: 2024
    by: [Ruslan Shaydulin, Marco Pistoia]
    what: "With colleagues, used LABS as a quantum benchmark: QAOA's simulated time-to-solution scales better than branch-and-bound, with runs on Quantinuum trapped-ion processors."
    link: https://arxiv.org/abs/2308.02342
---
Find ±1 sequences of length N whose aperiodic autocorrelations have the least total energy, that is the highest Golay merit factor, as wanted for radar pulse compression (Golay, 1972). Exact optima are known only for N ≤ 66 (2016), and the best proven asymptotic merit factor is about 6.34, against Golay's heuristic ceiling of about 12.32. Progress means certified optima beyond 66 or better asymptotic constructions.
