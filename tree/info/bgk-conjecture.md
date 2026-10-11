---
title: Barendregt–Geuvers–Klop Conjecture
status: claimed
importance: 30
posed: 1993
requires: [lambda-calculus, curry-howard]
by: [OpenAI]
with: [OpenAI internal model, Lean 4]
field: type theory
aliases: [BGK conjecture, weak normalization implies strong normalization, pure type systems]
links:
  - https://en.wikipedia.org/wiki/Pure_type_system
  - https://tlca.di.unito.it/opltlca/opltlcasu16.html
progress:
  - year: 1997
    by: [Morten Heine Sørensen]
    what: "Weak normalization implies strong normalization for certain non-dependent typed lambda calculi, via a continuation-passing translation."
  - year: 2001
    by: [Gilles Barthe, John Hatcliff, Morten Heine Sørensen]
    what: "Extended this to a class of non-dependent pure type systems."
  - year: 2026
    by: [OpenAI]
    with: [OpenAI internal model, Lean 4]
    what: "Claimed proof that weak normalization implies strong normalization in every pure type system (family 245 of OpenAI’s math release, formalized in Lean). Not yet independently reviewed."
    link: https://github.com/openai/math
---
Is every weakly normalizing pure type system also strongly normalizing, so that if every typable term has a normal form then every reduction sequence terminates? Posed by Barendregt, Geuvers and Klop and stated in Geuvers' 1993 thesis, it is open problem 9 of the TLCA list; it is proved only for a class of non-dependent systems. OpenAI’s October 2026 release claims a proof.
