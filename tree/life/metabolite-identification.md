---
title: Identifying the Dark Metabolome
status: open
importance: 44
posed: 2012
requires: [isotope-tracers, deep-learning]
field: biochemistry
aliases: [dark metabolome, de novo structure elucidation, MassSpecGym, untargeted metabolomics]
links:
  - https://en.wikipedia.org/wiki/Metabolomics
  - https://github.com/pluskal-lab/MassSpecGym
progress:
  - year: 2024
    by: [Roman Bushuiev, Josef Sivic, Tomáš Pluskal]
    what: "MassSpecGym collected 231,000 labelled spectra covering 29,000 molecules and split them so that no training molecule is within an edge edit distance of 10 of a test molecule, removing the leakage that had inflated earlier scores."
    link: https://arxiv.org/abs/2410.23326
  - year: 2025
    by: [Montgomery Bohde, Connor W. Coley]
    what: "DiffMS, a graph diffusion decoder restricted by the molecular formula, reached 2.30% top-1 and 4.25% top-10 exact-match accuracy on MassSpecGym, about double the next best method."
    link: https://arxiv.org/abs/2502.09571
  - year: 2026
    by: [Ghaith Mqawass, Fabian Theis, Djork-Arné Clevert]
    what: "MSFlow, a flow-matching decoder over formula-restricted spectrum embeddings, reported 32.0% top-1 and 42.5% top-10 on MassSpecGym with formulas taken from SIRIUS. The claim is a preprint and is not in the benchmark's posted results table."
    link: https://arxiv.org/abs/2602.19912
  - year: 2026
    by: [Mark Yu. Schneider, Sergei A. Nikolenko]
    what: "A review of the published methods put the state of the art at 4.1% top-10 accuracy once leakage is controlled, and noted that only 2 to 13% of spectra in a typical run can be matched to a library at all."
    link: https://doi.org/10.3390/molecules31050769
---
Most peaks in an untargeted metabolomics run are molecules that no spectral library can name. The problem is to recover the structure from a tandem mass spectrum alone. MassSpecGym (2024) scores this as top-1 exact-match accuracy under leakage-controlled splits; its posted results table tops out at 2.3%, while 2026 preprints claim up to 32%. Results go to the benchmark repository.
