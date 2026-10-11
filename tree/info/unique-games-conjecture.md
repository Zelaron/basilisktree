---
title: Unique Games Conjecture
status: claimed
importance: 62
posed: 2002
requires: [pcp-theorem, semidefinite-programming]
by: [OpenAI]
with: [OpenAI internal model, Lean 4]
field: complexity theory
aliases: [UGC, Khot's conjecture, unique label cover]
links:
  - https://en.wikipedia.org/wiki/Unique_games_conjecture
  - https://github.com/openai/math
  - https://www.quantamagazine.org/as-ai-closed-in-on-unique-games-proof-researchers-raced-to-beat-the-machines-20261007/
progress:
  - year: 2010
    by: [Sanjeev Arora, Boaz Barak, David Steurer]
    what: "A subexponential-time algorithm for unique games."
  - year: 2018
    by: [Subhash Khot, Dor Minzer, Shmuel Safra, Irit Dinur, Guy Kindler]
    what: "Proved the 2-to-2 Games Conjecture, which implies that it is NP-hard to tell unique games of value at least 1/2 from those of value near 0."
    link: https://www.quantamagazine.org/computer-scientists-close-in-on-unique-games-conjecture-proof-20180424/
  - year: 2026
    by: [OpenAI]
    with: [OpenAI internal model, Lean 4]
    what: "Claimed proof in OpenAI's math release of 6 October 2026 (manuscript dated 23 September): a deterministic polynomial-time reduction from 3SAT to unique games over a fixed alphabet with completeness 1 − ε and soundness δ. The reduction carries a Lean formalization; no independent expert review yet."
    link: https://github.com/openai/math
---
Khot's 2002 conjecture: for every ε, δ > 0 it is NP-hard to tell unique games (labelings in which each edge constraint is a bijection) that are (1 − ε)-satisfiable from those at most δ-satisfiable. It would make the Goemans–Williamson Max-Cut ratio and factor 2 for Vertex Cover optimal. OpenAI claimed a proof on 6 October 2026, not yet independently reviewed.
