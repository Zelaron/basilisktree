---
title: Neural Radiance Fields
importance: 42
year: 2020
requires: [deep-learning, ray-tracing]
by: [Ben Mildenhall, Pratul Srinivasan, Matthew Tancik, Jonathan Barron, Ravi Ramamoorthi, Ren Ng]
field: computer graphics
aliases: [NeRF, novel view synthesis, neural rendering]
links:
  - https://en.wikipedia.org/wiki/Neural_radiance_field
  - https://arxiv.org/abs/2003.08934
---
Ben Mildenhall and colleagues (2020) represented a 3D scene as a small neural network that maps a position and viewing direction to colour and density, rendered by integrating along camera rays. Trained on a set of photographs, a neural radiance field synthesizes new views of the scene and started a wave of neural 3D reconstruction.
