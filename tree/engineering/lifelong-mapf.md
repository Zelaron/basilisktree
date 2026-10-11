---
title: "Lifelong Path Planning for 10,000 Robots"
status: open
importance: 35
posed: 2023
requires: [warehouse-robots, complexity-theory, dijkstra-algorithm]
field: robotics
aliases: [lifelong multi-agent path finding, LMAPF, League of Robot Runners]
links:
  - https://en.wikipedia.org/wiki/Multi-agent_pathfinding
  - https://arxiv.org/abs/2404.16162
progress:
  - year: 2021
    by: [Jiaoyang Li, Andrew Tinka, Scott Kiesel, Joseph W. Durham, T. K. Satish Kumar, Sven Koenig]
    what: "Rolling-horizon collision resolution scales lifelong planning to 1,000 robots on simulated warehouse maps."
    link: https://arxiv.org/abs/2005.07371
  - year: 2024
    by: [He Jiang, Yulun Zhang, Rishi Veerapaneni, Jiaoyang Li]
    what: "The winners of the 2023 League of Robot Runners set out the open challenges: 10,000 agents at about one second per step, congestion, and realistic robot models."
    link: https://arxiv.org/abs/2404.16162
---
Keep up to 10,000 warehouse robots moving to a stream of new goals without collisions or gridlock, planning each step within about a second. The League of Robot Runners competition (since 2023) publishes maps, instances and best-known throughputs, and its 2023 champions list scale and congestion as unsolved. Solving it means planners that beat the archived best throughputs at 10,000 robots within the time limit.
