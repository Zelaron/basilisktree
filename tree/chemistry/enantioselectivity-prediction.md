---
title: Predicting Enantioselectivity
status: open
importance: 35
posed: 2019
requires: [asymmetric-catalysis, qsar]
field: catalysis
aliases: [ee prediction, selectivity modelling in asymmetric catalysis]
links:
  - https://en.wikipedia.org/wiki/Enantioselective_synthesis
  - https://doi.org/10.1126/science.aau5631
progress:
  - year: 2019
    by: [Andrew F. Zahrt, Jeremy J. Henle, Brennan T. Rose, Scott E. Denmark]
    what: "Modelled more than 800 chiral phosphoric acid catalysts and, training on a subset of experiments, accurately predicted which would be more selective in an imine–thiol coupling."
    link: https://doi.org/10.1126/science.aau5631
  - year: 2019
    by: [Jolene P. Reid, Matthew Sigman]
    what: "One statistical model built from 367 reactions in 17 papers predicted selectivities of chiral phosphoric acid-catalysed additions to imines for catalysts and substrates outside its training set."
    link: https://doi.org/10.1038/s41586-019-1384-z
  - year: 2025
    by: [Ajnabiul Hoque, Taiwei Chang, Jin-Quan Yu, Raghavan B. Sunoj]
    what: "An ensemble of chemical language models fine-tuned on 220 examples of an asymmetric C(sp3)–H activation predicted ee for new ligands, and most wet-lab tests agreed."
    link: https://doi.org/10.1039/D5SC01098E
  - year: 2025
    by: [Blake E. Ocampo, Bilal Altundas, Scott E. Denmark]
    what: "Models trained on 1,007 literature Sharpless dihydroxylations predicted selectivity across alkene classes with mean errors of at most 0.3 kcal/mol and were validated on new alkenes."
    link: https://doi.org/10.1021/acscentsci.5c00900
---
Predict, before any experiment, which mirror-image product a new chiral catalyst will favour and by how much. Data-driven models since 2019 reach errors near 0.3 kcal/mol within single, well-sampled reaction families such as the Sharpless dihydroxylation (2025), but do not transfer to new reaction classes. A solution makes prospective predictions for unseen catalysts and reaction types within about 0.3 kcal/mol of measured selectivities.
