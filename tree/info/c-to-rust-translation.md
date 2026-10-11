---
title: Automatic C-to-Rust Translation
status: open
importance: 45
posed: 2024
requires: [c-language, rust-language, coding-agents]
field: programming languages
aliases: [TRACTOR, C2Rust, memory-safe translation]
links:
  - https://www.darpa.mil/research/programs/translating-all-c-to-rust
  - https://arxiv.org/abs/2609.25121
progress:
  - year: 2024
    by: [DARPA]
    what: "Launched the TRACTOR program to translate legacy C into Rust of the quality a skilled Rust developer would write."
    link: https://www.darpa.mil/research/programs/translating-all-c-to-rust
  - year: 2026
    by: [MIT Lincoln Laboratory]
    what: "Released the TRACTOR benchmark: test batteries and milestone projects scored for correctness, safety, idiomaticity and performance."
    link: https://arxiv.org/abs/2609.25121
---
Translate legacy C programs automatically into safe, idiomatic Rust that passes the original tests and performs comparably, removing memory-safety bugs at scale. DARPA's TRACTOR program (2024) set this goal, with benchmarks from MIT Lincoln Laboratory in 2026; transpilers such as C2Rust still emit unsafe, unidiomatic Rust.
