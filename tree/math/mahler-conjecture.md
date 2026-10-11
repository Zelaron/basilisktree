---
title: Mahler Conjecture
status: claimed
importance: 45
posed: 1939
requires: [geometry, functional-analysis]
by: [OpenAI]
with: [OpenAI internal model, Lean 4]
field: convex geometry
aliases: [Mahler volume, volume product, reverse Santaló inequality]
links:
  - https://en.wikipedia.org/wiki/Mahler_volume
  - https://github.com/openai/math
progress:
  - year: 1987
    by: [Jean Bourgain, Vitali Milman]
    what: "Proved the conjecture up to a factor cⁿ for an absolute constant c."
  - year: 2020
    by: [Hiroshi Iriyeh, Masataka Shibata]
    what: "Proved the symmetric case in dimension 3."
    link: https://doi.org/10.1215/00127094-2019-0072
  - year: 2026
    by: [OpenAI]
    with: [OpenAI internal model, Lean 4]
    what: "Claimed proofs of the symmetric and general conjectures in every dimension, with Hanner polytopes and simplices as the minimizers and all equality cases classified (family 087 of OpenAI’s math release, formalized in Lean). Not yet independently reviewed."
    link: https://github.com/openai/math
---
Kurt Mahler conjectured in 1939 that the product of the volumes of a convex body and its polar is smallest for the cube among symmetric bodies and for the simplex in general. It is a central problem of convex geometry, tied to Banach space theory and symplectic geometry. OpenAI’s October 2026 release claims both versions in every dimension, formalized in Lean but not yet independently reviewed.
