---
title: Differential Flatness Test
status: open
importance: 33
posed: 1995
requires: [optimal-control, differential-geometry]
field: control
aliases: [flat systems, flat outputs, dynamic feedback linearization]
links:
  - https://en.wikipedia.org/wiki/Flatness_(systems_theory)
  - https://doi.org/10.1080/00207179508921959
progress:
  - year: 1989
    by: [Bernard Charlet, Jean Lévine, Riccardo Marino]
    what: "For single-input systems, linearization by dynamic feedback reduces to static feedback, so flatness is checkable there."
    link: https://doi.org/10.1016/0167-6911(89)90031-5
  - year: 2011
    by: [Jean Lévine]
    what: "A necessary and sufficient condition stated with polynomial matrices of differential operators; turning it into a finite test remains open."
    link: https://doi.org/10.1007/s00200-010-0137-x
  - year: 2021
    by: [Conrad Gstöttner, Bernd Kolar, Markus Schöberl]
    what: "A complete, finite test for two-input systems that can be linearized by a two-dimensional endogenous dynamic feedback."
    link: https://doi.org/10.1080/00207179.2021.2015542
---
A nonlinear control system is differentially flat when a few output functions determine all its states and inputs without integration, which turns trajectory planning into algebra (Fliess, Lévine, Martin and Rouchon, 1995). No general, checkable necessary and sufficient test for flatness is known; tests exist only for special classes such as single-input systems. Solving it means a finite, verifiable criterion for multi-input systems.
