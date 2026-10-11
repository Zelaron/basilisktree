---
title: Sim-to-Real Robot Learning
importance: 44
year: 2019
requires: [reinforcement-learning, deep-learning, legged-robot]
by: [OpenAI, Jemin Hwangbo, Marco Hutter]
with: [reinforcement learning]
field: robotics
aliases: [sim2real, domain randomization, Dactyl]
links:
  - https://en.wikipedia.org/wiki/Products_and_applications_of_OpenAI
  - https://arxiv.org/abs/1910.07113
  - https://doi.org/10.1126/scirobotics.aau5872
---
In 2019 OpenAI trained a neural network entirely in simulation, with randomized physics that grew harder as the policy improved, and it solved a Rubik's Cube with a real robot hand. Jemin Hwangbo, Marco Hutter and colleagues had trained the ANYmal quadruped in simulation to walk and recover from falls, and sim-to-real transfer is now a standard way to train robot controllers.
