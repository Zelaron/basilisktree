---
title: Whole-Cell Model of E. coli
status: open
importance: 46
posed: 2012
requires: [flux-balance-analysis, minimal-cell-4d, operon]
field: systems biology
aliases: [wcEcoli, vEcoli, whole-cell model]
links:
  - https://en.wikipedia.org/wiki/Systems_biology
  - https://doi.org/10.1126/science.aav3751
  - https://github.com/CovertLab/vEcoli
progress:
  - year: 2020
    by: [Derek N. Macklin, Markus W. Covert]
    what: "A mechanistic model of 1,219 E. coli genes was used to cross-evaluate decades of measurements, exposing inconsistencies in ribosome and RNA polymerase output and in metabolic parameters, and predicting protein half-lives that were then measured."
    link: https://doi.org/10.1126/science.aav3751
  - year: 2024
    by: [Gwanggyu Sun, Markus W. Covert]
    what: "Adding 788 polycistronic operons and 1,231 transcription units to the model exposed conflicts with the RNA-seq counts it had been fitted to, including short genes misreported as zero, which were corrected in both model and data."
    link: https://doi.org/10.1016/j.cels.2024.02.002
  - year: 2025
    by: [Ioana M. Gherman, Lucia Marucci]
    what: "A machine-learning surrogate trained on model output cut the cost of a run by 95% and was used to design EMine-737, an in silico E. coli keeping 737 of the model's 1,219 genes."
    link: https://doi.org/10.1016/j.cels.2025.101392
---
A whole-cell model simulates every gene and molecule of a cell; the first, for Mycoplasma genitalium, appeared in 2012. Escherichia coli is the harder test case, and the public Covert lab model covers 1,219 genes (Science, 2020). Solving it means one parameter set that reproduces growth across media and genetic backgrounds and predicts knockouts it was not fitted to.
