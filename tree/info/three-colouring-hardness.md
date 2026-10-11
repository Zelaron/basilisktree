---
title: Hardness of Colouring 3-Colourable Graphs
status: claimed
importance: 45
posed: 1976
requires: [complexity-theory, graph-theory]
by: [OpenAI]
with: [OpenAI internal model, Lean 4]
field: complexity theory
aliases: [approximate graph colouring, approximate graph coloring, colouring 3-colourable graphs]
links:
  - https://en.wikipedia.org/wiki/Graph_coloring#Computational_complexity
  - https://github.com/openai/math
progress:
  - year: 1993
    by: [Sanjeev Khanna, Nathan Linial, Shmuel Safra]
    what: "Colouring a 3-colourable graph with 4 colours is NP-hard."
  - year: 2019
    by: [Jakub Bulín, Andrei Krokhin, Jakub Opršal]
    what: "Colouring a 3-colourable graph with 5 colours is NP-hard."
    link: https://doi.org/10.1145/3313276.3316300
  - year: 2026
    by: [OpenAI]
    with: [OpenAI internal model, Lean 4]
    what: "Claimed proof that colouring a 3-colourable graph with any fixed number of colours is NP-hard, via a reduction from 3SAT (family 106 of OpenAI’s math release, formalized in Lean). Not yet independently reviewed."
    link: https://github.com/openai/math
---
Finding a 3-colouring of a 3-colourable graph is NP-hard, and the question is whether finding a colouring with any fixed larger number of colours is too. The study goes back to Michael Garey and David Johnson in 1976, and hardness was known only for 4 colours (1993) and 5 colours (2019). OpenAI’s October 2026 release claims NP-hardness for every fixed number, formalized in Lean but not yet independently reviewed.
