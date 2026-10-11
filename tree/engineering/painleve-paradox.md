---
title: Painlevé Paradox
status: open
importance: 33
posed: 1895
requires: [classical-mechanics]
field: mechanical
aliases: [frictional paroxysms, Coulomb friction paradox, dynamic jam]
links:
  - https://en.wikipedia.org/wiki/Painlev%C3%A9_paradox
  - https://arxiv.org/abs/1601.03545
progress:
  - year: 1999
    by: [Franck Génot, Bernard Brogliato]
    what: "For the classic sliding rod, the contact force can grow without bound near singular points while its impulse stays finite, so the motion must jump."
    link: https://doi.org/10.1016/S0997-7538(99)00144-8
  - year: 2000
    by: [David E. Stewart]
    what: "A mathematical resolution with measure differential inclusions, in which solutions exist once impulsive contact forces are allowed."
    link: https://doi.org/10.1137/S0036144599360110
  - year: 2016
    by: [Alan Champneys, Péter Várkonyi]
    what: "A review finds forward evolution unsolved except in restricted planar single-contact cases, with dynamic jam and reverse chatter as ambiguities reachable in finite time."
    link: https://arxiv.org/abs/1601.03545
---
With Coulomb friction, the equations of a sliding rigid body can have no solution or several (Painlevé, 1895), so a simulator cannot always say what happens next. Resolutions exist for a single contact in the plane, but no consistent general rule for forward evolution with several contacts or in 3D is known, which affects robot grasping and contact simulation. Solving it means a well-posed, physically justified rule covering these cases.
