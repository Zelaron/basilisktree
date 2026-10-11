---
title: FLP Impossibility
importance: 50
year: 1985
requires: [byzantine-agreement]
by: [Michael Fischer, Nancy Lynch, Michael Paterson]
field: distributed systems
aliases: [FLP, consensus impossibility]
links:
  - https://en.wikipedia.org/wiki/Consensus_(computer_science)
---
Michael Fischer, Nancy Lynch and Michael Paterson (1985) proved that no deterministic protocol can guarantee consensus in an asynchronous system if even one process may crash. Practical systems escape the result with timeouts or randomness, and the paper won the 2001 Dijkstra Prize.
