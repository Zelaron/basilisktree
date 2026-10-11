---
title: Predicting Smell from Structure
status: open
importance: 38
posed: 2015
requires: [qsar, deep-learning, drug-receptors]
field: neuroscience
aliases: [structure–odour relationship, principal odor map, DREAM olfaction challenge, odor prediction]
links:
  - https://en.wikipedia.org/wiki/Sense_of_smell
  - https://www.synapse.org/Synapse:syn64743570/wiki/634774
progress:
  - year: 2017
    by: [Andreas Keller, Leslie B. Vosshall, Pablo Meyer]
    what: "In the crowdsourced DREAM Olfaction Prediction Challenge (2015), models built on chemoinformatic features predicted the intensity and pleasantness of molecules and 8 of 19 semantic descriptors; regularized linear models did almost as well as random forests."
    link: https://doi.org/10.1126/science.aal2014
  - year: 2023
    by: [Brian K. Lee, Joel D. Mainland, Alexander B. Wiltschko]
    what: "A graph neural network learned a principal odor map. In a prospective test on new odorants rated by 15 trained panellists with a 55-word lexicon, its predicted profile was closer to the panel mean than the median panellist's for 53% of molecules."
    link: https://doi.org/10.1126/science.ade4401
  - year: 2025
    by: [Joel D. Mainland, Xuebo Song, Pablo Meyer]
    what: "The third DREAM olfaction challenge asked for 51-descriptor odour profiles of more than 650 mixtures of 2 to 10 molecules. The best entries reached a Pearson correlation of 0.79 with panel ratings, and 0.75 for single molecules at two concentrations."
    link: https://www.synapse.org/Synapse:syn64743570/wiki/634774
---
Predict how a molecule, or a mixture, will smell to people from chemical structure alone. A 2023 graph neural network matches a trained panel about as well as a typical panellist on single molecules; solving the problem means the same for mixtures and across concentrations. In the 2025 DREAM Olfaction Challenge, scored on Synapse by Pearson correlation with panel ratings on 51 descriptors, the best mixture models reached r = 0.79.
