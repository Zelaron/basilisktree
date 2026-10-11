---
title: Sakoda–Sipser Problem
status: claimed
importance: 35
posed: 1978
requires: [finite-automata, complexity-theory]
by: [OpenAI]
with: [OpenAI internal model, Lean 4]
field: automata theory
aliases: ["2NFA vs 2DFA", two-way automata state complexity]
links:
  - https://en.wikipedia.org/wiki/Two-way_finite_automaton
  - https://arxiv.org/abs/1208.2755
progress:
  - year: 1977
    by: [Piotr Berman, Andrzej Lingas]
    what: "If L = NL, every s-state two-way NFA has a two-way DFA with poly(s) states that agrees with it on all inputs of length up to s."
  - year: 1980
    by: [Michael Sipser]
    what: "An exponential lower bound for sweeping automata, which reverse direction only at the ends of the input."
  - year: 2012
    by: [Christos Kapoutsis, Giovanni Pighizzini]
    what: "NL ⊆ L/poly holds exactly when every s-state unary two-way NFA has an equivalent two-way DFA with poly(s) states."
  - year: 2026
    by: [OpenAI]
    with: [OpenAI internal model, Lean 4]
    what: "Claimed exponential lower bounds for simulating one-way NFAs by two-way DFAs over growing alphabets, which would settle the Sakoda–Sipser conjecture in that form, and for complementing two-way NFAs (family 129 of OpenAI’s math release, formalized in Lean). Not yet independently reviewed."
    link: https://github.com/openai/math
---
Sakoda and Sipser asked in 1978 whether every n-state two-way nondeterministic finite automaton, or one-way NFA, can be simulated by a two-way deterministic one with polynomially many states; they conjectured that exponentially many are needed. Exponential bounds are known for restricted machines, and the version for short inputs is tied to the L versus NL question. OpenAI’s October 2026 release claims exponential lower bounds.
