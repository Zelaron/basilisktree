---
title: Empty Hexagon Theorem
importance: 24
year: 2024
requires: [erdos-szekeres, electronic-computer, cdcl-sat-solvers]
by: [Marijn Heule, Manfred Scheucher]
with: [SAT solver, Lean 4]
verified: Lean 4
field: combinatorics
aliases: [happy ending problem, empty convex hexagon, "h(6) = 30"]
links:
  - https://en.wikipedia.org/wiki/Happy_ending_problem
  - https://arxiv.org/abs/2403.00737
  - https://arxiv.org/abs/2403.17370
---
Among any 30 points in general position in the plane, six form an empty convex hexagon, and 29 points do not suffice (Heule and Scheucher, 2024). The proof is a SAT computation whose encoding was later verified in Lean. It settles the empty-hexagon case of the happy ending problem.
