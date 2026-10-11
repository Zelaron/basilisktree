---
title: Brain-to-Text Decoding
status: open
importance: 50
posed: 2015
requires: [speech-neuroprosthesis, eeg, deep-learning]
field: neuroscience
aliases: [speech BCI, speech decoding, Brain-to-Text benchmark, noninvasive brain decoding]
links:
  - https://en.wikipedia.org/wiki/Brain%E2%80%93computer_interface
  - https://www.kaggle.com/competitions/brain-to-text-25/leaderboard
  - https://arxiv.org/abs/2412.17227
progress:
  - year: 2015
    by: [Christian Herff, Tanja Schultz]
    what: "Brain-To-Text decoded spoken phrases from electrocorticography in epilepsy patients by modelling phones with speech-recognition methods; the best word error rate was 25%, with a 10-word dictionary."
    link: https://doi.org/10.3389/fnins.2015.00217
  - year: 2024
    by: [Nicholas S. Card, Sergey D. Stavisky, David M. Brandman]
    what: "In a man with ALS, 256 electrodes in the precentral gyrus decoded attempted speech with a 125,000-word vocabulary: 2.5% word error on prompted sentences and 3.7% in conversation, at about 32 words per minute, sustained over 8.4 months."
    link: https://doi.org/10.1056/NEJMoa2314132
  - year: 2025
    by: [Infera-Neuro]
    what: "The Brain-to-text '25 Kaggle benchmark, run by the UC Davis Neuroprosthetics Lab on held-out sentences attempted by a man with ALS, drew more than 460 teams; the winning team reached 1.54% word error on the private test set, against a 6.70% baseline."
    link: https://www.kaggle.com/competitions/brain-to-text-25/leaderboard
  - year: 2026
    by: [Mingfang Zhang, Jarod Lévy, Jean-Rémi King]
    what: "Decoding sentences typed by nine volunteers from noninvasive MEG alone, after 10 hours of recording each, reached an average word error rate of 39%; for the best participant, half the sentences had at most one wrong word."
    link: https://ai.meta.com/research/publications/accurate-decoding-of-natural-sentences-from-non-invasive-brain-recordings/
---
Decode the words a person is trying to say from recordings of their brain activity. With implanted electrodes this almost works: the winning word error rate in the Brain-to-text '25 benchmark on Kaggle, scored on held-out sentences from a man with ALS, was 1.54% (December 2025). Solving it means similar accuracy without surgery; decoding typed sentences from MEG still averages 39% word error (2026).
