---
title: Spectre & Meltdown
importance: 48
year: 2018
requires: [microprocessor]
by: [Jann Horn, Paul Kocher, Moritz Lipp, Daniel Gruss]
field: security
aliases: [speculative execution attacks, side channels, transient execution]
links:
  - https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)
  - https://en.wikipedia.org/wiki/Meltdown_(security_vulnerability)
---
Disclosed in January 2018, Spectre (Jann Horn; Paul Kocher and others) and Meltdown (Moritz Lipp, Daniel Gruss and others) showed that speculative execution in modern processors can leak secrets across security boundaries through cache timing. Most high-performance processors of the previous two decades were affected, and chip designs and operating systems were changed in response.
