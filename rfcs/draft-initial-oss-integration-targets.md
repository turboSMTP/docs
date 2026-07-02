---
id: 0000
title: Initial OSS integration targets
status: proposed
date: 2026-07-02
---

# Initial OSS integration targets

## Context / Problem

The charter ([Program vision & RFC roadmap](0001-program-vision-rfc-roadmap.md))
commits us to upstreaming native TurboSMTP providers, and the *OSS integration
approach* RFC settled **how** we build them (raw HTTP / SMTP, no SDK). What's
missing is the **which**: a starting, prioritized set of projects so
contribution work can actually begin.

This RFC records that starting point. It is an **AS-IS snapshot** — a first
prioritized set, not a fixed roadmap. It will change as we learn, and each
*actual* integration is scoped and tracked in its own follow-up RFC. Merging
this one means "these are the projects we start with, in this order," not "these
are the only ones."

Priorities below are grounded in research into where TurboSMTP's competitors
(SendGrid, Mailgun, Postmark, SES, Resend, SMTP2Go) are already integrated while
TurboSMTP is absent, and how welcoming each project is to an HTTP-native
contribution.

## Proposal

### Selection criteria

A project ranks high when it combines:

1. **A verified competitor gap** — competitors are integrated, TurboSMTP is not.
2. **A pluggable provider contract** — we implement a documented interface, not
   patch core.
3. **HTTP-native contribution** — matches the approach RFC (no vendor SDK wanted).
4. **Reach or low effort** — large install base, or a small, clean integration.

### Tier 1 — start here

| Project | Ecosystem | Why now | Contribution shape |
|---------|-----------|---------|--------------------|
| **Django Anymail** | Python | 14 ESPs incl. all named competitors, no TurboSMTP; explicitly discourages vendor SDKs | Subclass `AnymailRequestsBackend` + payload |
| **Symfony Mailer / Laravel** | PHP | Transport-bridge model via DSN; Laravel recommends API drivers over SMTP | Standalone `TransportFactory` package, `HttpClient` |
| **FluentSMTP** | WordPress | 600k+ installs, ~10 competitors native, TurboSMTP only via generic SMTP | Native API driver via `wp_remote_post` |

### Tier 2 — next

| Project | Ecosystem | Why | Contribution shape |
|---------|-----------|-----|--------------------|
| **Courrier** | Ruby | 12 API providers incl. competitors, no TurboSMTP; HTTP-only | Subclass base adapter (endpoint/body/headers) |
| **go-mail** | Go | Pluggable driver, stdlib `http.Client`, no TurboSMTP; *lower adoption* | External driver implementing `Send` |
| **Novu** | Notifications | 13 competitors native, only generic Custom SMTP for us | Native email provider |

### Tier 3 — verify first

| Project | Ecosystem | Why cautious |
|---------|-----------|--------------|
| **Apprise** | Python (140+ services) | High reach, but its contribution mechanism was **not** verified — confirm the plugin contract before committing effort |

### Watchlist — from the program's candidate list, not yet independently verified

Post SMTP, Mautic, Ghost, Listmonk, Keila, n8n, Activepieces, Nodemailer. Each
needs a gap-and-contract check before it earns a tier.

### Prerequisite / open question

How rich each transport can be depends on what the **TurboSMTP HTTP API**
exposes (templates, tags/metadata, tracking, batch send, webhooks). Confirm the
API surface before scoping any Tier 1 integration; without it, transports are
limited to basic send.

## Alternatives

- **Start with a big list (10+).** Rejected: spreads effort thin before we've
  learned how a single upstream contribution actually goes.
- **One project, go deep, then decide the rest.** Rejected: one data point isn't
  enough to compare ecosystems; a small spread teaches us more per unit effort.
- **No fixed list, opportunistic PRs.** Rejected: without a recorded, ordered
  target set there's no shared priority and no way to say no to distractions.

## Consequences

- Each Tier 1 project becomes its own integration RFC that scopes the specifics;
  the *how* is already settled by the approach RFC.
- The list is expected to churn. Re-prioritizing (adding/dropping/reordering) is
  a new RFC that supersedes this one, not an edit in place.
- Work depends on the approach RFC and on a stable, documented TurboSMTP HTTP
  API — the API surface remains the real prerequisite.

## References

- Django Anymail — supported ESPs + adding-ESP guide:
  <https://github.com/anymail/django-anymail/blob/main/ADDING_ESPS.md>
- FluentSMTP — native provider list + install base:
  <https://wordpress.org/plugins/fluent-smtp/>
- Novu — supported email integrations:
  <https://docs.novu.co/platform/integrations/email>
- Courrier — HTTP-API-only Ruby email providers:
  <https://github.com/Rails-Designer/courrier>
- go-mail — pluggable drivers on stdlib HTTP:
  <https://github.com/ainsleyclark/go-mail>
