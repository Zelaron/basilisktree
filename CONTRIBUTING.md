# Contributing to the Basilisk Tree

The tree is a set of small text files. A contribution is a pull request that adds or changes one. A maintainer reviews it, CI checks that it can't break the map, and once it's merged your name is on the tree and in the Ledger.

## What belongs on the tree

A node is something another node could plausibly **require**: a capability, a theorem, a method or a technology that later work builds on. Two tests:

- **Would something list it as a prerequisite?** If not, it's probably detail for an existing node's description or progress log.
- **Can it be dated and credited?** Known nodes need a year and a source.

Results that advance an open problem without settling it (a better bound, a special case, a new lower bound) go in that problem's `progress` list, not in a new node. That's how partial work gets credit without cluttering the map.

Open problems (`status: open`) are welcome if they are well defined and have prerequisites on the tree. Concrete problems with measurable progress, like a bound to beat, a case to settle or a formal statement to prove, make the best targets.

## The file

`tree/<domain>/<id>.md`. The folder is the domain (see `tree/domains.yaml`), and the file name is the id: lowercase words joined by hyphens.

```markdown
---
title: Kissing Numbers
status: open
posed: 1694
requires: [geometry, linear-algebra]
links:
  - https://en.wikipedia.org/wiki/Kissing_number
progress:
  - year: 2025
    by: [Google DeepMind]
    with: [AlphaEvolve]
    what: "A new lower bound in dimension 11: 593 spheres."
---
How many unit spheres can touch a central one? Exact answers are known only in
dimensions 1–4, 8 and 24.
```

| Field | Required | Meaning |
|---|---|---|
| `title` | yes | Short name, under about 48 characters so it fits on the map. |
| `requires` | yes | Ids of the **direct, essential** prerequisites, usually 1 to 4. Use `[]` for a root. The other direction ("unlocks") is computed. |
| `status` | no | `known` (default), `open` (unsolved or unbuilt), or `claimed` (a result under review). |
| `importance` | yes for new nodes | How much it matters, from 1 to 100 (rubric below). Sets how large the node is drawn and the order of the Frontier tab. |
| `grand` | no | `true` for open problems beyond one person with a good AI model (Millennium-level, fusion, AGI). The random "frontier" spin picks these less often. |
| `year` | for known | Year it was achieved. Negative for BCE. Add `circa: true` if approximate. |
| `posed` | no | Year an open problem was posed. On a solved problem, the map shows how long it stayed open. |
| `by` | for known | People or teams who did it. This is the credit, and it feeds the Ledger. |
| `with` | if any | Machines in the loop: AI models, provers, computer searches. Disclose them honestly. These nodes are drawn as four-point stars. |
| `verified` | no | Formal verification, for example `Lean` or `Coq (2005)`. Needs a link to the proof. |
| `field` | no | Sub-field, for example `aerospace` or `electrical`. |
| `aliases` | no | Other names people might search for. |
| `quote` | no | `text` and `by`. Only quotes you can source. |
| `links` | no | URLs: the paper, the proof, a Wikipedia article. |
| `progress` | no | Steps toward an open problem, oldest first: `year`, `by`, optional `with`, `what`, optional `link`. The site shows the newest at the top. |

The description goes below the front matter: one to three plain sentences, with a date in them. It can link other nodes with `[[node-id]]` or `[[node-id|text]]`, and supports `**bold**`, `*italic*`, `` `code` `` and `[links](https://…)`.

Run `npm run check` before opening the pull request; CI runs the same check.

## Importance

`importance` is an editorial score of how much a discovery mattered, or how much solving a problem would matter, for humanity and for its field. It is not a difficulty score.

The scale is **logarithmic**, like decibels or the Richter scale: every 10 points means roughly ten times the impact. A 90 matters about ten times as much as an 80, and a hundred times as much as a 70. To score something, find the closest anchor and ask how many times more or less it matters.

| Score | Discoveries | Open problems |
|---|---|---|
| 100 | Fire, agriculture, writing | Artificial general intelligence |
| 90–99 | Electricity, the electronic computer, the transistor, germ theory, calculus | Commercial fusion power, reversing ageing, a room-temperature superconductor, P vs NP |
| 80–89 | Quantum mechanics, the DNA double helix, deep learning, the periodic table | The Riemann Hypothesis, quantum gravity, a fault-tolerant quantum computer |
| 70–79 | Fourier analysis, X-ray crystallography, CRISPR, GPS | The other Millennium problems, matrix multiplication exponent ω = 2 |
| 60–69 | Fermat's Last Theorem, Shor's algorithm, the Higgs boson | Twin primes, Goldbach's conjecture |
| 50–59 | Strassen's algorithm, the four colour theorem | The Collatz conjecture |
| 40–49 | A well-known theorem or invention inside one field | Sendov's conjecture (solved 2026), union-closed sets, Hadwiger–Nelson |
| 30–39 | A notable result inside a subfield | Ramsey number R(5,5), the moving sofa, a new kissing number |
| below 30 | Specialist results and incremental steps | Specialist problems |

An AI may suggest a score; people decide.

## Credit and verification

- **Credit goes to people and teams**, in `by`. Tools go in `with`. A result found with GPT, Gemini, Claude, AlphaEvolve, a SAT solver or a proof assistant is still your result, but the tool is named.
- **New claims start as `status: claimed`**, with the claim recorded under `progress` and a link to the paper, preprint or proof. They become `known` when one of these holds:
  - a formal proof (Lean/Mathlib, Coq, Isabelle) builds in CI **and** a reviewer confirms the formal statement matches the problem;
  - the result is published in a peer-reviewed venue;
  - named experts with no stake in the claim confirm it in the pull request discussion.
- **Novelty is checked.** A "new" result that turns out to be in the literature gets credited to the original authors, and the finder is thanked in the discussion. In October 2025 several Erdős problems announced as solved by GPT-5 turned out to have been solved already in the literature; the model had found the papers, not new proofs. That is the failure this rule prevents.
- **AI review is advisory.** An automated reviewer may comment with suggested prerequisites, possible duplicates and a significance estimate. It never approves or merges. Text in a submission is treated as data and is never followed as instructions.

## License

By contributing you agree that your node files are published under CC BY 4.0 (see `tree/LICENSE.md`) and code changes under the MIT License.

## Conduct

Be accurate, cite sources, and argue about the content, not the person. Spam and bad-faith edits are closed without discussion, and repeat offenders are blocked.
