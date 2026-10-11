---
title: Multiplication & FFT Below n log n
status: claimed
importance: 45
posed: 1971
requires: [fft, integer-multiplication-nlogn]
by: [OpenAI]
with: [OpenAI internal model, Lean 4]
field: algorithms
aliases: [optimality of n log n, Schönhage–Strassen conjecture, FFT lower bound]
links:
  - https://en.wikipedia.org/wiki/Multiplication_algorithm
  - https://en.wikipedia.org/wiki/Fast_Fourier_transform
progress:
  - year: 1973
    by: [Jacques Morgenstern]
    what: "An Ω(n log n) lower bound for FFT algorithms whose constants have bounded size."
  - year: 2019
    by: [David Harvey, Joris van der Hoeven]
    what: "Integer multiplication in O(n log n) time, matching the conjectured optimum."
    link: https://en.wikipedia.org/wiki/Multiplication_algorithm
  - year: 2019
    by: [Peyman Afshani, Casper Benjamin Freksen, Lior Kamma, Kasper Green Larsen]
    what: "If a central conjecture of network coding holds, constant-degree Boolean circuits for multiplication need Ω(n log n) size."
    link: https://arxiv.org/abs/1902.10935
  - year: 2026
    by: [OpenAI]
    with: [OpenAI internal model]
    what: "Claimed multiplication of n-bit integers in O(n (log n)^(1−κ)) time on a multitape Turing machine, with κ = 2^(−182), which would refute the conjectured optimality of n log n in that model (family 109 of OpenAI’s math release, not formalized). Not yet independently reviewed."
    link: https://github.com/openai/math
  - year: 2026
    by: [OpenAI]
    with: [OpenAI internal model, Lean 4]
    what: "Claimed exact length-n discrete Fourier transform in O(n (log n)^(1−δ)) operations, with δ = 10^(−13) (family 130, formalized in Lean). Not yet independently reviewed."
    link: https://github.com/openai/math
---
Can two n-bit integers be multiplied, or a length-n discrete Fourier transform computed, with o(n log n) operations? Schönhage and Strassen (1971) conjectured that n log n is optimal, and Harvey and van der Hoeven reached O(n log n) in 2019. Matching lower bounds are known only in restricted models or under conjectures, so either a faster algorithm or a general lower bound would settle it. OpenAI’s October 2026 release claims both.
