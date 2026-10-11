---
title: Landau–Siegel Zeros
status: claimed
importance: 60
grand: true
posed: 1935
requires: [dirichlet-theorem, zeta-function]
by: [OpenAI]
with: [OpenAI internal model, Lean 4]
field: analytic number theory
aliases: [Siegel zeros, exceptional zeros]
links:
  - https://en.wikipedia.org/wiki/Siegel_zero
  - https://github.com/openai/math
progress:
  - year: 1935
    by: [Carl Ludwig Siegel]
    what: "L(1, χ) ≥ C(ε) q^(−ε) for every ε > 0, with a constant that cannot be computed because a Siegel zero cannot be excluded."
  - year: 1986
    by: [Dorian Goldfeld, Benedict Gross, Don Zagier]
    what: "An effective lower bound for class numbers of imaginary quadratic fields that sidesteps Siegel zeros."
  - year: 2022
    by: [Yitang Zhang]
    what: "Posted a claimed effective bound L(1, χ) ≫ (log q)^(−2022), a weak form of excluding Siegel zeros; it has not been confirmed."
    link: https://arxiv.org/abs/2211.02515
  - year: 2026
    by: [OpenAI]
    with: [OpenAI internal model, Lean 4]
    what: "Claimed proof that every Dirichlet L-function is zero-free in Re s > 7/8, which would rule out Siegel zeros (family 003 of OpenAI's math release, formalized in Lean). Not yet independently reviewed."
    link: https://github.com/openai/math
---
Can the L-function of a real Dirichlet character mod q have a real zero within about c/log q of s = 1? Such Siegel zeros are believed not to exist, but they have never been ruled out, which is why Siegel's theorem (1935) and the many results that depend on it give no computable constants. A claim in OpenAI's October 2026 math release ([[quasi-riemann-hypothesis]]) would exclude them.
