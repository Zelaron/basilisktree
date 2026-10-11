---
title: Open Catalyst Challenge
status: open
importance: 34
posed: 2020
requires: [d-band-model, neural-network-potentials]
field: AI for chemistry
aliases: [OC20, adsorption energy prediction]
links:
  - https://en.wikipedia.org/wiki/Heterogeneous_catalysis
  - https://doi.org/10.1021/acscatal.0c04525
progress:
  - year: 2021
    by: [Lowik Chanussot, Abhishek Das, Muhammed Shuaibi, Zachary Ulissi]
    what: "Published OC20, over a million DFT relaxations of adsorbates on catalyst surfaces, with tasks scored by the share of predicted energies within 0.02 eV of DFT."
    link: https://doi.org/10.1021/acscatal.0c04525
  - year: 2023
    by: [Richard Tran, Janice Lan, Muhammed Shuaibi, C. Lawrence Zitnick]
    what: "Extended the benchmarks to oxide electrocatalysts with the OC22 dataset."
    link: https://doi.org/10.1021/acscatal.2c05426
  - year: 2023
    by: [Janice Lan, Aini Palizhati, Zachary Ulissi, C. Lawrence Zitnick]
    what: "AdsorbML found the lowest-energy adsorbate configuration 87% of the time at about 2,000 times lower cost by combining machine-learned relaxations with a few DFT calculations."
    link: https://doi.org/10.1038/s41524-023-01121-5
  - year: 2025
    by: [Sushree Jagriti Sahoo, Muhammed Shuaibi]
    what: "Released OC25, the largest dataset for solid–liquid interfaces, extending the benchmarks to catalysis in explicit solvent (preprint)."
    link: https://arxiv.org/abs/2509.17862
---
Predict the relaxed adsorption energies of molecules on catalyst surfaces as accurately as DFT, without running DFT, so that catalysts can be screened at scale. The Open Catalyst 2020 (OC20) benchmarks score the share of predictions within 0.02 eV of DFT, and the best search methods still check results with some DFT. A solution gets most OC20 test adsorption energies within 0.02 eV and finds the lowest-energy configurations without DFT checks.
