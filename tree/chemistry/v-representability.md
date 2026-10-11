---
title: v-Representability Problem
status: open
importance: 33
posed: 1982
requires: [density-functional-theory, functional-analysis]
field: mathematical chemistry
aliases: [density–potential mapping, foundations of the Hohenberg–Kohn theorem]
links:
  - https://en.wikipedia.org/wiki/Density_functional_theory
  - https://arxiv.org/abs/2312.07225
progress:
  - year: 1983
    by: [Hannelore Englisch, Reinhard Englisch]
    what: "Gave explicit examples of physically reasonable densities that are not the ground-state density of any potential, even when ensembles are allowed."
    link: https://doi.org/10.1016/0378-4371(83)90254-6
  - year: 1985
    by: [Jennifer Tour Chayes, Lincoln Chayes, Mary Beth Ruskai]
    what: "Proved that on a lattice every strictly positive density compatible with the Pauli principle is ensemble v-representable."
    link: https://doi.org/10.1007/BF01010474
  - year: 2024
    by: [Sarina M. Sutter, Markus Penz, Michael Ruggenthaler, Robert van Leeuwen, Klaas J. H. Giesbertz]
    what: "Solved the problem on a one-dimensional ring: every square-integrable density with a square-integrable derivative that stays away from zero is v-representable, with or without interactions, once distributional potentials are allowed."
    link: https://doi.org/10.1088/1751-8121/ad8a2a
  - year: 2026
    by: [Sarina M. Sutter, Markus Penz, Michael Ruggenthaler, Robert van Leeuwen, Klaas J. H. Giesbertz]
    what: "Extended the ring result to particles at finite temperature and showed that the characterized set of densities is maximal."
    link: https://arxiv.org/abs/2508.07784
  - year: 2026
    by: [OpenAI]
    with: [OpenAI internal model]
    what: "Claimed a three-electron molecule whose ground-state density has no noninteracting ensemble representation by any potential in L^(3/2) + L^∞, a counterexample to Kohn–Sham ensemble representability for that class (family 278 of OpenAI’s math release, not formalized). Not yet independently reviewed."
    link: https://github.com/openai/math
---
Which electron densities are the ground-state density of some external potential? Levy (1982) and Lieb (1983) found densities that come from no pure ground state, a gap in the foundations of the Hohenberg–Kohn theorem and the Kohn–Sham method of density functional theory. A solution characterizes the v-representable densities for interacting electrons in three dimensions, or proves that Kohn–Sham theory is well defined there.
