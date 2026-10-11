---
title: Hadwiger's Conjecture
status: claimed
importance: 50
posed: 1943
requires: [graph-minor-theorem, four-color-theorem]
by: [OpenAI]
with: [OpenAI internal model, Lean 4]
field: graph theory
aliases: [Hadwiger conjecture, clique minors]
links:
  - https://en.wikipedia.org/wiki/Hadwiger_conjecture_(graph_theory)
  - https://github.com/openai/math
progress:
  - year: 1993
    by: [Neil Robertson, Paul Seymour, Robin Thomas]
    what: "Proved the case k = 6, using the four colour theorem."
  - year: 2021
    by: [Michelle Delcourt, Luke Postle]
    what: "Graphs with no Kₖ minor are O(k log log k)-colourable."
    link: https://arxiv.org/abs/2108.01633
  - year: 2026
    by: [Sergey Norin, Raphael Steiner]
    with: [GPT-6 Astra]
    what: "Claimed that graphs with no Kₖ minor are O(k)-colourable (the linear Hadwiger conjecture); the paper says the proof was found by GPT-6 Astra following the authors' directions."
    link: https://arxiv.org/abs/2610.05291
  - year: 2026
    by: [OpenAI]
    with: [OpenAI internal model, Lean 4]
    what: "Claimed disproof, even for fractional colouring (family 157 of OpenAI's math release, formalized in Lean). Not yet independently reviewed."
    link: https://github.com/openai/math
---
Hadwiger conjectured in 1943 that every graph with no Kₖ minor can be coloured with k − 1 colours, a far-reaching generalization of the four colour theorem. It is proved for k ≤ 6. In October 2026 OpenAI claimed counterexamples, and separately Norin and Steiner claimed that a constant multiple of k colours always suffices. Both claims await review.
