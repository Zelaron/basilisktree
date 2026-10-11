---
title: Predicting Personal Gene Expression
status: open
importance: 42
posed: 2023
requires: [alphagenome, gwas, human-genome]
field: genomics
aliases: [personal genome interpretation, cross-individual expression prediction, sequence-to-function models, eQTL effect prediction]
links:
  - https://en.wikipedia.org/wiki/Expression_quantitative_trait_loci
  - https://doi.org/10.64898/2026.02.01.702969
progress:
  - year: 2023
    by: [Connie Huang, Nilah Ioannidis]
    with: [Enformer]
    what: "Four reference-trained models, Enformer among them, explained little of the expression variation among 421 people in Geuvadis cell-line data: per-gene correlations across individuals centred near zero, and the predicted direction of a variant's effect was often wrong."
    link: https://doi.org/10.1038/s41588-023-01574-w
  - year: 2023
    by: [Alexander Sasse, Sara Mostafavi]
    with: [Enformer]
    what: "With paired genomes and cortex RNA-seq from 839 ROSMAP participants, Enformer often predicted the wrong direction of a variant's effect on expression, a failure traced to poorly learned sequence-motif grammar."
    link: https://doi.org/10.1038/s41588-023-01524-6
  - year: 2026
    by: [Shiron Drusinsky, Sean Whalen, Katherine Pollard]
    with: [Variformer]
    what: "Fine-tuning a sequence model on personal genomes with matched expression (Variformer) brought predictions for held-out people close to each gene's cis-heritability, but only for genes seen in training; it did not generalise to unseen genes."
    link: https://doi.org/10.1186/s13059-025-03926-7
  - year: 2026
    by: [Xinming Tu, Sara Mostafavi]
    with: [AlphaGenome]
    what: "On 500 heritable genes in ROSMAP brain samples, AlphaGenome reached a mean cross-individual Pearson r of 0.151, against 0.058 for Borzoi and 0.670 for a per-gene elastic-net genotype model; for chromatin accessibility it came much closer (0.627 against 0.758)."
    link: https://doi.org/10.64898/2026.02.01.702969
---
Predict how one person's gene expression differs from another's from their genome sequences alone, for genes the model never saw in training. Solving it means matching a per-gene elastic-net genotype model fitted within the cohort, scored by cross-individual Pearson r on held-out people; on 500 heritable genes in ROSMAP brain data AlphaGenome (Nature, January 2026) reaches 0.151 against the baseline's 0.670 (Tu et al., bioRxiv, February 2026).
