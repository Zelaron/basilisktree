---
title: Aqueous Solubility Prediction
status: open
importance: 35
posed: 2008
requires: [qsar, chemical-thermodynamics]
field: cheminformatics
aliases: [Solubility Challenge, intrinsic solubility prediction]
links:
  - https://en.wikipedia.org/wiki/Solubility
  - https://doi.org/10.1021/acs.jcim.0c00701
progress:
  - year: 2008
    by: [Antonio Llinàs, Robert C. Glen, Jonathan M. Goodman]
    what: "The first Solubility Challenge asked for the intrinsic solubilities of 32 drug-like molecules, given 100 high-precision measurements for training."
    link: https://doi.org/10.1021/ci800058v
  - year: 2020
    by: [Antonio Llinàs, Ioana Oprisiu, Alex Avdeef]
    what: "Reported the 2019 Second Solubility Challenge on 132 drug-like molecules, scored on a tight set whose measurements agree to about 0.17 log units and a loose set with about 0.62 log units of scatter."
    link: https://doi.org/10.1021/acs.jcim.0c00701
  - year: 2023
    by: [Jonathan G. M. Conn, Ola Engkvist, Antonio Llinàs, David S. Palmer]
    what: "A post hoc study with larger training sets found that the best model on the challenge data, a graph convolutional network, still had an error of 0.86 log units."
    link: https://doi.org/10.1021/acs.jcim.2c01189
---
Predict how much of a new drug-like compound dissolves in water, its intrinsic solubility, from its structure alone. Careful shake-flask measurements agree to about 0.2 log units, yet the best models on the 2008 and 2019 Solubility Challenges err by several times that. A solution is a model whose blind predictions for a new set of drug-like compounds reach a root-mean-square error of 0.5 log units or better.
