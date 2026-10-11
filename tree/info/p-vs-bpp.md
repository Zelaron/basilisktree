---
title: P vs BPP
status: open
importance: 70
grand: true
posed: 1977
requires: [hardness-vs-randomness, randomized-primality-testing]
field: complexity theory
aliases: ["P = BPP", derandomization]
links:
  - https://en.wikipedia.org/wiki/BPP_(complexity)
progress:
  - year: 1997
    by: [Russell Impagliazzo, Avi Wigderson]
    what: "P = BPP if some problem in E requires circuits of exponential size."
  - year: 2002
    by: [Manindra Agrawal, Neeraj Kayal, Nitin Saxena]
    what: "Primality testing, long the best-known problem in BPP not known to be in P, is in P."
  - year: 2003
    by: [Valentine Kabanets, Russell Impagliazzo]
    what: "Derandomizing polynomial identity testing would itself prove new circuit lower bounds."
---
Can every polynomial-time randomized algorithm with bounded error be made deterministic with only polynomial slowdown? Most theorists believe P = BPP, which follows from plausible circuit lower bounds (Impagliazzo and Wigderson, 1997), but a proof seems to need such lower bounds; polynomial identity testing is the main problem known to be in BPP and not known to be in P.
