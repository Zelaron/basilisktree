---
title: Coupled-Cluster-Accurate ML Potential
status: open
importance: 44
posed: 2019
requires: [coupled-cluster, neural-network-potentials]
field: AI for chemistry
aliases: [CCSD(T)-level machine-learned potential, gold-standard force field]
links:
  - https://en.wikipedia.org/wiki/Machine-learned_interatomic_potential
  - https://doi.org/10.1038/s41467-019-10827-4
progress:
  - year: 2019
    by: [Justin S. Smith, Benjamin T. Nebgen, Olexandr Isayev, Adrian E. Roitberg]
    what: "ANI-1ccx, trained on DFT data and then retrained on CCSD(T)/CBS energies, approached coupled-cluster accuracy for reaction energies, isomerizations and torsions of organic molecules made of H, C, N and O."
    link: https://doi.org/10.1038/s41467-019-10827-4
  - year: 2025
    by: [Daniel S. Levine, Muhammed Shuaibi, Samuel M. Blau, Brandon M. Wood]
    what: "Released OMol25, more than 100 million ωB97M-V/def2-TZVPD calculations on systems of up to 350 atoms across 83 elements, so models trained on it target hybrid-DFT accuracy."
    link: https://arxiv.org/abs/2505.08762
  - year: 2026
    by: [Yuji Ikeda, Andreas Köhn, Blazej Grabowski]
    what: "A Δ-learned potential reached CCSD(T) accuracy for a covalent organic framework, with errors below 0.4 meV/atom, and the authors found that ANI-1ccx fails even qualitatively for the benzene dimer."
    link: https://doi.org/10.1021/acs.jctc.5c02045
---
Can a machine-learned interatomic potential match CCSD(T), the reference method of quantum chemistry, across chemistry at force-field speed? ANI-1ccx (2019) came close for small organic molecules, while broad models such as those trained on OMol25 (2025) learn from DFT. A solution is an open potential within 1 kcal/mol of CCSD(T) on standard benchmarks spanning main-group, transition-metal and non-covalent chemistry, including bond breaking.
