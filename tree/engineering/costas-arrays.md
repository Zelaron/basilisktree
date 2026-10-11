---
title: Costas Arrays of Order 32 and 33
status: open
importance: 30
posed: 1965
requires: [sonar, radar, modular-arithmetic]
field: telecom
aliases: [Costas permutations, Welch construction, Lempel–Golomb construction]
links:
  - https://en.wikipedia.org/wiki/Costas_array
  - https://arxiv.org/abs/1102.5727
progress:
  - year: 1984
    by: [Solomon W. Golomb]
    what: "Algebraic constructions over finite fields, with Lempel, give arrays of order q − 2 for every prime power q."
    link: https://doi.org/10.1016/0097-3165(84)90015-3
  - year: 2011
    by: [Konstantinos Drakakis, Francesco Iorio, Scott Rickard, John Walsh]
    what: "Exhaustive search finds all 164 Costas arrays of order 29, completing enumeration up to 29."
    link: https://doi.org/10.3934/amc.2011.5.547
  - year: 2023
    by: [Lutz Warnke, Bill Correll, Christopher Swanson]
    what: "The fraction of permutations of order n that are Costas arrays decays exponentially."
    link: https://doi.org/10.1109/TIT.2022.3202507
---
A Costas array is an n×n permutation pattern in which the vectors between all pairs of dots are distinct, giving sonar and radar frequency-hopping signals an ideal ambiguity function (Costas, 1965). Constructions and searches give arrays for every order up to 31, but none is known for orders 32 and 33. Solving it means finding one or proving none exists for those orders; whether arrays exist for every n is open.
