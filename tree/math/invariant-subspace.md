---
title: Invariant Subspace Problem
status: open
importance: 50
requires: [functional-analysis]
field: analysis
aliases: [invariant subspaces]
links:
  - https://en.wikipedia.org/wiki/Invariant_subspace_problem
progress:
  - year: 1954
    by: [Nachman Aronszajn, Kennan Smith]
    what: "Every compact operator has a nontrivial closed invariant subspace."
  - year: 1973
    by: [Victor Lomonosov]
    what: "So does every operator that commutes with a nonzero compact operator."
  - year: 1976
    by: [Per Enflo]
    what: "An operator on a Banach space with no nontrivial closed invariant subspace (outlined 1976, published 1987); Charles Read found one on ℓ¹ in 1985."
  - year: 2023
    by: [Per Enflo]
    what: "Posted a preprint claiming that every operator on a Hilbert space has a nontrivial invariant subspace. Neither it nor a separate claim by Charles Neville has been accepted as a solution."
    link: https://arxiv.org/abs/2305.15442
  - year: 2026
    by: [OpenAI]
    with: [OpenAI internal model, Lean 4]
    what: "Claimed a nonzero quasinilpotent operator on every separable infinite-dimensional Hilbert space with no nontrivial hyperinvariant subspace, which answers the hyperinvariant subspace problem but not this one (family 293 of OpenAI’s math release, formalized in Lean). Not yet independently reviewed."
    link: https://github.com/openai/math
---
Does every bounded linear operator on a separable complex Hilbert space of dimension at least 2 have a closed invariant subspace other than {0} and the whole space? Yes for compact operators and many other classes, and no on some Banach spaces (Enflo, Read). The Hilbert space case is still open, despite claimed proofs posted in 2023.
