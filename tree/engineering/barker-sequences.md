---
title: Barker Sequences Beyond 13
status: claimed
importance: 32
posed: 1953
requires: [radar, algebraic-number-theory]
by: [OpenAI]
with: [OpenAI internal model, Lean 4]
field: telecom
aliases: [Barker codes, Barker conjecture, circulant Hadamard matrices]
links:
  - https://en.wikipedia.org/wiki/Barker_code
progress:
  - year: 1961
    by: [Richard Turyn, J. Storer]
    what: "No Barker sequence of odd length exists beyond 13."
    link: https://doi.org/10.1090/S0002-9939-1961-0125026-2
  - year: 2005
    by: [Ka Hin Leung, Bernhard Schmidt]
    what: "The field descent method rules out even lengths between 13 and 10^22."
    link: https://doi.org/10.1007/s10623-004-1703-7
  - year: 2014
    by: [Peter Borwein, Michael J. Mossinghoff]
    what: "Any longer Barker sequence has length above 4×10^33, apart from one exceptional value."
    link: https://arxiv.org/abs/1306.0045
  - year: 2016
    by: [Ka Hin Leung, Bernhard Schmidt]
    what: "The anti-field-descent method removes the exceptional value, so none exists for 13 < n ≤ 4×10^33."
    link: https://doi.org/10.1016/j.jcta.2015.11.005
  - year: 2026
    by: [OpenAI]
    with: [OpenAI internal model, Lean 4]
    what: "Claimed proof that no Barker sequence longer than 13 exists, through a proof that circulant Hadamard matrices exist only in orders 1 and 4 (family 179 of OpenAI’s math release, formalized in Lean). Not yet independently reviewed."
    link: https://github.com/openai/math
---
Is there a Barker sequence longer than 13, a string of ±1 whose off-peak aperiodic autocorrelations are all 0 or ±1? Barker introduced them in 1953; they suit radar pulse compression, and the length-11 code is used in 802.11b Wi-Fi. Odd lengths beyond 13 are impossible (1961) and an even one would need length above 4×10^33; OpenAI’s October 2026 release claims a proof that none exists.
