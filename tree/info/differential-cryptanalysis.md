---
title: Differential Cryptanalysis
importance: 46
year: 1990
requires: [data-encryption-standard]
by: [Eli Biham, Adi Shamir]
field: cryptanalysis
aliases: [linear cryptanalysis, block cipher attacks]
links:
  - https://en.wikipedia.org/wiki/Differential_cryptanalysis
---
Eli Biham and Adi Shamir (1990) showed that tracing how chosen differences between plaintexts propagate through a cipher can recover keys faster than brute force. DES turned out to have been designed to resist the attack, which IBM had known since 1974, and Matsui's linear cryptanalysis (1993) followed.
