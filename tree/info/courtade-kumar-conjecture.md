---
title: Courtade–Kumar Conjecture
status: claimed
importance: 32
posed: 2013
requires: [information-theory, fourier-analysis]
by: [OpenAI]
with: [OpenAI internal model, Lean 4]
field: information theory
aliases: [most informative Boolean function, dictator conjecture]
links:
  - https://arxiv.org/abs/1302.2512
progress:
  - year: 2015
    by: [Or Ordentlich, Ofer Shayevitz, Omri Weinstein]
    what: "An improved upper bound for balanced functions when 1/3 < α < 1/2."
    link: https://arxiv.org/abs/1505.05794
  - year: 2016
    by: [Alex Samorodnitsky]
    what: "Combined with the previous bound, the conjecture holds in the high-noise regime α ≥ 1/2 − δ for an absolute constant δ > 0."
    link: https://arxiv.org/abs/1508.01464
  - year: 2016
    by: [Georg Pichler, Pablo Piantanida, Gerald Matz]
    what: "The two-function version holds: I(f(X); g(Y)) ≤ I(X; Y) for all Boolean f and g, with equality only for dictators."
    link: https://arxiv.org/abs/1604.02109
  - year: 2026
    by: [OpenAI]
    with: [OpenAI internal model, Lean 4]
    what: "Claimed proof of the Courtade–Kumar conjecture, together with the Hellinger conjecture for every output bias and noise level (family 119 of OpenAI’s math release, formalized in Lean). Not yet independently reviewed."
    link: https://github.com/openai/math
---
Let X be n uniform random bits and Y a copy with each bit flipped independently with probability α. Courtade and Kumar conjectured in 2013 that every Boolean function f satisfies I(f(X); Y) ≤ 1 − h(α), so a single coordinate is the most informative one-bit summary. It is proved for α close to 1/2 and open in general. OpenAI’s October 2026 release claims a proof.
