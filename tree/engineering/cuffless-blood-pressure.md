---
title: Calibration-Free Cuffless Blood Pressure
status: open
importance: 45
posed: 2014
requires: [pulse-oximeter, deep-learning]
field: biomedical
aliases: [cuffless BP, PPG blood pressure estimation, AAMI/ISO 81060-2]
links:
  - https://en.wikipedia.org/wiki/Photoplethysmogram
  - https://arxiv.org/abs/2602.04725
progress:
  - year: 2014
    by: [IEEE]
    what: "IEEE 1708, the first standard for wearable cuffless blood pressure devices."
    link: https://doi.org/10.1109/IEEESTD.2014.6882122
  - year: 2023
    by: [Weinan Wang, Pedram Mohseni, Kevin L. Kilgore, Laleh Najafizadeh]
    what: "PulseDB, a large cleaned dataset from MIMIC-III and VitalDB for benchmarking cuffless methods."
    link: https://doi.org/10.3389/fdgth.2022.1090854
  - year: 2023
    by: [Sergio González, Wan-Ting Hsieh, Trista Pei-Chun Chen]
    what: "A benchmark of 11 machine-learning methods on four open datasets, with validation that avoids subject leakage."
    link: https://doi.org/10.1038/s41597-023-02020-6
  - year: 2026
    by: [Neville Mathew, Yidan Shen, Renjie Hu, Maham Rahimi, George Zouridakis]
    what: "On the NBPDB benchmark no evaluated model met the standard; adding age, sex and BMI brought one model to mean absolute errors of 4.75 mmHg systolic and 2.90 mmHg diastolic."
    link: https://arxiv.org/abs/2602.04725
---
Estimate blood pressure from an optical pulse signal (PPG) at the finger or wrist, without calibrating against a cuff, as accurately as AAMI/ISO 81060-2 demands of any monitor: mean error within ±5 mmHg and standard deviation at most 8 mmHg. On the 2026 NBPDB benchmark (101,453 PPG segments from MIMIC-III and VitalDB) none of the published models tested met it; solving it means a model that does on held-out public data.
