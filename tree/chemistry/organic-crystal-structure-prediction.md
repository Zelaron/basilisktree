---
title: Organic Crystal Structure Prediction
status: open
importance: 44
posed: 1988
requires: [crystal-databases, force-fields, density-functional-theory]
field: computational chemistry
aliases: [CSP blind test, polymorph prediction]
links:
  - https://en.wikipedia.org/wiki/Crystal_structure_prediction
  - https://doi.org/10.1107/S2052520624007492
progress:
  - year: 2008
    by: [Marcus A. Neumann, Frank J. J. Leusen, John Kendrick]
    what: "Ranking with dispersion-corrected DFT predicted the structures of all four targets in the 2007 blind test."
    link: https://doi.org/10.1002/anie.200704247
  - year: 2016
    by: [Anthony M. Reilly, Richard I. Cooper, Claire S. Adjiman, Colin R. Groom]
    what: "In the sixth blind test every target, apart from one possibly disordered polymorph, was predicted by at least one submission."
    link: https://doi.org/10.1107/S2052520616007447
  - year: 2024
    by: [Lily M. Hunnisett, Jonas Nyman, Jason C. Cole]
    what: "In the seventh blind test many methods found the observed forms of a small flexible agrochemical, few succeeded on the more complex salt, cocrystal and metal-complex targets, and two groups blindly predicted disorder for the first time."
    link: https://doi.org/10.1107/S2052520624007492
  - year: 2025
    by: [Emily Jin, Michael Bronstein, Alexander Tong, Cheng-Hao Liu]
    what: "OXtal, a diffusion model trained on 600,000 experimental crystal structures, recovered known structures with over 80% packing similarity at far lower cost than quantum-chemical searches (preprint)."
    link: https://arxiv.org/abs/2512.06987
---
Predict, from the molecular diagram alone, which crystal structures and polymorphs a compound will adopt, with the observed form ranked most stable; John Maddox called the failure to do this a scandal in 1988. In the Cambridge Crystallographic Data Centre's seventh blind test (2024), few groups succeeded on salts, cocrystals and complexes. A solution reliably finds and top-ranks the observed forms in such blind tests.
