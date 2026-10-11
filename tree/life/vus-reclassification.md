---
title: Variants of Uncertain Significance
status: open
importance: 48
posed: 2015
requires: [next-gen-sequencing, human-genome, alphamissense]
field: genomics
aliases: [VUS, variant classification, missense variant interpretation, ACMG/AMP guidelines]
links:
  - https://en.wikipedia.org/wiki/Variant_of_uncertain_significance
  - https://proteingym.org
progress:
  - year: 2018
    by: [Gregory Findlay, Lea Starita, Jay Shendure]
    what: "Saturation genome editing measured the function of nearly 4,000 single-nucleotide variants in 13 exons of BRCA1, in almost perfect agreement with established pathogenic and benign classifications."
    link: https://doi.org/10.1038/s41586-018-0461-z
  - year: 2023
    by: [Jun Cheng, Žiga Avsec, Google DeepMind]
    with: [AlphaMissense]
    what: "AlphaMissense scored every possible human single amino acid substitution and labelled 89% of missense variants likely benign or likely pathogenic."
    link: https://doi.org/10.1126/science.adg7492
  - year: 2025
    by: [Huaizhi Huang, Fergus Couch]
    what: "Saturation genome editing in haploid human cells assigned 6,959 single-nucleotide variants in the BRCA2 DNA-binding domain to pathogenicity categories; combined with ClinGen and ACMG/AMP models, 91% could be classified as pathogenic or benign."
    link: https://doi.org/10.1038/s41586-024-08388-8
  - year: 2025
    by: [Timothy Bergquist, Steven E. Brenner, Vikas Pejaver]
    with: [AlphaMissense]
    what: "ClinGen's calibration of AlphaMissense, ESM1b and VARITY found that each supplies at most strong evidence for pathogenicity and moderate evidence for benignity under ACMG/AMP rules, a modest gain over earlier tools."
    link: https://doi.org/10.1016/j.gim.2025.101402
---
A variant of uncertain significance (VUS) is a genetic test result too uncertain to guide care; of 1.7 million people given clinical gene panels in 2014–2022, 41% received at least one. Solving it means moving most VUS in a clinical gene panel to benign or pathogenic under the 2015 ACMG/AMP rules; the best zero-shot predictors reach AUC 0.92 on ProteinGym's clinical benchmark, and ClinGen in 2025 rated AlphaMissense at most strong evidence.
