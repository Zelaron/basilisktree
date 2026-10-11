---
title: Antibody–Antigen Structure Prediction
status: open
importance: 46
posed: 2001
requires: [alphafold3, monoclonal-antibodies, vdj-recombination]
field: computational biology
aliases: [antibody docking, epitope prediction, CAPRI, immune complexes]
links:
  - https://en.wikipedia.org/wiki/Macromolecular_docking
  - https://doi.org/10.1002/prot.70068
  - https://predictioncenter.org/casp17/callForTargets.cgi
progress:
  - year: 2003
    by: [Joël Janin, Shoshana Wodak, John Moult]
    what: "The first two rounds of CAPRI, the blind docking experiment launched in 2001, drew 19 groups on seven complexes and concluded that scoring functions and conformational change were the limiting problems."
    link: https://doi.org/10.1002/prot.10381
  - year: 2025
    by: [Jing Zhang, Qian Cong, Andriy Kryshtafovych]
    with: [AlphaFold 3]
    what: "On CASP16's eight antibody-antigen targets the best group, using FFT-based docking rather than co-folding, reached acceptable accuracy on five. AlphaFold 3 run with 1,000 seeds averaged DockQ about 0.27."
    link: https://doi.org/10.1002/prot.70068
  - year: 2026
    by: [John Moult, Andriy Kryshtafovych]
    what: "CASP17 made immune complexes a category of their own, covering antibody-antigen, nanobody-antigen and T-cell receptor complexes, and named them a major failure area for current deep-learning methods."
    link: https://predictioncenter.org/casp17/callForTargets.cgi
---
Predict where and how an antibody grips its antigen from the two sequences, the one docking class where no co-folding model has taken over. CASP scores a complex by DockQ, counting 0.23 and above as acceptable; the best CASP16 group managed five of eight antibody-antigen targets in 2024 while AlphaFold 3 averaged about 0.27. CASP17 (2026) made immune complexes their own category.
