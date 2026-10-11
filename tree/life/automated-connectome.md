---
title: Proofreading-Free Connectomics
status: open
importance: 46
posed: 2010
requires: [flywire-connectome, microns-cortex, deep-learning]
field: neuroscience
aliases: [automated neuron reconstruction, EM segmentation, connectome proofreading, mouse connectome]
links:
  - https://en.wikipedia.org/wiki/Connectomics
  - https://doi.org/10.1038/s41586-024-07558-y
progress:
  - year: 2018
    by: [Michał Januszewski, Viren Jain]
    what: "Flood-filling networks traced neurons in a zebra finch brain volume with a mean error-free path length of 1.1 mm, an order of magnitude better than earlier methods, at much higher computing cost."
    link: https://doi.org/10.1038/s41592-018-0049-4
  - year: 2024
    by: [Sven Dorkenwald, Sebastian Seung, Mala Murthy]
    what: "The FlyWire connectome of a whole adult fly brain (139,255 neurons, about 50 million synapses) still needed about 33 person-years of manual proofreading on top of automated segmentation."
    link: https://doi.org/10.1038/s41586-024-07558-y
  - year: 2025
    by: [Michał Januszewski, Harald Hess]
    what: "PATHFINDER, an AI system that assembles neuron fragments and scores whether the resulting shapes are plausible, cut axon reconstruction errors in a mouse cortex volume about tenfold; its authors estimate up to 84 times faster proofreading for a whole mouse brain (preprint)."
    link: https://doi.org/10.1101/2025.05.16.654254
  - year: 2025
    by: [Jeff Brown, Edward Boyden]
    what: "ConnectomeBench tested multimodal language models on proofreading tasks from fly and mouse connectomes: they scored 75 to 85% on split-error correction (chance 50%) but generally struggled to identify merge errors, and the best still trail human experts."
    link: https://arxiv.org/abs/2511.05542
---
Reconstruct every neuron and synapse in a brain electron-microscopy volume automatically, with no human proofreading. In 2010 Jain, Seung and Turaga called further cuts in human effort crucial for any connectome larger than the worm's. Success means automated wiring diagrams as accurate as proofread ones; the fly brain (FlyWire, 2024) took about 33 person-years of proofreading, and brain plus nerve cord (BANC, 2026) about 38.6.
