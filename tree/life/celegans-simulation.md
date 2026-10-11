---
title: Simulating C. elegans
status: open
importance: 42
posed: 1998
requires: [celegans-lineage, connectomics, hodgkin-huxley]
field: neuroscience
aliases: [OpenWorm, worm emulation, BAAIWorm, whole-animal simulation]
links:
  - https://en.wikipedia.org/wiki/OpenWorm
  - https://doi.org/10.1038/s43588-024-00738-w
progress:
  - year: 2018
    by: [Gopal P. Sarma, Stephen D. Larson]
    what: "OpenWorm's c302 neuron models drive its Sibernetic soft-body simulation through muscle activation, with no sensory feedback yet; the team judged the level of detail still inadequate for biological research."
    link: https://doi.org/10.1098/rstb.2017.0382
  - year: 2023
    by: [Francesco Randi, Andrew M. Leifer]
    what: "A signal propagation atlas measured 23,433 neuron pairs by optogenetic activation and whole-brain calcium imaging, and found that signals spread differently from anatomy-based predictions, partly through extrasynaptic signalling."
    link: https://doi.org/10.1038/s41586-023-06683-4
  - year: 2024
    by: [Mengdi Zhao, Ning Wang, Lei Ma]
    what: "BAAIWorm coupled 136 multi-compartment neuron models to a 96-muscle body in a 3D environment, in closed loop, and reproduced the worm's zigzag approach to an attractant."
    link: https://doi.org/10.1038/s43588-024-00738-w
  - year: 2024
    by: [Matthew S. Creamer, Andrew M. Leifer, Jonathan Pillow]
    what: "A connectome-constrained dynamical model fitted to that atlas captured causal interactions between all neuron pairs 82% as well as the data's own reproducibility, far better than models built on shuffled connectomes (preprint, revised 2026)."
    link: https://doi.org/10.1101/2024.09.22.614271
---
Simulate the nematode C. elegans, with its 302 mapped neurons, muscles and body, well enough that it behaves like the real worm. The goal dates from the Perfect C. elegans Project (1998) and OpenWorm (2011); success means a model that predicts held-out whole-brain activity and responses to optogenetic perturbation, and whose behaviour experts cannot tell from a real worm's. A 2024 closed-loop brain and body model covers 136 of the neurons.
