---
title: Wind Farm Layout Benchmark
status: open
importance: 32
posed: 2018
requires: [wind-turbine, fluid-dynamics]
field: energy
aliases: [IEA Wind Task 37 case studies, wind farm layout optimization, WFLO]
links:
  - https://en.wikipedia.org/wiki/Wind_farm
  - https://github.com/byuflowlab/iea37-wflo-casestudies
progress:
  - year: 1994
    by: [G. Mosetti, C. Poloni, B. Diviacco]
    what: "The first wind farm layout optimization, using a genetic algorithm."
    link: https://doi.org/10.1016/0167-6105(94)90080-9
  - year: 2019
    by: [Nicholas F. Baker, Andrew P. J. Stanley, Jared J. Thomas, Andrew Ning, Katherine Dykes]
    what: "Results of the first Task 37 case studies: gradient-based optimization with wake expansion continuation (SNOPT+WEC) found the highest energy production."
    link: https://doi.org/10.2514/6.2019-0540
  - year: 2023
    by: [Jared J. Thomas, Nicholas F. Baker, Paul Malisani, Erik Quaeghebeur, Sebastian Sanchez Perez-Moreno, John Jasa, Christopher Bay, Federico Tilli, David Bieniek, Nick Robinson, Andrew P. J. Stanley, Wesley Holt, Andrew Ning]
    what: "Eight methods on the 81-turbine Borssele case reached wake losses of 15.48 to 15.70%, against 17.28% for the starting layout; the best layout came from a new sequential allocation method."
    link: https://doi.org/10.5194/wes-8-865-2023
---
Place wind turbines inside a site to maximize annual energy production when each turbine's wake slows those downwind. IEA Wind Task 37 fixed the turbine, wake model, wind rose and boundaries in public case studies (2018): 16, 36 and 64 turbines in circular sites, and 81 turbines in the Borssele III and IV zones. Published layouts are heuristic local optima; solving a case means a layout proven optimal or a certified bound that closes the gap.
