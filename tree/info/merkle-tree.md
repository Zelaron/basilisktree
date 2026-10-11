---
title: Merkle Tree
importance: 52
year: 1979
requires: [public-key-crypto]
by: [Ralph Merkle]
field: cryptography
aliases: [hash tree]
links:
  - https://en.wikipedia.org/wiki/Merkle_tree
---
Ralph Merkle's hash trees (patented 1979) summarize a large dataset in one root hash, so that any piece can be verified with only about log n hashes. Merkle trees are used in Git, Bitcoin, peer-to-peer file sharing and certificate transparency logs.
