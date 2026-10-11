---
title: SIKE Broken
importance: 28
year: 2022
requires: [elliptic-curve-cryptography]
by: [Wouter Castryck, Thomas Decru]
field: cryptanalysis
aliases: [SIDH attack, isogeny cryptography, supersingular isogenies]
links:
  - https://en.wikipedia.org/wiki/Supersingular_isogeny_key_exchange
  - https://eprint.iacr.org/2022/975
---
In July 2022 Wouter Castryck and Thomas Decru found a classical attack that recovers SIKE keys, using a 1997 theorem of Ernst Kani on glued elliptic curves. It broke the smallest NIST parameter set in about an hour on a single core, and SIKE, a post-quantum candidate in NIST's process, was no longer viable.
