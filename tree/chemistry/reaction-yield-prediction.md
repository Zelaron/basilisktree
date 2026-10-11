---
title: Reaction Yield Prediction
status: open
importance: 38
posed: 2018
requires: [ai-retrosynthesis, qsar]
field: AI for chemistry
aliases: [yield prediction, reaction outcome prediction]
links:
  - https://en.wikipedia.org/wiki/Yield_(chemistry)
  - https://doi.org/10.1126/science.aar5169
progress:
  - year: 2018
    by: [Derek T. Ahneman, Jesús G. Estrada, Shishi Lin, Spencer D. Dreher, Abigail Doyle]
    what: "A random forest trained on a high-throughput screen of thousands of palladium-catalysed C–N couplings predicted the yields of held-out reactions."
    link: https://doi.org/10.1126/science.aar5169
  - year: 2018
    by: [Kangway V. Chuang, Michael J. Keiser]
    what: "Showed that models fed random-valued features performed comparably on that screen, so its design could not show that chemistry had been learned."
    link: https://doi.org/10.1126/science.aat8603
  - year: 2021
    by: [Philippe Schwaller, Alain C. Vaucher, Teodoro Laino, Jean-Louis Reymond]
    what: "A transformer reading reaction SMILES predicted yields in two high-throughput datasets well, but patent yields from USPTO varied systematically with reaction scale, limiting their use for training."
    link: https://doi.org/10.1088/2632-2153/abc81d
  - year: 2023
    by: [Zhen Liu, Yurii S. Moroz, Olexandr Isayev]
    what: "On 41,239 literature amide couplings the best of many models reached R² of only 0.395, against about 0.9 on a high-throughput set."
    link: https://doi.org/10.1039/D3SC03902A
---
Predict the yield of a reaction that has never been run from its reactants, reagents, catalyst and conditions. Machine-learning models do well inside high-throughput screens such as a 2018 C–N coupling set, but reached R² of only about 0.4 on 41,239 literature amide couplings (2023). A solution is a model whose prospective predictions for new substrates and reaction classes fall within about 10 percentage points of measured yields.
