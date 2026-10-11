---
title: Protein Function Prediction
status: open
importance: 48
posed: 2010
requires: [blast, protein-language-models, genbank]
field: bioinformatics
aliases: [CAFA, Gene Ontology annotation, automated function prediction]
links:
  - https://en.wikipedia.org/wiki/Protein_function_prediction
  - https://en.wikipedia.org/wiki/Critical_Assessment_of_Function_Annotation
  - https://pmc.ncbi.nlm.nih.gov/articles/PMC13142333/
progress:
  - year: 2013
    by: [Predrag Radivojac, Iddo Friedberg]
    what: "The first CAFA experiment evaluated 54 methods on 866 proteins from 11 organisms and found that the best of them clearly beat first-generation annotation transfer, while leaving much room for improvement."
    link: https://doi.org/10.1038/nmeth.2340
  - year: 2019
    by: [Naihui Zhou, Iddo Friedberg, Predrag Radivojac]
    what: "CAFA3 reported slight gains for molecular function and biological process and none for cellular component, and drove experimental screens that produced new annotations for more than 1,000 genes."
    link: https://doi.org/10.1186/s13059-019-1835-8
  - year: 2024
    by: [Alexander Chervov, Anton Vakhrushev]
    with: [ProtT5]
    what: "ProtBoost, which stacks gradient-boosted models over protein language model embeddings with a graph network over the Gene Ontology, took second place in CAFA5 with 0.58240 on the final leaderboard against 0.57276 for third."
    link: https://arxiv.org/abs/2412.04529
  - year: 2026
    by: [M. Clara De Paolis Kaluza, Iddo Friedberg, Predrag Radivojac]
    what: "The CAFA5 assessment covered 2,850 models from 1,625 teams in 78 countries. Top methods beat every earlier CAFA round, but on proteins already carrying annotations in another ontology the best scores fell 48 to 60% below the no-knowledge setting."
    link: https://pmc.ncbi.nlm.nih.gov/articles/PMC13142333/
---
Read a protein sequence and say what it does, in Gene Ontology terms. CAFA scores this as the information-accretion-weighted Fmax averaged over the three ontologies: CAFA5 on Kaggle (2023) drew 1,625 teams and the top entries scored about 0.58, and the 2026 assessment found scores roughly halve on proteins that already carry annotations. Results are posted by the CAFA organisers.
