---
title: Generalized Star-Height Problem
status: open
importance: 30
posed: 1980
requires: [finite-automata]
field: automata theory
aliases: [generalized star height, star height with complement]
links:
  - https://en.wikipedia.org/wiki/Generalized_star-height_problem
progress:
  - year: 1965
    by: [Marcel-Paul Schützenberger]
    what: "Languages of generalized star height 0 (star-free) are exactly those with aperiodic syntactic monoids, so height 0 is decidable."
  - year: 1992
    by: [Jean-Éric Pin, Howard Straubing, Denis Thérien]
    what: "Languages recognized by nilpotent groups of class 2 have height at most 1, and a long-standing candidate for height 2 has height 1."
  - year: 2026
    by: [OpenAI]
    with: [OpenAI internal model, Lean 4]
    what: "Claimed proof that every regular language has generalized star height at most 3 (family 134 of OpenAI’s math release, formalized in Lean). Not yet independently reviewed."
    link: https://github.com/openai/math
---
With complement allowed in regular expressions, is there a regular language that needs two or more nested Kleene stars? No language of generalized star height above 1 is known, and whether star height can be computed is open; the question is on Brzozowski's 1980 list of open problems about regular languages.
