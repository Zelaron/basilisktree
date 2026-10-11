---
title: Parity in QAC⁰
status: claimed
importance: 40
posed: 1999
requires: [parity-not-in-ac0, bqp]
by: [OpenAI]
with: [OpenAI internal model, Lean 4]
field: quantum complexity
aliases: [QAC0 parity, Moore's parity conjecture, constant-depth quantum circuits]
links:
  - https://arxiv.org/abs/quant-ph/9903046
  - https://github.com/openai/math
progress:
  - year: 2024
    by: [Shivam Nadimpalli, Natalie Parham, Francisca Vasconcelos, Henry Yuen]
    what: "Introduced the Pauli spectrum of QAC⁰ circuits and proved parity lower bounds for circuits with few ancilla qubits."
    link: https://arxiv.org/abs/2311.09631
  - year: 2024
    by: [Anurag Anshu, Yangjing Dong, Fengning Ou, Penghui Yao]
    what: "Depth-d QAC⁰ circuits need n^(1+3^(−d)) ancillas to compute parity."
    link: https://arxiv.org/abs/2410.06499
  - year: 2026
    by: [OpenAI]
    with: [OpenAI internal model, Lean 4]
    what: "Claimed proof (manuscripts dated 24 September 2026) that constant-depth circuits with polynomially many qubits cannot compute parity with any fixed advantage over guessing, in the measured-output model. The family carries a Lean formalization; not independently reviewed."
    link: https://github.com/openai/math
---
Can constant-depth quantum circuits of one-qubit gates and many-qubit Toffoli gates (QAC⁰) compute the parity of n bits? Moore defined QAC⁰ in 1999 and conjectured that they cannot, the quantum analogue of parity not being in AC⁰; he also showed parity is equivalent to quantum fan-out. OpenAI claimed a proof in October 2026, not yet reviewed.
