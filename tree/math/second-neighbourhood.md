---
title: Seymour's Second Neighbourhood Conjecture
status: claimed
importance: 36
posed: 1990
requires: [graph-theory]
by: [OpenAI]
with: [OpenAI internal model, Lean 4]
field: graph theory
aliases: [second neighborhood problem, Seymour's distance two conjecture, Dean's conjecture]
links:
  - https://en.wikipedia.org/wiki/Second_neighborhood_problem
  - https://github.com/openai/math
progress:
  - year: 1996
    by: [David C. Fisher]
    what: "Proved the case of tournaments, conjectured by Nathaniel Dean."
  - year: 2003
    by: [Guantao Chen, Jian Shen, Raphael Yuster]
    what: "Every oriented graph has a vertex whose second neighbourhood is at least about 0.657 times as large as its first."
    link: https://doi.org/10.1007/s000260300001
  - year: 2026
    by: [OpenAI]
    with: [OpenAI internal model, Lean 4]
    what: "Claimed proof for every finite oriented graph (family 173 of OpenAI’s math release, formalized in Lean). Not yet independently reviewed."
    link: https://github.com/openai/math
---
Paul Seymour conjectured in 1990 that every finite oriented graph has a vertex with at least as many vertices at distance two as at distance one. In a social network, someone would have at least as many friends of friends as friends; tournaments were settled in 1996. OpenAI’s October 2026 release claims a full proof, formalized in Lean but not yet independently reviewed.
