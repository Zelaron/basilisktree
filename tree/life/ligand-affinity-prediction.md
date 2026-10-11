---
title: Protein–Ligand Affinity Prediction
status: open
importance: 52
posed: 2015
requires: [alphafold3, molecular-dynamics-proteins]
field: computational biology
aliases: [binding affinity prediction, free energy perturbation, lead optimization]
links:
  - https://en.wikipedia.org/wiki/Scoring_functions_for_docking
  - https://doi.org/10.1002/prot.70061
  - https://en.wikipedia.org/wiki/Free-energy_perturbation
progress:
  - year: 1987
    by: [Paul A. Bash, Peter Kollman]
    what: "A thermodynamic perturbation calculation run with molecular dynamics gave the relative binding free energy of two thermolysin inhibitors as 4.21 kcal/mol against an experimental 4.1."
    link: https://doi.org/10.1126/science.3810157
  - year: 2015
    by: [Lingle Wang, Schrödinger]
    what: "The FEP+ protocol was validated retrospectively on 200 ligands across several target classes and applied prospectively, the first free-energy method accurate enough to guide lead optimization at scale."
    link: https://doi.org/10.1021/ja512751q
  - year: 2025
    by: [Saro Passaro, Gabriele Corso, Regina Barzilay]
    with: [Boltz-2]
    what: "Boltz-2 was released with open weights as the first machine-learning model claimed to approach free-energy perturbation accuracy on affinity, at least 1,000 times more cheaply."
    link: https://doi.org/10.1101/2025.06.14.659707
  - year: 2026
    by: [Shunzhou Wan, Peter Coveney]
    with: [Boltz-2]
    what: "An independent evaluation found only weak to moderate correlations with measured affinities across datasets and no significant correlation on the top 100 compounds, concluding the model lacks the resolution for lead identification."
    link: https://arxiv.org/abs/2603.05532
---
Predict how tightly a small molecule binds a protein, well enough to rank a congeneric series before anything is synthesised. CASP16 ran the first blind pharmaceutical affinity round over 140 targets, and the 2025 assessment put the best Kendall tau at 0.42 against a ceiling near 0.73 set by experimental error, with ligand molecular weight nearly as predictive. Results are posted at predictioncenter.org.
