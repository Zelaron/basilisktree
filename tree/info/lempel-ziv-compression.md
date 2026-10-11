---
title: Lempel–Ziv Compression
importance: 66
year: 1977
requires: [information-theory]
by: [Abraham Lempel, Jacob Ziv]
field: data compression
aliases: [LZ77, LZ78, LZW, DEFLATE]
links:
  - https://en.wikipedia.org/wiki/LZ77_and_LZ78
---
Abraham Lempel and Jacob Ziv's LZ77 (1977) and LZ78 (1978) compress data by replacing repeated strings with references to earlier occurrences, and they approach the entropy of the source without knowing its statistics. Descendants sit inside ZIP, gzip, PNG and GIF.
