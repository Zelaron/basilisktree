---
title: Neoantigen Immunogenicity
status: open
importance: 44
posed: 2016
requires: [mhc-restriction, checkpoint-blockade, next-gen-sequencing]
field: immunology
aliases: [neoantigen prediction, TESLA, personalised cancer vaccines]
links:
  - https://en.wikipedia.org/wiki/Cancer_immunotherapy
  - https://doi.org/10.1016/j.cell.2020.09.015
  - https://doi.org/10.1016/j.xgen.2026.101214
progress:
  - year: 2016
    by: [Parker Institute for Cancer Immunotherapy, Cancer Research Institute]
    what: "The Tumor Neoantigen Selection Alliance was announced on 1 December 2016, putting 30 academic and industry groups to work predicting immunogenic epitopes from shared tumour sequencing data."
    link: https://www.parkerici.org/the-latest/parker-institute-for-cancer-immunotherapy-and-cancer-research-institute-launch-collaboration-on-cancer-neoantigens/
  - year: 2020
    by: [Tumor Neoantigen Selection Alliance, Daniel K. Wells]
    what: "TESLA tested 608 predicted epitopes for T-cell binding in patient-matched samples. A model built from presentation and recognition features removed 98% of non-immunogenic peptides at precision above 0.70, and held up on a further 310 epitopes."
    link: https://doi.org/10.1016/j.cell.2020.09.015
  - year: 2026
    by: [Ziting Zhang, Xiaowo Wang]
    what: "Modelling MHC binding, presentation and T-cell activation in one architecture showed that deep-learning immunogenicity predictors had instead learned a shortcut from HLA label imbalance, a bias the authors quantified and partly corrected."
    link: https://doi.org/10.1016/j.xgen.2026.101214
---
Of the hundreds of mutant peptides in a tumour, predict the few that a patient's T cells will attack. The reference set is the 608 epitopes the TESLA consortium tested for immunogenicity (Cell, 2020), where a feature-based filter removed 98% of non-immunogenic peptides at precision above 0.70. Solving it means ranking one patient's candidates well enough to pick vaccine targets without screening them.
