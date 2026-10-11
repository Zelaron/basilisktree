---
title: Rendezvous Search Problem
status: open
importance: 32
posed: 1976
requires: [probability, game-theory]
field: operations research
aliases: [Mozart Cafe rendezvous problem, Anderson–Weber strategy, symmetric rendezvous]
links:
  - https://en.wikipedia.org/wiki/Rendezvous_problem
progress:
  - year: 1990
    by: [Edward J. Anderson, Richard Weber]
    what: "Proposed the stay-or-search strategy for n locations, conjectured optimal."
    link: https://doi.org/10.2307/3214827
  - year: 1995
    by: [Steve Alpern]
    what: "Formalized rendezvous search as a mathematical problem, including the continuous version."
    link: https://doi.org/10.1137/S0363012993249195
  - year: 2012
    by: [Richard Weber]
    what: "Proved the Anderson–Weber strategy optimal for three locations, the first non-trivial symmetric case solved."
    link: https://doi.org/10.1287/moor.1110.0528
---
Two players placed among n identical locations move each period and want to meet as soon as possible, but cannot agree on roles beforehand (Alpern, 1976); search-and-rescue teams and robots face versions of it. For the symmetric discrete game, Anderson and Weber's 1990 randomized strategy is conjectured optimal, and Weber proved it for n = 3 in 2012. Solving it means proving or refuting optimality for n ≥ 4.
