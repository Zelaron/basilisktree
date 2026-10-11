---
title: Kagome Antiferromagnet Ground State
status: open
importance: 38
requires: [quantum-spin-liquid]
field: condensed matter
aliases: [kagome Heisenberg antiferromagnet, kagome spin liquid, Dirac spin liquid]
links:
  - https://en.wikipedia.org/wiki/Quantum_spin_liquid
progress:
  - year: 2011
    by: [Simeng Yan, David A. Huse, Steven R. White]
    with: [DMRG]
    what: "DMRG on wide cylinders found a gapped spin liquid, consistent with Z2 topological order."
    link: https://doi.org/10.1126/science.1201080
  - year: 2017
    by: [Yin-Chen He, Michael P. Zaletel, Masaki Oshikawa, Frank Pollmann]
    with: [DMRG]
    what: "DMRG with flux insertion found signatures of Dirac cones, favouring a gapless U(1) Dirac spin liquid."
    link: https://doi.org/10.1103/PhysRevX.7.031020
  - year: 2017
    by: [H. J. Liao, Z. Y. Xie, J. Chen, Z. Y. Liu, H. D. Xie, R. Z. Huang, B. Normand, T. Xiang]
    with: [tensor networks]
    what: "Tensor-network calculations directly in the infinite plane also found a gapless spin liquid."
    link: https://doi.org/10.1103/PhysRevLett.118.137202
  - year: 2024
    by: [Tanja Duric, Jia Hui Chung, Bo Yang, Pinaki Sengupta]
    with: [neural networks]
    what: "A machine-learning study claimed a spinon pair-density-wave ground state (PRX 2025); a 2026 comment by Kamal, Kufel, Vu, Laumann and Yao disputes it."
    link: https://arxiv.org/abs/2401.02866
---
Is the ground state of the spin-1/2 Heisenberg antiferromagnet on the kagome lattice a gapped Z2 spin liquid or a gapless Dirac spin liquid? DMRG first favoured a gap (2011), while later DMRG and tensor-network studies favour Dirac cones (2017). It is a benchmark for numerical methods, including neural networks, and kagome materials such as herbertsmithite let experiments weigh in.
