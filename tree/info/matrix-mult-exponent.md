---
title: Matrix Multiplication Exponent
status: open
importance: 70
grand: true
posed: 1969
requires: [fast-matrix-multiplication]
aliases: [omega, "ω = 2"]
links:
  - https://en.wikipedia.org/wiki/Matrix_multiplication_algorithm
progress:
  - year: 1969
    by: [Volker Strassen]
    what: "ω < 2.81"
  - year: 1990
    by: [Don Coppersmith, Shmuel Winograd]
    what: "ω < 2.376"
  - year: 2024
    by: [Josh Alman, Ran Duan, Virginia Vassilevska Williams, Yinzhan Xu, Zixuan Xu, Renfei Zhou]
    what: "ω < 2.371339, by making the laser method asymmetric."
    link: https://arxiv.org/abs/2404.16349
  - year: 2026
    by: [Emilien Dupont, Marvin Eisenberger, Borislav Kozlovskii, Abbas Mehrabian, Francisco J. R. Ruiz]
    with: [AlphaEvolve]
    what: "AlphaEvolve-assisted numerical optimization, combined with the asymmetric laser method, gives ω < 2.371177."
    link: https://arxiv.org/abs/2608.16884
---
Can two n × n matrices be multiplied in about n² steps? The exponent ω is known to be below 2.3712 and is conjectured to be exactly 2.
