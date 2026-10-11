---
title: Integer Multiplication in O(n log n)
importance: 50
year: 2019
posed: 1971
requires: [karatsuba-multiplication, fft]
by: [David Harvey, Joris van der Hoeven]
field: algorithms
aliases: [Harvey–van der Hoeven algorithm, Schönhage–Strassen]
links:
  - https://en.wikipedia.org/wiki/Multiplication_algorithm
  - https://doi.org/10.4007/annals.2021.193.2.4
---
David Harvey and Joris van der Hoeven (2019) gave an algorithm that multiplies two n-bit integers in O(n log n) time, the bound that Schönhage and Strassen guessed in 1971 to be optimal. It pays off only for astronomically large numbers, and no matching lower bound is known.
