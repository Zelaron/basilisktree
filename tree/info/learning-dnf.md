---
title: Learning DNF Formulas
status: open
importance: 42
posed: 1984
requires: [pac-learning]
field: learning theory
aliases: [PAC learning DNF, DNF learnability]
links:
  - https://en.wikipedia.org/wiki/Probably_approximately_correct_learning
  - https://doi.org/10.1016/j.jcss.2003.07.007
progress:
  - year: 1997
    by: [Jeffrey C. Jackson]
    what: "Polynomial-time learning with membership queries under the uniform distribution (the Harmonic Sieve)."
  - year: 2001
    by: [Adam Klivans, Rocco Servedio]
    what: "PAC learning from random examples in 2^Õ(n^(1/3)) time, via polynomial threshold functions."
    link: https://doi.org/10.1016/j.jcss.2003.07.007
  - year: 2014
    by: [Amit Daniely, Shai Shalev-Shwartz]
    what: "Learning DNF is hard if refuting random K-SAT formulas is hard."
    link: https://arxiv.org/abs/1404.3378
---
Valiant asked in 1984 whether polynomial-size DNF formulas can be learned in polynomial time from random labeled examples. The fastest known algorithm takes 2^Õ(n^(1/3)) time (Klivans and Servedio, 2001); with membership queries under the uniform distribution it is polynomial (Jackson, 1997), and hardness is known only under average-case assumptions.
