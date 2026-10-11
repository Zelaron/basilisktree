---
title: Forecasting Influenza Evolution
status: open
importance: 42
posed: 2014
requires: [phylogenetic-inference, sir-model, next-gen-sequencing]
field: epidemiology
aliases: [vaccine strain selection, antigenic drift prediction, predicting influenza]
links:
  - https://en.wikipedia.org/wiki/Antigenic_drift
  - https://doi.org/10.1038/nature13087
progress:
  - year: 2014
    by: [Marta Łuksza, Michael Lässig]
    what: "A fitness model for haemagglutinin that scores adaptive epitope changes against deleterious mutations predicted which H3N2 strains would spread the following year, and proposed this as a principled basis for vaccine selection."
    link: https://doi.org/10.1038/nature13087
  - year: 2020
    by: [John Huddleston, Trevor Bedford]
    what: "Combining laboratory measurements of antigenic drift with sequence-based estimates of functional constraint forecast H3N2 populations a year ahead better than sequence-only fitness models."
    link: https://doi.org/10.7554/eLife.60067
  - year: 2021
    by: [Pierre Barrat-Charlaix, Richard A. Neher]
    what: "Found individual amino-acid substitutions in H3N2 largely unpredictable: current frequency beat epitope membership and local branching index at predicting fixation, as expected under neutral dynamics."
    link: https://doi.org/10.1093/molbev/msab065
  - year: 2025
    by: [Wenxian Shi, Regina Barzilay]
    with: [VaxSeer]
    what: "VaxSeer, which predicts both dominance and antigenic match, picked strains with a better match to circulating viruses than the WHO recommendation in 9 of 10 H3N2 seasons and 6 of 10 H1N1 seasons from 2012 to 2021. The test was retrospective."
    link: https://doi.org/10.1038/s41591-025-03917-y
---
Twice a year the WHO must choose which influenza strains go into a vaccine made nine months later. Fitness models have tried to predict the winning lineage since Łuksza and Lässig in 2014. The test is beating those choices prospectively on public sequence data, scored by antigenic match to the strains that actually circulate, which no method has yet been shown to do outside a retrospective backtest.
