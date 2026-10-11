---
title: Crystallization Conjecture
status: open
importance: 48
posed: 1984
requires: [statistical-mechanics, x-ray-crystallography]
field: mathematical physics
aliases: [existence of crystals, crystallization problem]
links:
  - https://en.wikipedia.org/wiki/Simon_problems
  - https://arxiv.org/abs/1504.01153
progress:
  - year: 1980
    by: [Raymond Heitmann, Charles Radin]
    what: "Ground states of 'sticky disks' in the plane are pieces of the triangular lattice, an early rigorous crystallization result."
    link: https://doi.org/10.1007/BF01014644
  - year: 2006
    by: [Florian Theil]
    what: "Crystallization in two dimensions for a class of short-range Lennard-Jones-type potentials: energy minimizers converge to the triangular lattice."
    link: https://doi.org/10.1007/s00220-005-1458-7
  - year: 2019
    by: [Henry Cohn, Abhinav Kumar, Stephen D. Miller, Danylo Radchenko, Maryna Viazovska]
    what: "The E8 and Leech lattices are universally optimal: they minimize energy for every completely monotone potential of squared distance in dimensions 8 and 24 (Annals 2022)."
    link: https://arxiv.org/abs/1902.05438
  - year: 2026
    by: [OpenAI]
    with: [OpenAI internal model, Lean 4]
    what: "Claimed proof that the triangular lattice is universally optimal in the plane, minimizing energy for every completely monotone potential of squared distance (family 090 of OpenAI's math release, formalized in Lean). Not yet independently reviewed."
    link: https://github.com/openai/math
---
Why do crystals exist? The crystallization conjecture asks for a proof that many particles with realistic interactions arrange themselves periodically at low temperature; it is problem 11 on Barry Simon's 1984 list. Proofs exist only for special interactions, mostly in two dimensions (Theil, 2006) and in dimensions 8 and 24 (2019); periodic ground states for a Lennard-Jones-type potential in three dimensions remain the classic target.
