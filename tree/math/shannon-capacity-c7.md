---
title: Shannon Capacity of the 7-Cycle
status: open
importance: 32
posed: 1956
requires: [information-theory, lovasz-theta]
field: combinatorics
aliases: [zero-error capacity, Θ(C7)]
links:
  - https://en.wikipedia.org/wiki/Shannon_capacity_of_a_graph
progress:
  - year: 1979
    by: [László Lovász]
    what: "The theta function proved that the 5-cycle has capacity √5 and bounds the 7-cycle's capacity above by about 3.3177."
  - year: 2019
    by: [Sven Polak, Alexander Schrijver]
    with: [computer search]
    what: "An independent set of 367 words in the fifth strong power of the 7-cycle gives a lower bound of 367^(1/5) > 3.2578."
    link: https://arxiv.org/abs/1808.07438
  - year: 2026
    by: [Nathaniel Itty, Christopher D. Rosin, Chase Carstensen, Daniel Reichman]
    with: [large language model]
    what: "An independent set of size 134,753 in the tenth power, found by working iteratively with a large language model, gives a lower bound above 3.258020."
    link: https://arxiv.org/abs/2607.21517
  - year: 2026
    by: [Yu Gao, Pjotr Buys, Sven Polak, Jeroen Zuiddam, Ravi Tandon]
    with: [Lean 4]
    what: "Recursive product constructions built on these sets (Gao), extended by Buys, Polak and Zuiddam with bounds checked in Lean and refined by Tandon, raised the lower bound to about 3.2588."
    link: https://arxiv.org/abs/2607.29681
---
Shannon (1956) defined the zero-error capacity of a noisy channel, which depends only on the graph recording which symbols can be confused. For the 5-cycle Lovász proved it is √5 (1979), but for the 7-cycle it is unknown: computer constructions in 2026 raised the lower bound to about 3.2588, while the Lovász theta function caps it at 3.3177.
