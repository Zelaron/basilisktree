---
title: CLIP
importance: 52
year: 2021
requires: [pretrained-transformers, imagenet]
by: [Alec Radford, OpenAI]
field: machine learning
aliases: [contrastive language-image pretraining, zero-shot image classification]
links:
  - https://en.wikipedia.org/wiki/Contrastive_Language%E2%80%93Image_Pre-training
  - https://arxiv.org/abs/2103.00020
---
Alec Radford and colleagues at OpenAI (2021) trained image and text encoders on 400 million image-caption pairs from the web so that matching pairs map to nearby vectors. CLIP classifies images into categories described in words with no task-specific training, and its text encoder guides many image generators.
