---
title: Static Output Feedback Stabilization
status: claimed
importance: 40
posed: 1997
requires: [feedback-stability, complexity-theory]
by: [Johan Löfberg, Amir Ali Ahmadi, Abraar Chaudhry, Ijay Narang, Yukai Tang]
with: [ChatGPT 5.6, Claude Opus 5]
field: control
aliases: [SOF stabilization, output feedback stabilization, constant-gain output feedback]
links:
  - https://arxiv.org/abs/2609.16886
  - https://arxiv.org/abs/2609.20636
progress:
  - year: 2026
    by: [Johan Löfberg]
    with: [ChatGPT 5.6, Claude Opus 5]
    what: "Claimed NP-hardness of unrestricted static output feedback stabilization, even with a single input, by reduction from the Betweenness problem. ChatGPT 5.6 and Claude Opus 5 helped with ideation, verification code, writing and adversarial review."
    link: https://arxiv.org/abs/2609.16886
  - year: 2026
    by: [Amir Ali Ahmadi, Abraar Chaudhry, Ijay Narang, Yukai Tang]
    with: [ChatGPT 5.6]
    what: "Claimed strong NP-hardness in continuous and discrete time by reduction from 3SAT. The authors report that ChatGPT 5.6 produced a first one-shot proof on 2 August 2026, which they then simplified with it."
    link: https://arxiv.org/abs/2609.20636
  - year: 2026
    by: [Gal Barkai, Iman Shames]
    what: "An independent claim of NP-hardness by reduction from Subset Sum."
    link: https://arxiv.org/abs/2609.38728
  - year: 2026
    by: [Zhaobo Liu]
    what: "Claimed the problem is complete for the existential theory of the reals for two-input integer plants, strongly NP-hard for a family of single-input plants, and polynomial-time when an effective gain dimension is fixed."
    link: https://arxiv.org/abs/2610.00390
---
Given a linear plant, decide whether some constant gain from its measured outputs to its inputs makes it stable. Blondel and Tsitsiklis proved this NP-hard in 1997 only for gains confined to intervals, leaving the unrestricted case, a long-standing open question of control theory. In September 2026 four independent preprints claimed it is NP-hard, so no efficient exact test exists unless P = NP; none is peer reviewed yet.
