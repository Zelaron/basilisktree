---
title: Aaronson–Ambainis Conjecture
status: open
importance: 40
posed: 2009
requires: [bqp, fourier-analysis]
field: quantum complexity
aliases: [need for structure in quantum speedups, influential variable conjecture]
links:
  - https://arxiv.org/abs/0911.0996
  - https://scottaaronson.blog/?p=10062
progress:
  - year: 2022
    by: [Nikhil Bansal, Makrand Sinha, Ronald de Wolf]
    what: "Proved the influence statement for completely bounded block-multilinear forms."
    link: https://arxiv.org/abs/2203.00212
  - year: 2026
    by: [Guy Blanc, Jordan Docter, Carmen Strassle, Li-Yang Tan]
    what: "The quantum-algorithm version holds for parallel algorithms: a t-query, d-round algorithm can be simulated on most inputs with t^O(d²) classical queries."
    link: https://arxiv.org/abs/2608.19158
  - year: 2026
    by: [Qipeng Liu, Saachi Mutreja]
    with: [ChatGPT 5.5 Pro]
    what: "Independently proved it for massively parallel quantum query algorithms and for constant rounds of adaptivity; the authors report that ChatGPT 5.5 Pro assisted with the proofs."
    link: https://arxiv.org/abs/2608.20297
---
Aaronson and Ambainis conjectured in 2009 that every bounded low-degree polynomial on the Boolean cube has a variable whose influence is at least inverse-polynomial in the degree. It would imply that any quantum query algorithm can be simulated classically on most inputs with polynomially more queries, so exponential quantum speedups need structured inputs.
