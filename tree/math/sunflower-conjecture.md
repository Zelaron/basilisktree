---
title: Sunflower Conjecture
status: open
importance: 45
posed: 1960
requires: [erdos-ko-rado, probabilistic-method]
field: combinatorics
aliases: [Erdős–Rado sunflower conjecture, sunflower lemma]
links:
  - https://en.wikipedia.org/wiki/Sunflower_(mathematics)
progress:
  - year: 1960
    by: [Paul Erdős, Richard Rado]
    what: "The sunflower lemma: more than k!(r − 1)ᵏ sets of size k always contain a sunflower with r sets."
  - year: 2019
    by: [Ryan Alweiss, Shachar Lovett, Kewen Wu, Jiapeng Zhang]
    what: "Cut the bound to roughly (log k)ᵏ for each fixed r, by proving a statement about robust sunflowers."
    link: https://arxiv.org/abs/1908.08483
  - year: 2020
    by: [Anup Rao]
    what: "A simpler proof with the bound (O(r log(rk)))ᵏ."
  - year: 2021
    by: [Tolson Bell, Suchakree Chueluecha, Lutz Warnke]
    what: "Improved the bound to (O(r log k))ᵏ, the best known."
    link: https://arxiv.org/abs/2009.09327
---
A sunflower is a collection of sets whose pairwise intersections are all the same. Erdős and Rado (1960) conjectured that for each r there is a constant C such that any family of more than Cᵏ sets of size k contains a sunflower of r sets. It is open even for r = 3; the best bound, of order (r log k)ᵏ, comes from a 2019 breakthrough and its refinements.
