---
title: Unitary Synthesis Problem
status: claimed
importance: 35
posed: 2007
requires: [bqp, complexity-theory]
by: [OpenAI]
with: [OpenAI internal model]
field: quantum complexity
aliases: [Aaronson–Kuperberg problem, unitary synthesis]
links:
  - https://arxiv.org/abs/quant-ph/0604056
  - https://arxiv.org/abs/2310.08870
progress:
  - year: 2021
    by: [Gregory Rosenthal]
    what: "Any n-qubit unitary can be implemented approximately in Õ(2^(n/2)) time with queries to a suitable classical oracle."
    link: https://arxiv.org/abs/2111.07992
  - year: 2023
    by: [Gregory Rosenthal]
    what: "The state version is solved: one query to a classical oracle and polynomial time suffice to prepare any n-qubit state."
    link: https://arxiv.org/abs/2306.01723
  - year: 2023
    by: [Alex Lombardi, Fermi Ma, John Wright]
    what: "One query is not enough: some unitaries cannot be implemented by any efficient one-query oracle algorithm."
    link: https://arxiv.org/abs/2310.08870
  - year: 2026
    by: [OpenAI]
    with: [OpenAI internal model]
    what: "Claimed solution of the constant-error version: a polynomial-size quantum circuit with a suitably chosen Boolean oracle approximates every n-qubit unitary within diamond-norm error 1/2. Constructing that oracle efficiently is not claimed (family 283 of OpenAI’s math release). Not yet independently reviewed."
    link: https://github.com/openai/math
---
Aaronson and Kuperberg asked in 2007 whether every n-qubit unitary can be implemented, at least approximately, by a polynomial-size quantum circuit with oracle access to a suitably chosen Boolean function. A yes would reduce all quantum transformations to classical oracles; one query is known to be insufficient (2023), while exponentially many suffice. OpenAI’s October 2026 release claims a yes for the constant-error version.
