---
title: Quantum PCP Conjecture
status: open
importance: 50
posed: 2002
requires: [pcp-theorem, nlts-theorem]
field: quantum complexity
aliases: [qPCP, quantum PCP]
links:
  - https://en.wikipedia.org/wiki/PCP_theorem
progress:
  - year: 2009
    by: [Dorit Aharonov, Itai Arad, Zeph Landau, Umesh Vazirani]
    what: "The detectability lemma and quantum gap amplification for Hamiltonians on expander interaction graphs."
    link: https://arxiv.org/abs/0811.3412
  - year: 2018
    by: [Anand Natarajan, Thomas Vidick]
    what: "Games version under randomized reductions: approximating the entangled value of nonlocal games is QMA-hard."
    link: https://arxiv.org/abs/1801.03821
  - year: 2022
    by: [Anurag Anshu, Nikolas Breuckmann, Chinmay Nirkhe]
    what: "Proved the NLTS conjecture: local Hamiltonians whose low-energy states all need superconstant-depth circuits."
    link: https://arxiv.org/abs/2206.13228
  - year: 2025
    by: [Thiago Bergamaschi, Tony Metger, Thomas Vidick, Tina Zhang]
    what: "A derandomized tensor-product gap amplification for Hamiltonians, modeled on Dinur's proof of the PCP theorem."
    link: https://arxiv.org/abs/2510.01333
---
Is it QMA-hard to approximate the ground energy of a local Hamiltonian to within a constant fraction of its number of terms? This quantum analogue of the PCP theorem, studied since the early 2000s, would mean even rough ground-state energies are hard for quantum computers; the NLTS theorem (2022) removed one obstacle, and a games version is known.
