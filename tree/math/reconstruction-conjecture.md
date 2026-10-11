---
title: Graph Reconstruction Conjecture
status: open
importance: 40
posed: 1957
requires: [graph-theory]
field: graph theory
aliases: [Kelly–Ulam conjecture, Ulam's conjecture]
links:
  - https://en.wikipedia.org/wiki/Reconstruction_conjecture
progress:
  - year: 1957
    by: [Paul Kelly]
    what: "Every tree is determined by its vertex-deleted subgraphs."
  - year: 1977
    by: [Paul Stockmeyer]
    what: "Infinite families of tournaments that cannot be reconstructed, so the analogue for directed graphs is false."
  - year: 1990
    by: [Béla Bollobás]
    what: "Almost every graph is determined by just three of its vertex-deleted subgraphs."
  - year: 2022
    by: [Brendan McKay]
    with: [computer search]
    what: "Computer verification for all graphs with at most 13 vertices."
---
Is every graph with at least three vertices determined, up to isomorphism, by the collection of subgraphs obtained by deleting one vertex at a time? Kelly (1957) and Ulam (1960) conjectured yes. It is proved for trees, regular graphs and disconnected graphs and for almost all graphs, and checked by computer for every graph with at most 13 vertices; for directed graphs it fails.
