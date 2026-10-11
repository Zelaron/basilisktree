---
title: RNA 3D Structure Prediction
status: open
importance: 48
posed: 2012
requires: [alphafold3, protein-language-models]
field: computational biology
aliases: [RNA folding, RNA-Puzzles, nucleic acid structure prediction]
links:
  - https://en.wikipedia.org/wiki/Nucleic_acid_structure_prediction
  - https://doi.org/10.1002/prot.70072
  - https://predictioncenter.org/casp16/index.cgi
progress:
  - year: 2012
    by: [Eric Westhof, Rhiju Das, Janusz M. Bujnicki]
    what: "RNA-Puzzles began as a CASP-style blind evaluation of RNA 3D structure prediction, giving the field its first shared yardstick."
    link: https://doi.org/10.1261/rna.031054.111
  - year: 2023
    by: [Rhiju Das, Rachael C. Kretsch]
    what: "The first RNA category in CASP, in CASP15, drew 42 groups on 12 targets. Deep-learning entries scored significantly worse than the top groups, which used no deep learning."
    link: https://doi.org/10.1002/prot.26602
  - year: 2025
    by: [Rachael C. Kretsch, Andriy Kryshtafovych, Rhiju Das]
    with: [AlphaFold 3]
    what: "The CASP16 assessment found no previously unseen natural RNA predicted above TM-score 0.8 and no appreciable improvement over earlier rounds. The AlphaFold 3 server was outperformed by 8 groups overall."
    link: https://doi.org/10.1002/prot.70072
  - year: 2025
    by: [Rhiju Das, Youhan Lee, Shujun He]
    what: "In the Stanford RNA 3D Folding Kaggle round over 1,700 teams reached scores statistically tied with the CASP16 winners. The top strategy was a 3D template search with no deep learning, and a combined model, RNAPro, averaged TM-align 0.640 on the 20 private targets."
    link: https://www.biorxiv.org/content/10.64898/2025.12.30.696949v1
---
Predict an RNA's three-dimensional fold from its sequence as reliably as AlphaFold predicts a protein's. CASP scores entries by TM-score against the withheld experimental structure; in CASP16 (assessed 2025) no previously unseen natural RNA reached 0.8, and template search still matched deep learning. Solving it means median TM-score above 0.8 on blind, template-free natural RNAs.
