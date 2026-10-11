---
title: "4/3 Conjecture for Metric TSP"
status: open
importance: 45
posed: 1995
requires: [christofides-algorithm, linear-programming-in-p]
field: approximation algorithms
aliases: ["4/3 conjecture", subtour LP integrality gap, Held–Karp bound]
links:
  - https://en.wikipedia.org/wiki/Christofides_algorithm
  - https://arxiv.org/abs/2105.10043
progress:
  - year: 1980
    by: [Laurence Wolsey]
    what: "Christofides' tour costs at most 3/2 times the subtour LP value, so the integrality gap is at most 3/2."
  - year: 2020
    by: [Anna Karlin, Nathan Klein, Shayan Oveis Gharan]
    what: "A randomized (3/2 − ε)-approximation with ε > 10^(−36), the first improvement on Christofides for general metrics."
    link: https://arxiv.org/abs/2007.01409
  - year: 2021
    by: [Anna Karlin, Nathan Klein, Shayan Oveis Gharan]
    what: "The integrality gap of the subtour LP is at most 3/2 − 10^(−36)."
    link: https://arxiv.org/abs/2105.10043
  - year: 2023
    by: [Leonid Gurvits, Nathan Klein, Jonathan Leake]
    what: "New capacity bounds for strongly Rayleigh distributions slightly improve the approximation constant."
    link: https://arxiv.org/abs/2311.09072
---
The subtour (Held–Karp) linear program is conjectured to come within a factor 4/3 of the shortest tour on every metric travelling salesman instance (Goemans, 1995). Proving it would point the way to a 4/3-approximation; the best proven ratio is 3/2 − 10^(−36) (Karlin, Klein and Oveis Gharan, 2020), and approximating below 123/122 is NP-hard.
