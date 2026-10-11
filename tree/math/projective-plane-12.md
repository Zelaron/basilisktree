---
title: Projective Plane of Order 12
status: open
importance: 33
requires: [projective-plane-10]
field: combinatorics
aliases: [prime power conjecture, finite projective plane]
links:
  - https://en.wikipedia.org/wiki/Projective_plane
progress:
  - year: 1949
    by: [Richard Bruck, Herbert Ryser]
    what: "No plane of order n exists if n is 1 or 2 mod 4 and not a sum of two squares. This rules out 6, 14, 21, 22, … but not 10 or 12."
  - year: 2021
    by: [Curtis Bright, Kevin Cheung, Brett Stevens, Ilias Kotsireas, Vijay Ganesh]
    with: [SAT solver]
    what: "Re-derived the nonexistence of a plane of order 10 with SAT solvers that produce independently checkable certificates, and found consistency issues in the earlier searches."
    link: https://arxiv.org/abs/2012.04715
---
A finite projective plane of order n has n² + n + 1 points and as many lines, with every two points on exactly one line. Planes exist for every prime power order, and every known plane has prime power order; the Bruck–Ryser theorem (1949) excludes orders such as 6 and 14, and a huge computer search excluded 10 (1989). Order 12 is the smallest case still open.
