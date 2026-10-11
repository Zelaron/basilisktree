---
title: Relativistic Vlasov–Maxwell Regularity
status: claimed
importance: 45
posed: 1986
requires: [maxwell-equations, special-relativity, plasma-physics]
by: [OpenAI]
with: [OpenAI internal model, Lean 4]
field: kinetic theory
aliases: [Vlasov–Maxwell system, collisionless plasma]
links:
  - https://en.wikipedia.org/wiki/Vlasov_equation#The_Vlasov%E2%80%93Maxwell_system_of_equations
  - https://github.com/openai/math
progress:
  - year: 1986
    by: [Robert Glassey, Walter Strauss]
    what: "Smooth solutions continue as long as particle momenta stay bounded."
  - year: 1989
    by: [Ronald DiPerna, Pierre-Louis Lions]
    what: "Proved global existence of weak solutions."
    link: https://doi.org/10.1002/cpa.3160420603
  - year: 2026
    by: [OpenAI]
    with: [OpenAI internal model, Lean 4]
    what: "Claimed proof of global existence and uniqueness of smooth solutions for arbitrary smooth data with compactly supported particle density, in three dimensions for one species (family 362 of OpenAI’s math release, formalized in Lean). Not yet independently reviewed."
    link: https://github.com/openai/math
---
The relativistic Vlasov–Maxwell system models a collisionless plasma moving in its own electromagnetic field. Robert Glassey and Walter Strauss showed in 1986 that smooth solutions persist while particle momenta stay bounded, but large-data global regularity in three dimensions stayed open. OpenAI’s October 2026 release claims it for one species, formalized in Lean but not yet independently reviewed.
