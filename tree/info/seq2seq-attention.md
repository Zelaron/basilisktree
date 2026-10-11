---
title: Sequence-to-Sequence & Attention
importance: 58
year: 2014
requires: [lstm, deep-learning]
by: [Ilya Sutskever, Oriol Vinyals, Quoc Le, Dzmitry Bahdanau, Kyunghyun Cho, Yoshua Bengio]
field: natural language processing
aliases: [seq2seq, encoder-decoder, neural machine translation, attention mechanism]
links:
  - https://en.wikipedia.org/wiki/Seq2seq
  - https://arxiv.org/abs/1409.3215
  - https://arxiv.org/abs/1409.0473
---
Ilya Sutskever, Oriol Vinyals and Quoc Le (2014) mapped a sentence to a vector with one recurrent network and decoded a translation with another, and Dzmitry Bahdanau, Kyunghyun Cho and Yoshua Bengio (2014) added learned attention over the source words. Neural translation beat phrase-based systems, and Google adopted it in 2016.
