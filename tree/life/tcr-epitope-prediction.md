---
title: TCR–Epitope Specificity
status: open
importance: 46
posed: 2022
requires: [mhc-restriction, vdj-recombination, protein-language-models]
field: immunology
aliases: [TCR specificity prediction, IMMREP, TCR-pMHC binding]
links:
  - https://en.wikipedia.org/wiki/T-cell_receptor
  - https://doi.org/10.1016/j.immuno.2024.100045
  - https://www.biorxiv.org/content/10.64898/2026.03.30.715276v1
progress:
  - year: 2023
    by: [Pieter Meysman, Justin Barton]
    what: "IMMREP22, the first community benchmark for TCR-epitope prediction, fixed the task and the AUC0.1 metric used since."
    link: https://doi.org/10.1016/j.immuno.2023.100024
  - year: 2024
    by: [Morten Nielsen, Anne Eugster, Pieter Meysman]
    what: "IMMREP23 drew 53 teams and 398 submissions. Methods that did not exploit the test set structure were close to random on unseen peptides, and leakage in the negative set complicated the comparison."
    link: https://doi.org/10.1016/j.immuno.2024.100045
  - year: 2026
    by: [Eve Richardson, Bjoern Peters]
    with: [AlphaFold 3]
    what: "IMMREP25 scored 126 submissions on 1,000 TCRs against 20 unseen peptides. The best entry, a modified AlphaFold 3 pipeline, reached macro-AUC0.1 0.60 against 0.50 for chance, while the only fully sequence-based method scored 0.518."
    link: https://www.biorxiv.org/content/10.64898/2026.03.30.715276v1
---
Given a T-cell receptor and a peptide-MHC it has never seen, predict whether they bind. The IMMREP benchmarks score this as macro-AUC0.1 over held-out peptides, where 0.50 is chance: no method beat chance on unseen peptides in the 2022 and 2023 rounds, and the best of 126 entries in IMMREP25 reached 0.60 (2026). Solving it means reliable prediction for peptides with no training data.
