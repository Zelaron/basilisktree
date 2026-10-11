---
title: Protein Conformational Ensembles
status: open
importance: 44
posed: 2022
requires: [alphafold, molecular-dynamics-proteins, folding-funnel]
field: computational biology
aliases: [fold switching, alternative conformations, Boltzmann ensembles]
links:
  - https://en.wikipedia.org/wiki/Conformational_ensembles
  - https://doi.org/10.1101/2025.09.02.673835
  - https://doi.org/10.1101/2025.04.27.650885
progress:
  - year: 2022
    by: [Diego del Alamo, Hassane S. Mchaourab, Jens Meiler]
    with: [AlphaFold2]
    what: "Subsampling the input alignment made AlphaFold2 produce alternative conformational states of transporters and receptors rather than one structure."
    link: https://doi.org/10.7554/eLife.75751
  - year: 2023
    by: [Hannah K. Wayment-Steele, Dorothee Kern]
    with: [AlphaFold2]
    what: "AF-Cluster clustered a protein's sequence alignment and predicted both states of the KaiB fold switch, which were then confirmed by NMR."
    link: https://doi.org/10.1038/s41586-023-06832-9
  - year: 2025
    by: [Sarah Lewis, Cecilia Clementi, Frank Noé]
    with: [BioEmu]
    what: "BioEmu emulated equilibrium ensembles with a generative model, reporting free-energy errors under 1 kcal/mol against millisecond molecular dynamics and measured folding stabilities at four to five orders of magnitude less compute."
    link: https://doi.org/10.1126/science.adv9817
  - year: 2025
    by: [Theresa A. Ramelot, Gaetano T. Montelione, Andriy Kryshtafovych]
    what: "In CASP16's flexible-linker target 25 groups submitted 35 predicted conformational distributions, and none closely fit the combined NMR residual dipolar coupling and SAXS data withheld from them."
    link: https://doi.org/10.1101/2025.04.27.650885
---
Predict the whole distribution of shapes a protein visits, with the right populations, instead of one structure. CASP16 ran the first blind ensembles experiment in 2024: groups modelled both reference states for 5 of 10 targets, and on the flexible-linker target none of 35 submitted distributions fit the withheld NMR and SAXS data. Solving it means matching those populations on unseen proteins.
