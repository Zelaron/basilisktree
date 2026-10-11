---
title: Ionization Conjecture
status: claimed
importance: 45
posed: 1984
requires: [stability-of-matter, pauli-exclusion]
by: [OpenAI]
with: [OpenAI internal model]
field: mathematical physics
aliases: [maximum ionization of atoms, excess charge problem, negative ions]
links:
  - https://en.wikipedia.org/wiki/Simon_problems
  - https://arxiv.org/abs/2206.15393
progress:
  - year: 1984
    by: [Elliott H. Lieb]
    what: "A nucleus of charge Z binds fewer than 2Z + 1 electrons, which settles the conjecture for hydrogen."
    link: https://doi.org/10.1103/PhysRevA.29.3018
  - year: 1990
    by: [Charles Fefferman, Luis A. Seco]
    what: "The maximal number of bound electrons is at most Z + O(Z^(5/7)), still the best asymptotic bound for the Schrödinger atom; Seco, Sigal and Solovej gave another proof the same year."
    link: https://doi.org/10.1007/BF02097048
  - year: 2003
    by: [Jan Philip Solovej]
    what: "Proved the bound Z + C in Hartree–Fock theory, the first version of the conjecture for a realistic many-electron model."
    link: https://doi.org/10.4007/annals.2003.158.509
  - year: 2026
    by: [OpenAI]
    with: [OpenAI internal model]
    what: "Claimed proof that a molecule with M nuclei of total charge Z binds at most Z + CM electrons in the full nonrelativistic Coulomb model, which gives Z + C for atoms (family 263 of OpenAI's math release). The Lean formalizations cover only companion asymptotic results; not yet independently reviewed."
    link: https://github.com/openai/math
---
Experiments show that a neutral atom binds at most one or two extra electrons. The ionization conjecture asks for a proof from the many-body Schrödinger equation that a nucleus of charge Z binds at most Z + C electrons, with C universal. Lieb proved fewer than 2Z + 1 (1984) and Solovej proved Z + C in Hartree–Fock theory (2003); a 2026 claim of the full result awaits independent review.
