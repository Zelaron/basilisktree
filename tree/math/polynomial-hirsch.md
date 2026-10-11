---
title: Polynomial Hirsch Conjecture
status: open
importance: 46
requires: [hirsch-disproof, linear-programming]
field: optimization
aliases: [polytope diameter, simplex method]
links:
  - https://en.wikipedia.org/wiki/Hirsch_conjecture
progress:
  - year: 1970
    by: [David Larman]
    what: "The diameter is at most n·2^(d − 3), linear in the number of facets for fixed dimension."
  - year: 1992
    by: [Gil Kalai, Daniel Kleitman]
    what: "A quasi-polynomial bound, n^(log₂ d + 2)."
  - year: 2014
    by: [Michael Todd]
    what: "Improved it to (n − d)^(log₂ d)."
---
Is the diameter of the graph of every d-dimensional polytope with n facets bounded by a polynomial in n and d? A no would rule out any polynomial-time pivot rule for the simplex method. Santos's 2010 counterexample to the exact Hirsch bound n − d does not settle it, and the best known upper bound is quasi-polynomial (Kalai and Kleitman, 1992).
