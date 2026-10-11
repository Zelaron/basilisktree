---
title: Quasi-Riemann Hypothesis
status: claimed
importance: 72
grand: true
year: 2026
requires: [zeta-function, prime-number-theorem]
by: [OpenAI]
with: [OpenAI internal model, Lean 4]
field: analytic number theory
aliases: [zero-free half-plane, quasi-RH]
links:
  - https://en.wikipedia.org/wiki/Riemann_hypothesis
  - https://github.com/openai/math
progress:
  - year: 1899
    by: [Charles-Jean de la Vallée Poussin]
    what: "A zero-free region σ > 1 − c/log t, which narrows toward Re s = 1 as t grows."
  - year: 1958
    by: [Ivan Vinogradov, Nikolai Korobov]
    what: "The widest known region of this kind, σ > 1 − c/((log t)^(2/3) (log log t)^(1/3)), still narrowing toward Re s = 1."
  - year: 2026
    by: [OpenAI]
    with: [OpenAI internal model, Lean 4]
    what: "Claimed proof that every Dirichlet L-function, including ζ(s), is zero-free in Re s > 7/8, with a companion proof of Re s > 11/12 (family 003 of OpenAI's math release, formalized in Lean). Not yet independently reviewed."
    link: https://github.com/openai/math
---
Is there some δ > 0 such that ζ(s) has no zeros with real part greater than 1 − δ? The [[riemann-hypothesis|Riemann hypothesis]] says δ = ½ works, yet every zero-free region proved from de la Vallée Poussin (1899) to Vinogradov and Korobov (1958) narrows toward the line Re s = 1 at large heights. A zero-free half-plane would give a power saving in the prime number theorem.
