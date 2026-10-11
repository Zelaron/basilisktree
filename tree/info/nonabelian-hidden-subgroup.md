---
title: Non-Abelian Hidden Subgroup Problem
status: open
importance: 50
posed: 1999
requires: [shor-algorithm, simon-algorithm, group-theory]
field: quantum algorithms
aliases: [hidden subgroup problem, dihedral HSP, symmetric group HSP]
links:
  - https://en.wikipedia.org/wiki/Hidden_subgroup_problem
progress:
  - year: 2002
    by: [Oded Regev]
    what: "Solving the dihedral hidden subgroup problem by coset sampling would solve the unique shortest vector problem on lattices."
    link: https://arxiv.org/abs/cs/0304005
  - year: 2003
    by: [Greg Kuperberg]
    what: "A subexponential 2^O(√log N) quantum algorithm for the dihedral group."
    link: https://arxiv.org/abs/quant-ph/0302112
  - year: 2004
    by: [Mark Ettinger, Peter Høyer, Emanuel Knill]
    what: "Polynomially many oracle queries suffice for every finite group, though processing them may take exponential time."
  - year: 2005
    by: [Cristopher Moore, Alexander Russell, Leonard Schulman]
    what: "Strong Fourier sampling cannot efficiently solve the symmetric-group case behind graph isomorphism."
    link: https://arxiv.org/abs/quant-ph/0501056
---
Shor's algorithm efficiently finds hidden subgroups of abelian groups; can quantum computers do the same for non-abelian groups? An efficient algorithm for dihedral groups would solve lattice problems behind post-quantum cryptography (Regev, 2002), and one for symmetric groups would solve graph isomorphism; the best dihedral algorithm is subexponential (Kuperberg, 2003).
