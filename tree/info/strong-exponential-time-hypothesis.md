---
title: Strong Exponential Time Hypothesis
status: open
importance: 55
posed: 2001
requires: [complexity-theory, dpll]
field: fine-grained complexity
aliases: [SETH, exponential time hypothesis]
links:
  - https://en.wikipedia.org/wiki/Exponential_time_hypothesis
progress:
  - year: 1998
    by: [Ramamohan Paturi, Pavel Pudlák, Michael Saks, Francis Zane]
    what: "The PPSZ algorithm solves k-SAT in 2^((1 − Θ(1/k))n) time, still consistent with SETH."
  - year: 2005
    by: [Ryan Williams]
    what: "A substantially faster algorithm for orthogonal vectors would refute SETH, the first of many fine-grained reductions from it."
  - year: 2015
    by: [Arturs Backurs, Piotr Indyk]
    what: "Edit distance in strongly subquadratic time would refute SETH."
    link: https://arxiv.org/abs/1412.0348
---
Is it true that for every ε > 0 some k-SAT needs 2^((1−ε)n) time, so CNF satisfiability has no algorithm much faster than brute force? Impagliazzo and Paturi raised it around 2001; hundreds of tight conditional lower bounds assume it, and proving it would separate P from NP. The claimed October 2026 refutation of the 3SUM and APSP hypotheses leaves it untouched.
