---
title: Sidorenko's Conjecture
status: claimed
importance: 44
posed: 1986
requires: [graph-theory, random-graphs]
by: [OpenAI]
with: [OpenAI internal model, Lean 4]
field: extremal graph theory
aliases: [Erdős–Simonovits–Sidorenko conjecture, forcing conjecture]
links:
  - https://en.wikipedia.org/wiki/Sidorenko%27s_conjecture
  - https://github.com/openai/math
progress:
  - year: 1991
    by: [Alexander Sidorenko]
    what: "Proved the conjecture for trees, even cycles and complete bipartite graphs."
  - year: 2010
    by: [David Conlon, Jacob Fox, Benny Sudakov]
    what: "Proved it for bipartite graphs with a vertex joined to every vertex on the other side."
  - year: 2026
    by: [OpenAI]
    with: [OpenAI internal model, Lean 4]
    what: "Claimed counterexample: a connected bipartite graph with 35 vertices and 66 edges that occurs less often than in a random graph of the same edge density. The same graph would disprove the Skokan–Thoma forcing conjecture (family 161 of OpenAI’s math release, formalized in Lean). Not yet independently reviewed."
    link: https://github.com/openai/math
---
Alexander Sidorenko conjectured in 1986 that for every bipartite graph H, random graphs contain the fewest copies of H among all graphs of the same edge density. A major problem of extremal graph theory, it was proved for trees, even cycles, hypercubes and other families. OpenAI’s October 2026 release claims a counterexample with 35 vertices and 66 edges, formalized in Lean but not yet independently reviewed.
