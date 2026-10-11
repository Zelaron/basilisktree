---
title: Parity Games in Polynomial Time
status: open
importance: 40
posed: 1991
requires: [model-checking, complexity-theory]
field: formal methods
aliases: [solving parity games, μ-calculus model checking]
links:
  - https://en.wikipedia.org/wiki/Parity_game
progress:
  - year: 1991
    by: [E. Allen Emerson, Charanjit Jutla]
    what: "Memoryless determinacy of parity games, which puts deciding the winner in NP ∩ coNP."
  - year: 1998
    by: [Marcin Jurdziński]
    what: "Deciding the winner is in UP ∩ coUP."
  - year: 2017
    by: [Cristian S. Calude, Sanjay Jain, Bakhadyr Khoussainov, Wei Li, Frank Stephan]
    what: "The first quasipolynomial-time algorithm."
  - year: 2019
    by: [Wojciech Czerwiński, Laure Daviaud, Nathanaël Fijalkow, Marcin Jurdziński, Ranko Lazić, Paweł Parys]
    what: "Quasipolynomial lower bounds for every separating-automaton approach, which covers the known quasipolynomial algorithms."
    link: https://arxiv.org/abs/1807.10546
---
Two players move a token around a graph whose vertices carry priorities, and the winner is decided by the parity of the highest priority seen infinitely often: can the winner be computed in polynomial time? The problem is equivalent to model checking the modal μ-calculus, lies in NP ∩ coNP (1991) and has quasipolynomial algorithms (2017).
