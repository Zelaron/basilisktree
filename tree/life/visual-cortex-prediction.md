---
title: Predicting Visual Cortex Responses
status: open
importance: 40
posed: 2005
requires: [hubel-wiesel, two-photon-imaging, deep-learning]
field: neuroscience
aliases: [Sensorium, neural encoding model, digital twin of visual cortex, V1 response prediction]
links:
  - https://en.wikipedia.org/wiki/Visual_cortex
  - https://sensorium-competition.net/
  - https://doi.org/10.1038/s41586-025-08829-y
progress:
  - year: 2014
    by: [Daniel Yamins, James DiCarlo]
    what: "A deep network trained only to recognise objects turned out to predict single-site responses of macaque V4 and inferior temporal cortex to natural images."
    link: https://doi.org/10.1073/pnas.1403112111
  - year: 2023
    by: [Polina Turishcheva, Fabian H. Sinz, Alexander S. Ecker]
    what: "The Sensorium 2023 benchmark released responses of 78,853 neurons in mouse primary visual cortex to videos; of 22 teams, the winner reached a single-trial correlation of 0.291 against 0.197 for the best baseline."
    link: https://arxiv.org/abs/2407.09100
  - year: 2025
    by: [Eric Y. Wang, Andreas S. Tolias]
    what: "A foundation model trained on many mice predicted responses to new natural videos with median normalized correlation 0.58 to 0.76, generalized to new mice and stimulus types, and predicted cell types and connectivity in the MICrONS data."
    link: https://doi.org/10.1038/s41586-025-08829-y
---
Predict how every neuron in visual cortex responds to any natural image or movie, the test Carandini and colleagues set in 2005 for knowing what the early visual system does. Success means reaching the trial-to-trial noise ceiling on new stimuli and new animals. A 2025 mouse model reaches median normalized correlation 0.58 to 0.76, and the Sensorium 2023 winner a single-trial correlation of 0.29; results are posted at sensorium-competition.net.
