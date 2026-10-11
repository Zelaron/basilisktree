---
title: Arithmetic Coding
importance: 46
year: 1976
requires: [huffman-coding]
by: [Jorma Rissanen, Richard Pasco]
field: data compression
aliases: [range coding, entropy coding]
links:
  - https://en.wikipedia.org/wiki/Arithmetic_coding
---
Jorma Rissanen and Richard Pasco (1976) independently described coding a whole message as a single number inside a nested interval whose length is the probability of the message. It approaches the entropy bound more closely than Huffman coding and, with adaptive probability models, is used in modern image, video and text compressors.
