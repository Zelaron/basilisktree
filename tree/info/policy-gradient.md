---
title: Policy Gradient Methods
importance: 50
year: 1992
requires: [reinforcement-learning, backpropagation]
by: [Ronald Williams, Richard Sutton]
field: machine learning
aliases: [REINFORCE, PPO, actor-critic]
links:
  - https://en.wikipedia.org/wiki/Policy_gradient_method
---
Ronald Williams's REINFORCE algorithm (1992) adjusts a policy's parameters along an estimate of the gradient of expected reward obtained from sampled actions, and Sutton and colleagues proved the policy gradient theorem (1999). Proximal policy optimization (2017), a descendant, is widely used in reinforcement learning from human feedback.
