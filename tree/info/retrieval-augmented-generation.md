---
title: Retrieval-Augmented Generation
importance: 50
year: 2020
requires: [pretrained-transformers, locality-sensitive-hashing]
by: [Patrick Lewis, Ethan Perez, Douwe Kiela, Sebastian Riedel]
field: natural language processing
aliases: [RAG, retrieval augmented generation]
links:
  - https://en.wikipedia.org/wiki/Retrieval-augmented_generation
  - https://arxiv.org/abs/2005.11401
---
Patrick Lewis and colleagues (2020) combined a language model with a retriever that fetches relevant passages from a document collection and conditions the answer on them. Retrieval-augmented generation lets a system cite and update its sources without retraining, and it is widely used in search assistants and enterprise tools.
