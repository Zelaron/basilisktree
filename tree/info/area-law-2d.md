---
title: "2D Area Law"
status: claimed
importance: 45
posed: 2007
requires: [quantum-mechanics, epr-entanglement, quantum-simulation]
by: [OpenAI]
with: [OpenAI internal model]
field: quantum information
aliases: [entanglement area law, area law in two dimensions]
links:
  - https://en.wikipedia.org/wiki/Entropy_of_entanglement
  - https://arxiv.org/abs/0705.2024
progress:
  - year: 2007
    by: [Matthew Hastings]
    what: "An area law for gapped one-dimensional systems, implying matrix product state approximations."
    link: https://arxiv.org/abs/0705.2024
  - year: 2013
    by: [Itai Arad, Alexei Kitaev, Zeph Landau, Umesh Vazirani]
    what: "An exponentially better one-dimensional bound, entropy O(log³ d/ε)."
    link: https://arxiv.org/abs/1301.1162
  - year: 2013
    by: [Zeph Landau, Umesh Vazirani, Thomas Vidick]
    what: "A polynomial-time algorithm for ground states of gapped one-dimensional Hamiltonians."
    link: https://arxiv.org/abs/1307.5143
  - year: 2022
    by: [Anurag Anshu, Itai Arad, David Gosset]
    what: "An area law for locally gapped frustration-free 2D spin systems across vertical cuts."
    link: https://arxiv.org/abs/2103.02492
  - year: 2026
    by: [OpenAI]
    with: [OpenAI internal model]
    what: "Claimed area law for unique ground states of gapped finite-range Hamiltonians on finite square-lattice domains, assuming only a uniform spectral gap, plus PEPS approximations with polynomial bond dimension (family 265 of OpenAI’s math release, not formalized). Not yet independently reviewed."
    link: https://github.com/openai/math
---
Do ground states of gapped local Hamiltonians on two-dimensional lattices obey an area law, with the entanglement entropy of a region bounded by the size of its boundary? Hastings proved the one-dimensional case in 2007, which makes 1D ground states classically tractable; in 2D it is known only for special classes such as frustration-free systems (2022). OpenAI’s October 2026 release claims a proof for square-lattice domains.
