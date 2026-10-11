---
title: Deletion Channel Capacity
status: open
importance: 35
posed: 1961
requires: [information-theory]
field: information theory
aliases: [binary deletion channel, synchronization errors]
links:
  - https://en.wikipedia.org/wiki/Deletion_channel
progress:
  - year: 1967
    by: [Roland Dobrushin]
    what: "A coding theorem for channels with synchronization errors: the capacity exists and equals a limit of normalized mutual information."
  - year: 2007
    by: [Eleni Drinea, Michael Mitzenmacher]
    what: "Capacity at least 0.1185(1 − d) for every deletion probability d."
  - year: 2013
    by: [Yashodhan Kanoria, Andrea Montanari]
    what: "Optimal coding and a precise capacity expansion for small deletion probabilities."
  - year: 2018
    by: [Mahdi Cheraghchi]
    what: "Upper bound (1 − d) log₂ φ for d ≥ 1/2, with φ the golden ratio, from a convex-programming method."
    link: https://arxiv.org/abs/1711.01630
---
What is the capacity of the binary channel that deletes each transmitted bit independently with probability d, without telling the receiver where? Studied since Gallager (1961) and Dobrushin (1967), it has no closed form; as d approaches 1 the capacity is known only to lie between about 0.1185(1 − d) and 0.4143(1 − d).
