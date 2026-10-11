---
title: Computational Hit Finding
status: open
importance: 44
posed: 2022
requires: [drug-receptors, alphafold3, molecular-dynamics-proteins]
field: pharmacology
aliases: [CACHE challenge, virtual screening, hit finding]
links:
  - https://en.wikipedia.org/wiki/Virtual_screening
  - https://cache-challenge.org/
  - https://doi.org/10.1038/s41570-022-00363-z
progress:
  - year: 2022
    by: [Suzanne Ackloo, Cheryl Arrowsmith, Matthieu Schapira]
    what: "CACHE launched as a public benchmark in which teams nominate catalogue compounds for a target and one laboratory tests every nomination, with all data released without intellectual property restrictions."
    link: https://doi.org/10.1038/s41570-022-00363-z
  - year: 2024
    by: [Fengling Li, Suzanne Ackloo, Matthieu Schapira]
    what: "In challenge #1, against the ligand-free WDR domain of LRRK2, 23 teams nominated 1,955 compounds and 73 bound below 150 micromolar. Seven series were confirmed in two assays at 18 to 140 micromolar, and machine-learning-accelerated methods did about as well as exhaustive docking."
    link: https://www.biorxiv.org/content/10.1101/2024.07.18.603797v1
  - year: 2025
    by: [Oleksandra Herasymenko, Matthieu Schapira]
    what: "In challenge #2, against the RNA site of the SARS-CoV-2 helicase Nsp13, 23 teams nominated 1,957 compounds and 0.7% were confirmed as binders. Two scaffolds inhibited helicase unwinding in vitro, the better one at IC50 8.6 micromolar."
    link: https://pmc.ncbi.nlm.nih.gov/articles/PMC12323591/
  - year: 2026
    by: [Conscience]
    what: "Results of challenge #5, announced in August 2026 for the GPCR MCHR1, had 24 teams nominate 1,455 compounds, of which 26 gave full dose-response inhibition at Ki 170 nM to 30 micromolar. Nine workflows produced confirmed ligands."
    link: https://cache-challenge.org/node/3000
---
Nominate compounds from a catalogue that actually bind a protein with no known ligand, instead of screening the catalogue. CACHE tests every nomination in one laboratory and publishes the misses: challenge #1 (LRRK2, 2024) had 73 of 1,955 nominations bind below 150 micromolar, and challenge #2 (Nsp13, 2025) 0.7%. Rounds 7 and 8 run in 2026, with results at cache-challenge.org.
