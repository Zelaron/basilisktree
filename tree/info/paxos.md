---
title: Paxos Consensus
importance: 54
year: 1989
requires: [flp-impossibility, logical-clocks]
by: [Leslie Lamport]
field: distributed systems
aliases: [Part-Time Parliament, consensus protocol, Raft]
links:
  - https://en.wikipedia.org/wiki/Paxos_(computer_science)
---
Leslie Lamport devised Paxos in 1989 and published it in 1998 as 'The Part-Time Parliament', a protocol by which a majority of unreliable machines agree on a sequence of values. Variants run in Google's Chubby and Spanner, and Raft (2014) was designed as a more understandable alternative.
