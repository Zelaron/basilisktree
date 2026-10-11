---
title: Predicting Perturbation Responses
status: open
importance: 50
posed: 2019
requires: [perturb-seq, single-cell-rnaseq, deep-learning]
field: systems biology
aliases: [Virtual Cell Challenge, perturbation response prediction, in silico Perturb-seq, single-cell foundation models]
links:
  - https://en.wikipedia.org/wiki/Perturb-seq
  - https://arcinstitute.org/news/virtual-cell-challenge-2026
progress:
  - year: 2019
    by: [Mohammad Lotfollahi, F. Alexander Wolf, Fabian Theis]
    with: [scGen]
    what: "scGen, a variational autoencoder, predicted single-cell responses to stimulation and infection in cell types held out of training, across studies and species."
    link: https://doi.org/10.1038/s41592-019-0494-8
  - year: 2023
    by: [Yusuf Roohani, Kexin Huang, Jure Leskovec]
    with: [GEARS]
    what: "GEARS combined deep learning with a gene-interaction knowledge graph to predict transcriptional outcomes of single and multigene perturbations, including combinations of genes never perturbed in the training data."
    link: https://doi.org/10.1038/s41587-023-01905-6
  - year: 2025
    by: [Constantin Ahlmann-Eltze, Wolfgang Huber, Simon Anders]
    what: "Five single-cell foundation models and two other deep-learning models failed to beat deliberately simple baselines, including linear models, at predicting transcriptome changes after single or double gene perturbations."
    link: https://doi.org/10.1038/s41592-025-02772-6
  - year: 2025
    by: [Arc Institute]
    what: "In the first Virtual Cell Challenge (300 CRISPRi knockdowns in H1 embryonic stem cells; over 1,200 teams), BioMap's xTrimoSCPerturb won, but models did not consistently beat naive baselines and almost all did worse than the baseline on mean absolute error."
    link: https://arcinstitute.org/news/virtual-cell-challenge-2025-wrap-up
---
Predict how a cell's transcriptome changes when a chosen gene is knocked down, even in cell types never perturbed before. Solving it means beating naive baselines on every metric of Arc Institute's Virtual Cell Challenge; in 2025 (over 1,200 teams, scored on perturbation discrimination, differential expression and mean absolute error) almost every model lost to the baseline on error, and the zero-shot 2026 round closes on 5 November 2026.
