---
title: Planar Hot Spots Conjecture
status: claimed
importance: 34
posed: 1974
requires: [pdes, fourier-analysis]
by: [OpenAI]
with: [OpenAI internal model, Lean 4]
field: spectral theory
aliases: [hot spots conjecture, Rauch's conjecture, Burdzy's conjecture]
links:
  - https://github.com/openai/math
progress:
  - year: 1999
    by: [Krzysztof Burdzy, Wendelin Werner]
    what: "Found a planar domain with holes where the conjecture fails."
  - year: 2020
    by: [Chris Judge, Sugata Mondal]
    what: "Proved it for every triangle."
  - year: 2026
    by: [OpenAI]
    with: [OpenAI internal model, Lean 4]
    what: "Claimed proof of a strict form for every smooth bounded simply connected planar domain: the first nonconstant Neumann eigenfunction has no interior critical point (family 369 of OpenAI’s math release, formalized in Lean). Not yet independently reviewed."
    link: https://github.com/openai/math
---
Jeffrey Rauch conjectured in 1974 that the hottest and coldest points of an insulated plate eventually lie on its boundary, a claim about the first nonconstant Neumann eigenfunction. It fails for some domains with holes, and Krzysztof Burdzy conjectured it for simply connected planar domains. OpenAI’s October 2026 release claims that case for smooth domains, formalized in Lean but not yet independently reviewed.
