---
title: Predicting Phage Host Range
status: open
importance: 38
posed: 2016
requires: [bacteriophage, metagenomics, genome-language-models]
field: microbiology
aliases: [phage-host interaction, host range prediction, phage therapy matching]
links:
  - https://en.wikipedia.org/wiki/Phage_therapy
  - https://doi.org/10.1038/s41564-024-01832-5
progress:
  - year: 2017
    by: [Clovis Galiez, Johannes Söding]
    what: "WIsH predicted the host genus of 3 kbp phage contigs with 63% mean accuracy among 20 genera, fast enough for metagenomes."
    link: https://doi.org/10.1093/bioinformatics/btx383
  - year: 2024
    by: [Baptiste Gaborieau, Laurent Debarbieux, Aude Bernheim]
    what: "A measured matrix of 403 Escherichia strains against 96 phages supported strain-level prediction from genomes alone at AUROC 0.86, and a pipeline that recommended tailored cocktails for 100 pathogenic E. coli isolates."
    link: https://doi.org/10.1038/s41564-024-01832-5
  - year: 2024
    by: [Dimitri Boeckaerts, Michiel Stock, Yves Briers]
    what: "PhageHostLearn predicted Klebsiella phage-host pairs from receptor-binding proteins and bacterial receptors at a cross-validated ROC AUC of up to 81.8%, and held that accuracy in laboratory validation."
    link: https://doi.org/10.1038/s41467-024-48675-6
  - year: 2026
    by: [Zhijie Wang, Javier Arsuaga]
    with: [Evo 2]
    what: "Ranking hosts by cosine similarity of Evo 2 whole-genome embeddings, with no phage-host training labels, gave 19.4% species-level top-1 accuracy against 23.2% for the best alignment baseline; fusing the two reached 26.9%."
    link: https://doi.org/10.64898/2026.03.19.712863
---
From a phage genome alone, say which bacterial strains it will kill. Solving it means strain-level prediction accurate enough to replace laboratory screening before phage therapy. The best experimentally validated results are AUROC 0.86 within Escherichia and ROC AUC 0.82 for Klebsiella, both 2024, while species-level top-1 accuracy across diverse phages is near 27% (2026).
