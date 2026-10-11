---
title: Stability of Switched Linear Systems
status: open
importance: 36
posed: 2000
requires: [feedback-stability, linear-algebra, turing-machine]
field: control
aliases: [joint spectral radius, "JSR < 1", stability under arbitrary switching]
links:
  - https://en.wikipedia.org/wiki/Joint_spectral_radius
progress:
  - year: 2000
    by: [Vincent Blondel, John Tsitsiklis]
    what: "Deciding whether the joint spectral radius is at most 1, or whether all products stay bounded, is undecidable, even for a pair of matrices."
    link: https://doi.org/10.1016/S0167-6911(00)00049-9
  - year: 2002
    by: [Thierry Bousch, Jean Mairesse]
    what: "The finiteness conjecture, which would have made the strict question decidable, is false: the joint spectral radius need not be attained by any finite product."
    link: https://doi.org/10.1090/S0894-0347-01-00378-2
  - year: 2011
    by: [Kevin G. Hare, Ian D. Morris, Nikita Sidorov, Jacques Theys]
    what: "An explicit counterexample to the finiteness conjecture."
    link: https://doi.org/10.1016/j.aim.2010.12.012
  - year: 2013
    by: [Nicola Guglielmi, Vladimir Protasov]
    what: "An invariant-polytope algorithm computes the exact joint spectral radius, with a certificate, for many families of matrices."
    link: https://doi.org/10.1007/s10208-012-9121-0
---
Given a finite set of matrices, decide whether every long product of them shrinks to zero, that is whether their joint spectral radius ρ is below 1; this is the stability of a linear system that switches arbitrarily among them. Blondel and Tsitsiklis proved in 2000 that deciding ρ ≤ 1 is undecidable, but whether ρ < 1 is decidable is unknown. Solving it means an algorithm or an undecidability proof.
