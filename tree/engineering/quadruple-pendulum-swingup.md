---
title: Quadruple Pendulum Swing-Up
status: open
importance: 25
posed: 2013
requires: [model-predictive-control, sim-to-real-robotics]
field: control
aliases: [quadruple inverted pendulum, four-link pendulum on a cart]
links:
  - https://en.wikipedia.org/wiki/Inverted_pendulum
  - https://doi.org/10.1016/j.automatica.2012.12.006
progress:
  - year: 2013
    by: [Tobias Glück, Andreas Eder, Andreas Kugi]
    what: "Swing-up of a triple pendulum on a cart, validated on hardware, with nonlinear feedforward and optimal feedback control."
    link: https://doi.org/10.1016/j.automatica.2012.12.006
  - year: 2024
    by: [Jongchan Baek, Changhyeon Lee, Young Sam Lee, Soo Jeon, Soohee Han]
    what: "Model-free reinforcement learning swings up and balances a real triple inverted pendulum."
    link: https://doi.org/10.1016/j.engappai.2023.107518
  - year: 2025
    by: [Yookyung Oh, Taegun Lee, Sanghyun Ryoo, Kyoung Chul Koh, Soohee Han, Young Sam Lee]
    what: "A model-free reinforcement-learning policy (truncated quantile critics) that swings up and balances a quadruple inverted pendulum in real time from measured data, described as a first for model-free control."
    link: https://doi.org/10.1007/s12555-025-0235-y
---
Swing a four-link pendulum on a cart from hanging straight down to balanced upright, and hold it there, on real hardware. The triple pendulum was first swung up on a cart in 2013, and a 2025 paper reports a model-free reinforcement-learning swing-up of a quadruple pendulum in real time, but its abstract and video do not show a physical rig. A documented, reproducible hardware demonstration would settle it.
