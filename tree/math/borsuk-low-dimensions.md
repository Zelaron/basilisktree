---
title: Borsuk's Problem in Low Dimensions
status: open
importance: 34
posed: 1933
requires: [borsuk-disproof]
field: geometry
aliases: [Borsuk's conjecture]
links:
  - https://en.wikipedia.org/wiki/Borsuk%27s_conjecture
progress:
  - year: 1947
    by: [Julian Perkal]
    what: "Proved the conjecture in three dimensions; H. G. Eggleston gave an independent proof in 1955."
  - year: 2013
    by: [Andriy Bondarenko]
    what: "Counterexamples in every dimension from 65 on, built from two-distance sets."
    link: https://arxiv.org/abs/1305.2584
  - year: 2013
    by: [Thomas Jenrich]
    what: "A 64-dimensional counterexample derived from Bondarenko's construction."
    link: https://arxiv.org/abs/1308.0206
  - year: 2026
    by: [Max Grinsztajn]
    with: [GPT-5.5 Pro]
    what: "A 63-dimensional counterexample: a 321-point three-distance set that needs at least 65 pieces."
    link: https://github.com/maaxgrin/borsuk-63-counterexample
  - year: 2026
    by: [OpenAI]
    with: [OpenAI internal model, Lean 4]
    what: "Claimed counterexample in dimension 9, built from rank-one projections onto lines in ℝ⁴ (family 156 of OpenAI’s math release, formalized in Lean). Not yet independently reviewed."
    link: https://github.com/openai/math
---
Borsuk asked in 1933 whether every bounded set in ℝⁿ can be cut into n + 1 pieces of smaller diameter. The answer is yes for n ≤ 3 and no in high dimensions ([[borsuk-disproof|Kahn and Kalai, 1993]]), and the smallest dimension with a known counterexample fell from 64 (2013) to 63 (May 2026), and OpenAI’s October 2026 release claims 9. Dimension 4 is the smallest open case.
