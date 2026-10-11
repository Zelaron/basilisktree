---
title: CARLA Leaderboard 2.0
status: open
importance: 33
posed: 2023
requires: [robotaxi, sim-to-real-robotics]
field: transport
aliases: [CARLA Autonomous Driving Leaderboard, CARLA AD Challenge, Leaderboard 2.1]
links:
  - https://leaderboard.carla.org/
  - https://arxiv.org/abs/2406.10165
progress:
  - year: 2017
    by: [Alexey Dosovitskiy, German Ros, Felipe Codevilla, Antonio López, Vladlen Koltun]
    what: "CARLA, an open-source urban driving simulator."
    link: https://arxiv.org/abs/1711.03938
  - year: 2024
    by: [Katrin Renz, Long Chen, Ana-Maria Marcu, Jan Hünermann, Benoit Hanotte, Alice Karnsund, Jamie Shotton, Elahe Arani, Oleg Sinavski]
    what: "CarLLaVA, a camera-only vision-language driving model, won the sensor track of the 2024 CARLA challenge."
    link: https://arxiv.org/abs/2406.10165
  - year: 2025
    by: [CARLA team]
    what: "Leaderboard 2.1 made the infraction penalty linear, ending an exploit in which agents scored higher by stopping partway along a route."
    link: https://leaderboard.carla.org/
---
Drive long routes through dense simulated traffic and dozens of pre-crash scenarios in the CARLA simulator, scored by driving score = route completion × infraction penalty (Leaderboard 2.0, 2023). When the 2.0 results were frozen, the best scores were 6.9 out of 100 with sensors only (CarLLaVA, 2024) and 12.5 with an HD map. Solving it means driving scores near 100 on the official routes, now under the Leaderboard 2.1 rules (2025).
