---
title: Yau's Nodal Set Conjecture
status: claimed
importance: 40
posed: 1982
requires: [differential-geometry, pdes]
by: [OpenAI]
with: [OpenAI internal model, Lean 4]
field: spectral geometry
aliases: [nodal sets of eigenfunctions, Yau's conjecture on nodal sets]
links:
  - https://github.com/openai/math
progress:
  - year: 1988
    by: [Harold Donnelly, Charles Fefferman]
    what: "Proved both bounds for real-analytic metrics."
  - year: 2018
    by: [Alexander Logunov]
    what: "Proved the lower bound for all smooth metrics and a polynomial upper bound."
  - year: 2026
    by: [OpenAI]
    with: [OpenAI internal model, Lean 4]
    what: "Claimed proof of the sharp upper bound C√λ on every smooth closed surface, completing the conjecture there, and smooth counterexamples to the upper bound in dimensions 3, 4 and 5 (family 350 of OpenAI’s math release, formalized in Lean). Not yet independently reviewed."
    link: https://github.com/openai/math
---
Shing-Tung Yau conjectured in 1982 that the zero set of a Laplace eigenfunction with eigenvalue λ has size between c√λ and C√λ. Donnelly and Fefferman proved it for real-analytic metrics in 1988 and Logunov proved the lower bound in 2018. OpenAI’s October 2026 release claims the upper bound on surfaces and counterexamples in dimensions 3 to 5, formalized in Lean but not yet independently reviewed.
