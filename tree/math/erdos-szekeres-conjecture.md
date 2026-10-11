---
title: Erdős–Szekeres Conjecture
status: open
importance: 40
posed: 1935
requires: [erdos-szekeres, empty-hexagon]
field: combinatorics
aliases: [happy ending problem, convex polygon problem]
links:
  - https://en.wikipedia.org/wiki/Happy_ending_problem
progress:
  - year: 1961
    by: [Paul Erdős, George Szekeres]
    what: "Constructed 2ⁿ⁻² points in general position with no n in convex position, so the conjectured value cannot be lowered."
  - year: 2006
    by: [George Szekeres, Lindsay Peters]
    with: [computer search]
    what: "A computer search showed that every 17 points in general position contain a convex hexagon, settling n = 6."
  - year: 2016
    by: [Andrew Suk]
    what: "Proved that 2^(n+o(n)) points suffice, matching the conjecture up to lower-order terms in the exponent."
    link: https://arxiv.org/abs/1604.08657
  - year: 2020
    by: [Andreas Holmsen, Hossein Nassajian Mojarrad, János Pach, Gábor Tardos]
    what: "Sharpened the error term to 2^(n+O(√(n log n)))."
---
Erdős and Szekeres proved in 1935 that every large enough set of points in general position in the plane contains n points in convex position, and conjectured that 2ⁿ⁻² + 1 points always suffice, which would be sharp. It is confirmed for n ≤ 6, and Suk (2016) proved that 2^(n+o(n)) points suffice. The next case asks whether every 33 points in general position contain a convex heptagon.
