---
title: Inorganic Synthesis Planning
status: open
importance: 42
posed: 2019
requires: [materials-project, powder-diffraction]
field: AI for chemistry
aliases: [solid-state synthesis prediction, precursor recommendation]
links:
  - https://en.wikipedia.org/wiki/Solid-state_chemistry
  - https://doi.org/10.1038/s41597-019-0224-1
progress:
  - year: 2019
    by: [Olga Kononova, Haoyan Huo, Tanjin He, Gerbrand Ceder]
    what: "Text-mined 19,488 solid-state synthesis recipes from 53,538 literature paragraphs into an open dataset."
    link: https://doi.org/10.1038/s41597-019-0224-1
  - year: 2023
    by: [Tanjin He, Haoyan Huo, Christopher J. Bartel, Gerbrand Ceder]
    what: "A recommender that learns material similarity from 29,900 text-mined recipes proposed precursors for 2,654 held-out targets, with at least 82% matching a reported route among its top five suggestions."
    link: https://doi.org/10.1126/sciadv.adg8180
  - year: 2023
    by: [Nathan J. Szymanski, Gerbrand Ceder]
    what: "The A-Lab, an autonomous robotic lab, planned recipes with literature-trained models and active learning and reported making 41 of 58 computed targets in 17 days; the paper's current version gives 36 of 57."
    link: https://doi.org/10.1038/s41586-023-06734-w
  - year: 2024
    by: [Josh Leeman, Leslie Schoop, Robert G. Palgrave]
    what: "Re-analysed the A-Lab's diffraction data and argued that none of the claimed new materials was new, two thirds being likely known disordered versions of the targets, so automated phase identification is not yet reliable."
    link: https://doi.org/10.1103/PRXEnergy.3.011002
---
Given a target inorganic compound, predict the precursors, temperatures and atmosphere that make it phase-pure on the first attempt, the step that limits turning computed materials into real ones. Text-mined recipes (2019) and robotic labs such as the A-Lab (2023) help, but a 2024 re-analysis showed that even recognizing success is hard. A solution makes most of a blind set of new computed targets phase-pure, confirmed by diffraction.
