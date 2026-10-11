---
title: Extended States in the Anderson Model
status: claimed
importance: 52
posed: 1979
requires: [anderson-localization, functional-analysis]
by: [OpenAI]
with: [OpenAI internal model, Lean 4]
field: mathematical physics
aliases: [extended states conjecture, Anderson model, delocalization, Simon's problems 1 and 2]
links:
  - https://en.wikipedia.org/wiki/Anderson_localization
  - https://en.wikipedia.org/wiki/Simon_problems
  - https://github.com/openai/math
progress:
  - year: 1983
    by: [Jürg Fröhlich, Thomas Spencer]
    what: "Proved absence of diffusion at strong disorder or extreme energies in any dimension, with multiscale analysis."
  - year: 1998
    by: [Abel Klein]
    what: "Proved extended states at weak disorder on the Bethe lattice, an infinite tree."
  - year: 2026
    by: [OpenAI]
    with: [OpenAI internal model, Lean 4]
    what: "Claimed proofs for uniform disorder: purely absolutely continuous spectrum on an energy interval at weak disorder in every dimension d ≥ 3, and pure-point spectrum at every disorder in two dimensions (family 261 of OpenAI’s math release, formalized in Lean). Not yet independently reviewed."
    link: https://github.com/openai/math
---
The 1979 scaling theory of localization predicted that weak disorder leaves extended, conducting electron states in three or more dimensions, while in two dimensions every state localizes. Barry Simon listed proving both for the lattice Anderson model among his problems of 1984 and 2000. OpenAI’s October 2026 release claims both, formalized in Lean but not yet independently reviewed.
