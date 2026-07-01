---
id: 0000
title: Program vision & RFC roadmap
status: proposed
date: 2026-07-01
---

# Program vision & RFC roadmap

## Context / Problem

TurboSMTP is building out a developer ecosystem, and ownership of that program
now sits with this repo. Two workstreams are already in motion:

- **Developer minisite** — a public site aimed at developers integrating with
  TurboSMTP (docs, quickstarts, API reference, examples).
- **OSS contributions** — upstreaming TurboSMTP support into developer-facing
  open-source projects, so TurboSMTP shows up where developers already are.

Right now there is no shared, written record of *what the program commits to*
or *how decisions get made and split up*. Without that, the two workstreams
drift, decisions live in chat, and there's no way for a new contributor to see
the shape of the program. This RFC exists to set direction — not to decide the
details of either workstream.

## Proposal

This RFC (RFC-0001) is the program charter. It follows two established
practices rather than inventing a new one:

- **One decision per document** (Nygard's ADRs): each concrete decision gets
  its own short RFC, and the consequences of one become the context for the
  next — instead of one document trying to decide everything.
- **New RFC over rewrite** (Rust's RFC process): an accepted RFC isn't
  substantially edited later; a changed direction is captured in a new RFC that
  supersedes it.

So RFC-0001 fixes the pillars and the decision map; every concrete decision
below gets its **own** narrow RFC.

**Pillars**

1. **Meet developers where they are.** Prioritize work that reduces
   time-to-first-successful-send for a developer evaluating TurboSMTP.
2. **Public by default.** Minisite content and OSS work are open; decisions are
   recorded here as RFCs.
3. **Ship narrow, decide in parallel.** Small, reversible decisions over
   big-bang plans — one decision = one RFC = one PR. Multiple RFCs may be open
   at the same time; the constraint is that each stays *narrowly scoped*, not
   that they're serialized.

**Success criteria (program-level)**

- A developer can go from "never heard of TurboSMTP" to a working send by
  following the minisite alone.
- TurboSMTP is a first-class provider option in at least one major OSS project.
- Every non-trivial program decision is traceable to a merged RFC.

**Decision roadmap** — planned follow-up RFCs (intent, not commitment; each is
decided in its own PR):

| Area | Workstream |
|------|-----------|
| Minisite: tech stack, hosting, domain | Developer minisite |
| Minisite: information architecture & content scope | Developer minisite |
| OSS: target-project selection criteria & shortlist (e.g. Strapi email providers) | OSS contributions |
| OSS: how integrations get built & maintained upstream | OSS contributions |

## Alternatives

- **One monolithic RFC** for the whole program. Rejected: it can't be discussed
  or merged incrementally, and every small change re-opens the whole document.
- **Issues-only, no RFCs.** Rejected: decisions and their rationale scatter and
  get lost; no durable record of *why*.
- **Separate charters per workstream, no top-level RFC.** Rejected: the two
  workstreams share goals and trade-offs; a single charter keeps them aligned.

## Consequences

- Each row in the decision roadmap becomes its own RFC. Several may be open and
  under discussion at once — they're kept independent so parallel work doesn't
  block on a single thread.
- RFC-0001 changes only when the program *direction* changes; detail changes
  live in the sub-RFCs, not here.
- If direction shifts materially later, this RFC is superseded by a new one
  rather than edited in place.

## References

- Michael Nygard, *Documenting Architecture Decisions* —
  <https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions>
- Martin Fowler, *Architecture Decision Record* —
  <https://martinfowler.com/bliki/ArchitectureDecisionRecord.html>
- The Rust RFC Book —
  <https://rust-lang.github.io/rfcs/>
