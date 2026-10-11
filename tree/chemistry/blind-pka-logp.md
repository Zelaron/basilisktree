---
title: Blind pKa and logP Prediction
status: open
importance: 30
posed: 2017
requires: [qsar, acid-base-theory]
field: computational chemistry
aliases: [SAMPL challenges, partition coefficient prediction]
links:
  - https://en.wikipedia.org/wiki/Acid_dissociation_constant
  - https://doi.org/10.1007/s10822-020-00295-0
progress:
  - year: 2020
    by: [Mehtap Işık, Teresa Danielle Bergazin, John D. Chodera, David L. Mobley]
    what: "In the SAMPL6 logP challenge, 91 blind prediction methods were scored on 11 small molecules; 10 of them reached a root-mean-square error below 0.5 log units."
    link: https://doi.org/10.1007/s10822-020-00295-0
  - year: 2025
    by: [Robert Fraczkiewicz]
    what: "A thermodynamics-informed neural network ranked first overall for blind microscopic and macroscopic pKa predictions of 35 compounds in the 2024 euroSAMPL1 challenge."
    link: https://doi.org/10.1039/D5CP00165J
---
Predict the acidity constants (pKa) and octanol–water partition coefficients (logP) of new drug-like molecules before the measurements are revealed, including tautomers and multiple ionizable groups. In blind SAMPL challenges since 2017 only a few methods have reached logP errors near 0.5 log units on small test sets. A solution is a method that predicts a new blind set within about 0.5 pKa units and 0.3 logP units.
