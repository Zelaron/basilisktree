---
title: Disordered Binding Regions
status: open
importance: 36
posed: 2018
requires: [protein-language-models, alphafold]
field: computational biology
aliases: [CAID, intrinsically disordered regions, molecular recognition features, MoRFs]
links:
  - https://en.wikipedia.org/wiki/Intrinsically_disordered_proteins
  - https://caid.idpcentral.org/
  - https://pmc.ncbi.nlm.nih.gov/articles/PMC12750029/
progress:
  - year: 2021
    by: [Marco Necci, Damiano Piovesan, Silvio Tosatto]
    what: "The first CAID round, built on DisProt annotations collected from June 2018, scored 43 methods on 646 proteins. Disorder prediction reached Fmax 0.483, but disordered binding regions reached only Fmax 0.231."
    link: https://doi.org/10.1038/s41592-021-01117-3
  - year: 2023
    by: [Alessio Del Conte, Silvio Tosatto, Damiano Piovesan]
    with: [AlphaFold]
    what: "CAID round 2 found that AlphaFold2-derived methods are good disorder predictors but are better at detecting the absence of order than the disorder annotated in DisProt."
    link: https://doi.org/10.1002/prot.26582
  - year: 2025
    by: [Mahta Mehdiabadi, Damiano Piovesan]
    what: "In CAID round 3 the best binary disorder predictor reached AUC 0.955 on the Disorder-PDB benchmark, while on the binding benchmark the best average precision was about 0.25 and a plain AlphaFold baseline ranked fourth at AUC 0.772 and APS 0.249."
    link: https://pmc.ncbi.nlm.nih.gov/articles/PMC12750029/
---
Many proteins stay disordered until they meet a partner. Predicting which residues of a disordered region do the binding is the part of disorder prediction that has not moved: CAID, running on DisProt annotations since 2018, scores it by average precision, and in round 3 (2025) the best score was about 0.25 while binary disorder prediction reached AUC 0.955. Results are posted at caid.idpcentral.org.
