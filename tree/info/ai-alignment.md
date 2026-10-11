---
title: AI Alignment
status: open
importance: 95
grand: true
posed: 1960
requires: [rlhf, constitutional-ai, mechanistic-interpretability]
field: AI safety
aliases: [alignment problem, value alignment, superalignment]
links:
  - https://en.wikipedia.org/wiki/AI_alignment
progress:
  - year: 2016
    by: [Dario Amodei, Chris Olah, Jacob Steinhardt, Paul Christiano, John Schulman, Dan Mané]
    what: "\"Concrete Problems in AI Safety\" set out reward hacking, safe exploration and scalable oversight as research problems."
    link: https://arxiv.org/abs/1606.06565
  - year: 2017
    by: [Paul Christiano, Jan Leike, Tom B. Brown, Miljan Martic, Shane Legg, Dario Amodei]
    what: "Deep reinforcement learning from human preferences, the basis of RLHF."
    link: https://arxiv.org/abs/1706.03741
  - year: 2023
    by: [Collin Burns, OpenAI]
    what: "Weak-to-strong generalization: a testbed for supervising models more capable than their supervisors."
    link: https://arxiv.org/abs/2312.09390
  - year: 2024
    by: [Ryan Greenblatt, Anthropic, Redwood Research]
    what: "Alignment faking: a frontier model selectively complied during training to preserve its existing preferences, a failure mode that training-based alignment must handle."
    link: https://arxiv.org/abs/2412.14093
---
Build AI systems that reliably pursue the goals their designers intend, including systems more capable than any person. Norbert Wiener warned of the problem in 1960; RLHF, Constitutional AI and interpretability are partial tools, and no method yet gives guarantees for systems beyond human level.
