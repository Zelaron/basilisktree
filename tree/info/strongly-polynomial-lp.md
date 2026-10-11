---
title: Strongly Polynomial Linear Programming
status: open
importance: 55
posed: 1998
requires: [linear-programming-in-p, interior-point-methods]
field: optimization
aliases: [Smale's 9th problem, strongly polynomial linear programming]
links:
  - https://en.wikipedia.org/wiki/Smale%27s_problems
  - https://en.wikipedia.org/wiki/Linear_programming
progress:
  - year: 1984
    by: [Nimrod Megiddo]
    what: "Linear programming in linear time when the dimension is fixed."
  - year: 1986
    by: [Éva Tardos]
    what: "A strongly polynomial algorithm for linear programs whose constraint matrix has small integer entries, including network flow problems."
  - year: 2017
    by: [Xavier Allamigeon, Pascal Benchimol, Stéphane Gaubert, Michael Joswig]
    what: "Primal-dual log-barrier interior point methods are not strongly polynomial, shown by tropicalizing the central path."
    link: https://arxiv.org/abs/1708.01544
  - year: 2024
    by: [Daniel Dadush, Zhuan Khye Koh, Bento Natura, Neil Olver, László Végh]
    what: "A strongly polynomial algorithm for linear programs with at most two nonzero entries per row or per column, via minimum-cost generalized flow."
---
Smale's ninth problem (1998): decide whether a linear system Ax ≥ b has a solution using a number of arithmetic operations polynomial in the numbers of variables and constraints alone, independent of the size of the entries. Ellipsoid and interior-point methods are only weakly polynomial; strongly polynomial algorithms exist only for special classes such as combinatorial LPs (Tardos, 1986).
