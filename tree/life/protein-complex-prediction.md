---
title: Predicting Protein Complexes
status: open
importance: 48
posed: 2001
requires: [alphafold3, cryo-em-revolution]
field: computational biology
aliases: [protein docking, CAPRI, AlphaFold-Multimer, interactome prediction]
links:
  - https://en.wikipedia.org/wiki/Protein%E2%80%93protein_interaction_prediction
  - https://predictioncenter.org/casp16/
  - https://pmc.ncbi.nlm.nih.gov/articles/PMC12750043/
progress:
  - year: 2021
    by: [Google DeepMind]
    with: [AlphaFold-Multimer]
    what: "AlphaFold-Multimer predicted the interface of a heteromeric complex at DockQ 0.23 or better in 67% of cases and reached high accuracy, DockQ 0.8 or better, in 23%."
    link: https://www.biorxiv.org/content/10.1101/2021.10.04.463034v1
  - year: 2025
    by: [Jing Zhang, Andriy Kryshtafovych, Qian Cong]
    what: "The CASP16 assembly assessment covered 40 blind targets and about 13,600 models from 87 groups. Leading groups reached high accuracy on slightly more than half of the targets, about half of targets stayed below DockQ 0.5 for most groups, and top groups predicted stoichiometry correctly for over 70%."
    link: https://pmc.ncbi.nlm.nih.gov/articles/PMC12750043/
  - year: 2026
    by: [Luke Lambourne, Jean-Claude Twizere, Marc Vidal]
    with: [AlphaFold]
    what: "An experimental audit in yeast and human found that high-confidence predictions match experimental quality, but that proteome-wide AI screens underperform at finding genuinely new interactions: the yeast experimental map reported over 40-fold more novel interactions than its AI counterpart."
    link: https://doi.org/10.1038/s41467-026-70942-x
---
Given a set of protein sequences, predict whether they assemble, with what stoichiometry, and what the complex looks like. CASP scores blind assembly targets with DockQ, and in CASP16, assessed in 2025, the leading groups reached high accuracy on only slightly more than half of 40 targets. Solving it means high-accuracy models for most blind targets, scored at predictioncenter.org.
