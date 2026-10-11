---
title: "Derandomizing Logspace (L = BPL)"
status: claimed
importance: 50
posed: 1979
requires: [hardness-vs-randomness, sl-equals-l, expander-graphs]
by: [OpenAI]
with: [OpenAI internal model, Lean 4]
field: complexity theory
aliases: [L vs BPL, RL vs L, space-bounded derandomization]
links:
  - https://en.wikipedia.org/wiki/BPL_(complexity)
  - https://en.wikipedia.org/wiki/RL_(complexity)
progress:
  - year: 1992
    by: [Noam Nisan]
    what: "A pseudorandom generator for space-bounded computation; consequently BPL is in SC (polynomial time and polylogarithmic space)."
  - year: 1995
    by: [Michael Saks, Shiyu Zhou]
    what: "BPL ⊆ DSPACE(log^(3/2) n)."
  - year: 2005
    by: [Omer Reingold]
    what: "Undirected connectivity, the classic randomized logspace problem, is in deterministic logspace (SL = L)."
  - year: 2021
    by: [William Hoza]
    what: "Improved Saks and Zhou to BPL ⊆ DSPACE(log^(3/2) n/√(log log n))."
    link: https://eccc.weizmann.ac.il/report/2021/048/
  - year: 2026
    by: [OpenAI]
    with: [OpenAI internal model, Lean 4]
    what: "Claimed proof that L = RL = BPL: an explicit compiler turns any randomized logspace machine with one- or two-sided error into a deterministic logspace one (family 103 of OpenAI’s math release, formalized in Lean). Not yet independently reviewed."
    link: https://github.com/openai/math
---
Can every problem solved by a bounded-error randomized algorithm in logarithmic space and polynomial time also be solved deterministically in logarithmic space? Asked since random walks put undirected connectivity in randomized logspace (1979); Reingold derandomized that case in 2005, and the best general simulation uses about log^(3/2) n space (Saks and Zhou, 1995). OpenAI’s October 2026 release claims a proof that L = BPL.
