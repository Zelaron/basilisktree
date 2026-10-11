---
title: Byzantine Agreement
importance: 54
year: 1982
requires: [logical-clocks]
by: [Leslie Lamport, Robert Shostak, Marshall Pease]
field: distributed systems
aliases: [Byzantine generals problem, Byzantine fault tolerance, PBFT]
links:
  - https://en.wikipedia.org/wiki/Byzantine_fault
---
Lamport, Shostak and Pease (1980, 1982) showed in the 'Byzantine generals' problem that without digital signatures, n machines can agree despite f arbitrarily faulty or malicious members only if n is greater than 3f. Practical Byzantine fault tolerance (Castro and Liskov, 1999) and blockchain consensus protocols build on the result.
