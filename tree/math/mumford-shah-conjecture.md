---
title: Mumford–Shah Conjecture
status: claimed
importance: 38
posed: 1989
requires: [calculus-of-variations, measure-theory]
by: [OpenAI]
with: [OpenAI internal model]
field: calculus of variations
aliases: [Mumford–Shah functional, image segmentation]
links:
  - https://en.wikipedia.org/wiki/Mumford%E2%80%93Shah_functional
  - https://github.com/openai/math
progress:
  - year: 1989
    by: [Ennio De Giorgi, Michele Carriero, Antonio Leaci]
    what: "Proved that minimizers exist."
  - year: 1996
    by: [Alexis Bonnet]
    what: "Proved the conjecture for minimizers whose edge set has finitely many connected components."
  - year: 2026
    by: [OpenAI]
    with: [OpenAI internal model]
    what: "Claimed proof of the interior regularity statement in the plane: near each point the edge set is a C^{1,α} arc, a crack tip or three arcs meeting at 120° (family 366 of OpenAI’s math release, not formalized). Not yet independently reviewed."
    link: https://github.com/openai/math
---
David Mumford and Jayant Shah conjectured in 1989 that for a minimizer of their image-segmentation functional in the plane, the edge set is a finite union of smooth arcs meeting only in 120° triple junctions or ending at crack tips. It is the model problem for free-discontinuity regularity. OpenAI’s October 2026 release claims the interior statement; it is not formalized and not yet independently reviewed.
