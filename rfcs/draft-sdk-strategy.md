---
id: 0000
title: SDK strategy
status: proposed
date: 2026-07-04
---

# SDK strategy

## Context / Problem

The charter ([Program vision & RFC roadmap](0001-program-vision-rfc-roadmap.md))
lists official SDKs as part of the developer hub. This RFC decides *how* we do
first-party SDKs — not which OSS projects we integrate with.

The existing client landscape is in three states (surveyed 2026-07-04):

- **Official but stale.** We already ship SDKs labelled "official" —
  [turboSMTP-php](https://github.com/turboSMTP/turboSMTP-php),
  [turboSMTP-csharp](https://github.com/turboSMTP/turboSMTP-csharp), and
  [turboSMTP-python](https://github.com/turboSMTP/turboSMTP-python) — all at
  near-zero traction and untouched for months to over a year. This is the very
  failure mode we want to avoid, already happening in our own org: an SDK that
  looks official and rots.
- **Community scatter.** Solo devs fill the gaps, mostly in PHP:
  [magexon/turbosmtp-php](https://github.com/magexon/turbosmtp-php),
  [emiliort/turbosmtp-api-client](https://github.com/emiliort/turbosmtp-api-client),
  and [emiliort/turbosmtp-mailer](https://github.com/emiliort/turbosmtp-mailer);
  plus [0x1001/TurboSMTP](https://github.com/0x1001/TurboSMTP) (Python) and
  [Gotham25/TurboSMTP](https://github.com/Gotham25/TurboSMTP) (Kotlin). Quality
  and coverage vary; a developer can't tell maintained from abandoned.
- **Greenfield.** No SDK at all for TypeScript/Node (only a Pipedream
  component), Go, or Rust — nothing on npm or crates.io.

The lesson across all three: **an SDK is only as good as its maintainer.** The
charter's non-goal is explicit — we don't take on what we can't maintain
long-term — and our own stale official SDKs show a shipped-then-abandoned SDK is
worse than none.

Modern ESPs treat SDKs as a first-class surface: a set of hand-tuned, typed
clients across the major languages plus framework-native packages, not a single
auto-generated dump. That's the bar. The open question is how we reach it
without over-committing to code we can't sustain.

Note: this is the **first-party/core SDK** track. OSS integrations are a
separate decision — those are built SDK-free (the *OSS integration approach*
RFC, [PR #2](https://github.com/turboSMTP/developer-ecosystem/pull/2), in
review). Once it merges this becomes a relative file link.

## Proposal

Adopt a **maintainer-gated, reuse-before-build** SDK model:

1. **Every official SDK has a named maintainer.** An SDK becomes official only
   once someone commits to owning it. No SDK ships without an owner. This is the
   gate — languages are not picked from a wishlist, they're unlocked by maintainer
   capacity.
2. **One maintainer can own several SDKs.** Ownership is per-person, not
   per-language; a capable maintainer covering PHP + Python is fine and expected.
3. **Reuse before building — modernize, then adopt, then build.** In order of
   preference: (a) **modernize** an existing official SDK worth reviving
   (PHP/C#/Python); (b) **adopt** a stronger community client where one beats
   ours — reach out to the author, offer to make it official (recognition, and
   possibly a small compensation, form TBD, see the maintainer model), and
   onboard them as maintainer or take the code under a clear license; (c)
   **build** new, grounded on the OpenAPI spec, only where nothing suitable
   exists. Every path is gated on a committed maintainer.
4. **Hand-tuned, not just generated.** An OpenAPI-generated client may *seed* an
   SDK, but the shipped SDK is hand-tuned for ergonomics — idiomatic naming,
   sensible defaults, good errors. Generation alone is not the product.
5. **Starting candidates (AS-IS intent, not commitment).** PHP, C#, and Python
   each have an existing official SDK to modernize (PHP also has strong community
   clients to weigh). Greenfield builds: a **TypeScript SDK** targeting Node and
   Bun (one runtime-agnostic, TS-first package), Go, and a **Rust** crate. The
   charter's quickstart set (cURL, Node, Python, PHP, C#, Go) is the baseline
   surface; Rust is a deliberate extension beyond it. Actual order and per-SDK
   go/no-go is decided in follow-up, gated on a maintainer saying yes.

**Prerequisite:** a stable, documented API surface. An SDK — generated or
hand-written — needs a fixed contract to build against. This is the same open
question the OSS track has, and it blocks first real SDK work here too.

## Alternatives

- **Fixed language matrix regardless of maintainer capacity.** Rejected: an
  unmaintained SDK is worse than none — it looks official and rots (charter
  non-goal).
- **Pure OpenAPI-generated clients, no hand-tuning.** Rejected: generated output
  needs heavy hand-tuning to be pleasant, and ergonomics is the whole point of an
  SDK. Generation seeds; it doesn't ship.
- **No first-party SDKs — leave it to community repos.** Rejected: no support
  guarantee, inconsistent quality/versioning, and developers can't distinguish
  official from hobby.
- **Build everything clean-room, ignore existing repos.** Rejected: wasteful, and
  it burns the authors who already did the work and could become our maintainers.

## Consequences

- Needs a lightweight **maintainer model** — recognition, whether and how to
  compensate, official badge/org membership, and a baseline expectation (security
  updates, release cadence). Follow-up work.
- Each adoption is its own step: author outreach, **license audit**, and
  transfer-vs-fork decision per repo. Likely tracked as issues or thin follow-up
  RFCs, not decided here.
- Depends on the **API-surface** prerequisite, shared with the OSS track — first
  real SDK work is blocked until that exists.
- Keeps the two tracks clean: first-party SDKs here, OSS integrations stay
  SDK-free elsewhere.

## Open questions

- **Ordering of the starting candidates.** Driven by which language has the
  strongest adoptable client (e.g. PHP first via `magexon`), or purely by which
  maintainer commits first? Left open here on purpose — for PR discussion.
- **PHP specifically.** Modernize our official `turboSMTP-php`, or adopt a
  stronger community client (e.g. `magexon/turbosmtp-php`)? Decide during the PHP
  step.

## References

- Stripe — OpenAPI spec (`stripe/openapi`) feeding hand-tuned clients
  (`stripe/stripe-node`): generated base, hand-tuned surface —
  <https://github.com/stripe/openapi>
- Resend SDKs — modern ESP baseline of typed, per-language clients —
  <https://resend.com/docs/sdks>
- Program vision & RFC roadmap —
  [0001](0001-program-vision-rfc-roadmap.md)
