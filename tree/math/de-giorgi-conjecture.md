---
title: De Giorgi's Conjecture
status: claimed
importance: 42
posed: 1978
requires: [pdes, calculus-of-variations]
by: [OpenAI]
with: [OpenAI internal model]
field: partial differential equations
aliases: [De Giorgi conjecture, Allen–Cahn equation]
links:
  - https://en.wikipedia.org/wiki/Allen%E2%80%93Cahn_equation
  - https://en.wikipedia.org/wiki/Bernstein%27s_problem
  - https://github.com/openai/math
progress:
  - year: 2000
    by: [Luigi Ambrosio, Xavier Cabré]
    what: "Proved the conjecture in dimension 3, after Ghoussoub and Gui did dimension 2 in 1998."
  - year: 2009
    by: [Ovidiu Savin]
    what: "Proved it in dimensions up to 8 under an extra limit condition; del Pino, Kowalczyk and Wei showed in 2011 that it fails from dimension 9."
  - year: 2026
    by: [OpenAI]
    with: [OpenAI internal model]
    what: "Claimed proof in dimension 8, which implies all lower dimensions, together with a classification of stable solutions in dimension 7 (family 375 of OpenAI’s math release, not formalized). Not yet independently reviewed."
    link: https://github.com/openai/math
---
Ennio De Giorgi conjectured in 1978 that bounded solutions of the Allen–Cahn equation Δu = u³ − u that increase in one direction are one-dimensional in dimensions up to 8, an analogue of the Bernstein problem for minimal surfaces. It was known in dimensions 2 and 3. OpenAI’s October 2026 release claims dimension 8, which covers all lower ones; it is not formalized and not yet independently reviewed.
