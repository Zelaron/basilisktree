---
title: BEC in an Interacting Bose Gas
status: claimed
importance: 48
posed: 1956
requires: [bose-einstein-statistics, statistical-mechanics]
by: [OpenAI]
with: [OpenAI internal model, Lean 4]
field: mathematical physics
aliases: [Bose–Einstein condensation, dilute Bose gas, hard-sphere Bose gas, Bogoliubov depletion]
links:
  - https://en.wikipedia.org/wiki/Bose%E2%80%93Einstein_condensate
  - https://en.wikipedia.org/wiki/Off-diagonal_long-range_order
  - https://github.com/openai/math
progress:
  - year: 2002
    by: [Elliott Lieb, Robert Seiringer]
    what: "Proved complete condensation in the ground state of a dilute trapped gas in the Gross–Pitaevskii limit."
  - year: 2019
    by: [Andreas Deuchert, Robert Seiringer, Jakob Yngvason]
    what: "Extended this to positive temperature in the same dilute trapped limit."
  - year: 2026
    by: [OpenAI]
    with: [OpenAI internal model, Lean 4]
    what: "Claimed proof of condensation at a positive, volume-independent temperature for the dilute three-dimensional hard-sphere gas in the thermodynamic limit, plus Bogoliubov's depletion law at zero temperature (family 267 of OpenAI’s math release, formalized in Lean). Not yet independently reviewed."
    link: https://github.com/openai/math
---
Einstein predicted Bose–Einstein condensation for an ideal gas in 1925, and Oliver Penrose and Lars Onsager defined it for interacting systems in 1956, but no proof showed it for an interacting gas in the thermodynamic limit outside special scaling limits. OpenAI’s October 2026 release claims it for a dilute hard-sphere gas at positive temperature, formalized in Lean but not yet independently reviewed.
