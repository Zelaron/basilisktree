---
title: k-Server Conjecture
status: open
importance: 40
posed: 1988
requires: [competitive-analysis]
field: online algorithms
aliases: [k-server problem, work function algorithm]
links:
  - https://en.wikipedia.org/wiki/K-server_problem
progress:
  - year: 1991
    by: [Marek Chrobak, Lawrence L. Larmore]
    what: "The conjecture holds on tree metrics."
  - year: 1995
    by: [Elias Koutsoupias, Christos Papadimitriou]
    what: "The work function algorithm is (2k − 1)-competitive on every metric space."
  - year: 2000
    by: [Yair Bartal, Elias Koutsoupias]
    what: "The work function algorithm is k-competitive on the line, on weighted stars and on metrics with k + 2 points."
  - year: 2023
    by: [Sébastien Bubeck, Christian Coester, Yuval Rabani]
    what: "Refuted the randomized analogue: some metric spaces force a randomized competitive ratio of Ω(log² k)."
    link: https://arxiv.org/abs/2211.05753
  - year: 2026
    by: [OpenAI]
    with: [OpenAI internal model, Lean 4]
    what: "Claimed a randomized algorithm that is O(log² k)-competitive on every metric space, matching the 2023 lower bound (family 110 of OpenAI’s math release, formalized in Lean). Not yet independently reviewed."
    link: https://github.com/openai/math
---
Manasse, McGeoch and Sleator conjectured in 1988 that k servers moving in any metric space can answer requests online at most k times as expensively as an optimal offline schedule. The best general ratio is 2k − 1, from the work function algorithm (Koutsoupias and Papadimitriou, 1995); the randomized O(log k) analogue was disproved in 2023.
