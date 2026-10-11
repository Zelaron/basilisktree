---
title: CCSD(T) vs Quantum Monte Carlo Puzzle
status: open
importance: 26
posed: 2021
requires: [coupled-cluster, monte-carlo]
field: computational chemistry
aliases: [CCSD(T)–DMC discrepancy, large non-covalent complexes benchmark]
links:
  - https://en.wikipedia.org/wiki/Non-covalent_interaction
  - https://arxiv.org/abs/2009.08927
progress:
  - year: 2024
    by: [Tobias Schäfer, Andreas Irmler, Alejandro Gallo, Andreas Grüneis]
    what: "Traced much of the gap to the perturbative triples of CCSD(T), which overcorrelate highly polarizable systems: the corrected CCSD(cT) gives −19.3 kcal/mol for the coronene dimer, against −21.1 for CCSD(T) and −18.1 for diffusion Monte Carlo (published 2025)."
    link: https://arxiv.org/abs/2407.01442
  - year: 2025
    by: [Vladimir Fishman, Michał Lesiuk, Jan M. L. Martin, A. Daniel Boese]
    what: "Benchmarks on acene and other dimers, with rank-reduced CCSDT(Q) for the smallest, found that CCSD(T) overbinds slightly, but by less than the quantum Monte Carlo results imply."
    link: https://doi.org/10.1021/acs.jctc.4c01512
  - year: 2025
    by: [Benjamin X. Shi, Yasmine S. Al-Hamdani, Angelos Michaelides, Andrea Zen]
    what: "Found systematic CCSD(T)–DMC differences already in the 66 medium-sized complexes of the S66 set, with DMC binding more strongly for electrostatic complexes and more weakly for dispersion-bound ones."
    link: https://doi.org/10.1063/5.0254021
---
For large, polarizable non-covalent complexes such as the coronene dimer and C60 held in a 'buckyball catcher', the two reference methods of quantum chemistry, CCSD(T) coupled cluster and diffusion Monte Carlo, disagree by up to 8 kcal/mol (Al-Hamdani and colleagues, 2021). A solution pins down these binding energies to within 1 kcal/mol by an independent route and identifies which approximation causes the gap.
