---
title: Fixing DFT Delocalization Error
status: open
importance: 46
posed: 2008
requires: [density-functional-theory, hybrid-functionals]
field: quantum chemistry
aliases: [fractional-charge error, many-electron self-interaction error, DFT band-gap problem]
links:
  - https://en.wikipedia.org/wiki/Density_functional_theory
  - https://doi.org/10.1103/PhysRevLett.100.146401
progress:
  - year: 2018
    by: [Chen Li, Xiao Zheng, Neil Qiang Su, Weitao Yang]
    what: "The localized orbital scaling correction (LOSC) reduced delocalization error across common functionals, improving band gaps of molecules and polymer chains and photoemission spectra."
    link: https://doi.org/10.1093/nsr/nwx111
  - year: 2021
    by: [James Kirkpatrick, Aron J. Cohen]
    what: "DM21, a neural functional trained on chemical data and on fictitious systems with fractional charge and spin, fixed classic cases of spurious charge delocalization and beat traditional functionals on main-group benchmarks."
    link: https://doi.org/10.1126/science.abj6511
  - year: 2024
    by: [Heng Zhao, Tim Gould, Stefan Vuckovic]
    what: "Showed that DM21 does not extrapolate to transition-metal chemistry, where it often fails to converge, so the learned constraints do not yet transfer."
    link: https://doi.org/10.1039/D4CP00878B
  - year: 2026
    by: [Yichen Fan, Jincheng Yu, Jiayi Du, Weitao Yang]
    what: "Extended LOSC with orbital relaxation from linear response to larger molecules and transition-metal oxide complexes at about the cost of ordinary Kohn–Sham DFT (preprint)."
    link: https://arxiv.org/abs/2602.11003
---
Approximate density functionals over-delocalize electrons: their energy curves between integer electron numbers where the exact energy is piecewise linear, which shrinks band gaps and distorts charge-transfer and barrier energies (Mori-Sánchez, Cohen and Yang, 2008). A solution is a functional that obeys the fractional-charge and fractional-spin conditions for molecules and solids at about hybrid-DFT cost while staying accurate on benchmarks.
