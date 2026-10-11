---
title: Verified OS Kernel (seL4)
importance: 40
year: 2009
requires: [proof-assistants, operating-system]
by: [Gerwin Klein, Gernot Heiser, June Andronick]
with: [Isabelle/HOL]
verified: Isabelle/HOL (2009)
field: formal methods
aliases: [seL4 microkernel, verified kernel, L4]
links:
  - https://en.wikipedia.org/wiki/SeL4
  - https://doi.org/10.1145/1629575.1629596
  - https://github.com/seL4/l4v
---
Gerwin Klein, Gernot Heiser, June Andronick and colleagues (2009) completed a machine-checked proof in Isabelle/HOL that the C code of the seL4 microkernel implements its formal specification. Later proofs covered integrity and confidentiality, and seL4 is used in some high-assurance systems, including projects funded by DARPA.
