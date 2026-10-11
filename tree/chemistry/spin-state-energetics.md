---
title: Spin-State Energetics
status: open
importance: 35
posed: 2001
requires: [crystal-field-theory, coupled-cluster, density-functional-theory]
field: computational chemistry
aliases: [spin-crossover energetics, SSE17 benchmark]
links:
  - https://en.wikipedia.org/wiki/Spin_states_(d_electrons)
  - https://doi.org/10.1039/D4SC05471G
progress:
  - year: 2001
    by: [Markus Reiher, Oliver Salomon, Bernd Artur Hess]
    what: "Showed that DFT spin-state splittings of iron complexes hinge on the share of exact exchange and proposed B3LYP* with 15% instead of 20%."
    link: https://doi.org/10.1007/s00214-001-0300-3
  - year: 2024
    by: [Mariusz Radoń, Gabriela Drabik, Maciej Hodorowicz, Janusz Szklarzewicz]
    what: "The SSE17 benchmark, derived from experimental data on 17 transition-metal complexes, found mean absolute errors of 1.5 kcal/mol for CCSD(T), under 3 for the best double hybrids and 5–7 for B3LYP* and TPSSh, with maximum errors above 10."
    link: https://doi.org/10.1039/D4SC05471G
  - year: 2026
    by: [Mandira Dey, Quan Manh Phung, Takeshi Yanai, Debashree Ghosh]
    what: "Computed CASPT2/CC spin gaps for 50 octahedral complexes, found that the best share of exact exchange depends on the spin transition, and extended this accuracy to 500 complexes with Δ-machine learning."
    link: https://doi.org/10.1039/D5CP03964A
---
Which spin state does a transition-metal complex prefer, and by how much? Density functionals disagree by many kcal/mol because the answer hinges on the share of exact exchange (Reiher, Salomon and Hess, 2001), and it governs catalysts, enzymes and spin-crossover materials. A solution is a method at DFT-like cost that matches experiment-derived spin-state energies within about 1 kcal/mol, for example on the SSE17 set (2024).
