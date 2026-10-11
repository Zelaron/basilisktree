---
title: Capacity of Optical Fibre
status: open
importance: 42
posed: 2001
requires: [optical-fibre, information-theory, edfa, nonlinear-optics]
field: telecom
aliases: [nonlinear Shannon limit, fiber channel capacity, optical fiber capacity]
links:
  - https://en.wikipedia.org/wiki/Optical_fiber
  - https://arxiv.org/abs/1503.07652
progress:
  - year: 2001
    by: [Partha Mitra, Jason Stark]
    what: "Capacity estimates for nonlinear fibre peak and then fall as signal power rises, suggesting a nonlinear limit."
    link: https://doi.org/10.1038/35082518
  - year: 2003
    by: [Konstantin Turitsyn, Stanislav Derevyanko, Igor Yurkevich, Sergei Turitsyn]
    what: "A closed-form lower bound on capacity, at any signal-to-noise ratio, for links with zero average dispersion."
    link: https://doi.org/10.1103/PhysRevLett.91.203901
  - year: 2010
    by: [René-Jean Essiambre, Gerhard Kramer, Peter J. Winzer, Gerard J. Foschini, Bernhard Goebel]
    what: "Systematic capacity-limit estimates for optically routed networks, the reference curves of the nonlinear limit."
    link: https://doi.org/10.1109/JLT.2009.2039464
  - year: 2015
    by: [Gerhard Kramer, Mansoor I. Yousefi, Frank R. Kschischang]
    what: "Spectral efficiency is at most log(1 + SNR) for a cascade model of the nonlinear Schrödinger channel, an upper bound that grows without limit."
    link: https://arxiv.org/abs/1503.07652
---
What is the Shannon capacity of a long amplified optical fibre, where the Kerr effect makes the signal interfere with itself and with amplifier noise? Achievable-rate estimates (Mitra and Stark 2001; Essiambre et al. 2010) peak and then fall as launch power grows, while the best upper bound, log(1 + SNR), keeps rising (2015). Solving it means closing that gap, or at least deciding whether capacity stays bounded as power grows.
