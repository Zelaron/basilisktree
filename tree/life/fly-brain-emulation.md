---
title: Fly Brain Emulation
status: open
importance: 48
posed: 2024
requires: [flywire-connectome, hodgkin-huxley, deep-learning]
field: neuroscience
aliases: [Drosophila brain model, embodied fly, connectome-constrained model, NeuroMechFly]
links:
  - https://en.wikipedia.org/wiki/Drosophila_connectome
  - https://doi.org/10.1038/s41586-024-07763-9
progress:
  - year: 2024
    by: [Janne K. Lappalainen, Jakob H. Macke, Srinivas C. Turaga]
    what: "A model of 64 cell types in the fly's visual motion pathway, given only the connectome and trained to detect motion, predicted neural activity that matched measurements from 26 experimental studies."
    link: https://doi.org/10.1038/s41586-024-07939-3
  - year: 2024
    by: [Philip K. Shiu, Gabriella R. Sterne, Kristin Scott]
    what: "A leaky integrate-and-fire model of the whole central brain (over 125,000 neurons and 50 million synapses), built from connectivity and predicted neurotransmitters, picked out feeding and grooming circuit neurons, with predictions confirmed by optogenetic and behavioural tests."
    link: https://doi.org/10.1038/s41586-024-07763-9
  - year: 2026
    by: [Eon Systems]
    what: "Eon Systems wired that brain model to the NeuroMechFly v2 body through a few hand-chosen descending neurons, with no nerve cord, to show grooming, feeding and navigation to food; it conceded that the behaviours lean heavily on the body's existing controllers and reported no quantitative comparison with real flies."
    link: https://eon.systems/updates/embodied-brain-emulation
  - year: 2026
    by: [Alexander S. Bates, Rachel Wilson, Wei-Chung Allen Lee]
    what: "The BANC connectome mapped an adult fly's brain and ventral nerve cord in one volume (about 160,000 neurons), supplying the descending and ascending pathways between brain and body that a full emulation needs."
    link: https://doi.org/10.1038/s41586-026-10735-w
---
Run the adult fruit-fly connectome, mapped in 2024, as a working brain. Success means a connectome-based model of brain and nerve cord that predicts held-out neural recordings and responses to new optogenetic perturbations, and drives a simulated body to behave as real flies do. A 2024 model of the whole central brain predicts feeding and grooming circuits; a connectome of brain and nerve cord together followed in 2026.
