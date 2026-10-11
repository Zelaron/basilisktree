---
title: Chromatic Number of the Plane
status: open
importance: 42
posed: 1950
requires: [graph-theory, geometry]
aliases: [Hadwiger–Nelson problem, unit distance graph]
links:
  - https://en.wikipedia.org/wiki/Hadwiger%E2%80%93Nelson_problem
progress:
  - year: 2018
    by: [Aubrey de Grey]
    with: [computer search]
    what: "Ruled out 4 colours with a 1,581-vertex unit-distance graph. De Grey is a biologist by training; the Polymath16 project then shrank such graphs."
  - year: 2026
    by: [OpenAI]
    with: [OpenAI internal model, Lean 4]
    what: "Claimed proof that the plane cannot be coloured with five colours, which would leave 6 or 7 (family 158 of OpenAI's math release, formalized in Lean). Not yet independently reviewed."
    link: https://github.com/openai/math
---
How many colours are needed so that no two points at distance exactly 1 share a colour? It is proved to be 5, 6 or 7, and a 2026 claim, formalized in Lean, would rule out 5.
