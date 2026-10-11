---
title: Randomized Primality Testing
importance: 54
year: 1977
requires: [fermat-little-theorem, probability, complexity-theory]
by: [Robert Solovay, Volker Strassen, Gary Miller, Michael Rabin]
field: algorithms
aliases: [Miller–Rabin, Solovay–Strassen, probabilistic primality test]
links:
  - https://en.wikipedia.org/wiki/Miller%E2%80%93Rabin_primality_test
  - https://en.wikipedia.org/wiki/Solovay%E2%80%93Strassen_primality_test
---
Solovay and Strassen (1977), Miller (1976) and Rabin (1980) devised tests that use random witnesses to decide primality with a very small chance of error, far faster than factoring. The Miller–Rabin test remains the standard way to generate the large primes needed for RSA keys.
