---
id: 0000
title: OSS integration approach
status: proposed
date: 2026-07-02
---

# OSS integration approach

## Context / Problem

The charter (*Program vision & RFC roadmap*) commits us to upstreaming native
TurboSMTP providers into open-source projects. Before we pick *which* projects,
we need a shared answer to *how* we build these integrations — otherwise each
one gets built differently, and some get rejected upstream for reasons we could
have avoided.

A common worry is "we need our SDKs first, so integrations don't make raw HTTP
calls." These ecosystems say otherwise: they build providers on the *host's own*
HTTP client, not vendor SDKs — Django Anymail explicitly discourages vendor
client libraries, and Symfony, Laravel, go-mail and Courrier all integrate over
plain HTTP. So what we need is a policy, not a dependency.

## Proposal

The baseline is deliberately low-tech: every upstream integration is built on
**raw HTTP** calls to the TurboSMTP API — or **plain SMTP** where that is all the
host supports. Never on a TurboSMTP SDK. One house style:

### Build principles

1. **Implement the host's interface, not ours.** A Symfony Mailer transport, a
   Django Anymail backend, a Nodemailer transport, a Novu provider — we fulfill
   *their* contract.
2. **Raw HTTP with the host's own client.** Symfony `HttpClient`, Django
   `requests`, WordPress `wp_remote_post`, Node `fetch` — hand-built requests on
   whatever the project already depends on. **No TurboSMTP SDK in upstream code.**
3. **Stay thin.** The integration is auth + a few endpoint calls + error
   mapping. If it needs more, that's a smell.
4. **Match upstream conventions.** Their code style, tests, docs, and PR
   process — we adapt to them, not the other way around.
5. **Own it after merge.** Each integration names a maintainer so it doesn't rot
   the first time the upstream API or ours changes.

### API vs. SMTP

Prefer the **HTTP API** where the host expects an API-style provider (unlocks
status, metrics, validation). Fall back to a **documented SMTP preset** where
the host's model is SMTP config only. Never require the API where SMTP is all
the project supports.

### Evidence

This is how the target ecosystems already accept provider contributions — the
policy matches their norms rather than fighting them:

- **Django Anymail** adds each ESP by subclassing a Requests-based backend and
  explicitly discourages vendor client libraries.
- **Symfony Mailer / Laravel** provider bridges use Symfony's own `HttpClient`
  with a hand-built payload — the SendGrid bridge depends on no SendGrid SDK —
  and Laravel's docs recommend API drivers over SMTP.
- **go-mail** (Go) makes every provider request with the stdlib `http.Client`,
  zero vendor email SDKs.
- **Courrier** (Ruby) is HTTP-API-only; a provider is endpoint + body + headers.

In each, competitor providers (SendGrid, Mailgun, Postmark, SES, Resend) are
already integrated over direct HTTP while TurboSMTP is absent — that gap is what
we close.

## Alternatives

- **Wrap our TurboSMTP SDK inside the integrations.** **Not an option.** Upstream
  maintainers reject third-party vendor-SDK dependencies (bundle size,
  maintenance, version conflicts), and it would couple every integration to our
  SDK's release cadence. The evidence above is unanimous — these ecosystems build
  on raw HTTP, not vendor SDKs. TurboSDKs serve *end-user app developers*, a
  separate track; they are never a dependency of upstream integration code.
- **SMTP presets everywhere, no API integrations.** Rejected: leaves API-only
  features (delivery status, metrics) on the table where the host supports them.
- **Maintain our own plugins/forks outside upstream.** Rejected: no distribution
  and no discoverability — the whole point is being *in* the projects developers
  already use.

## Consequences

- Each target-project RFC only has to scope the specifics; the how is settled
  here. A reusable contribution checklist falls out: implements host interface,
  uses host HTTP client, no SDK dep, tests + docs in upstream style, named
  maintainer.
- Integrations depend on a **stable, documented TurboSMTP HTTP API**, not on the
  SDK track. This makes the API surface the real prerequisite.
- SDKs are decided separately and serve app developers building *on* TurboSMTP —
  they are not a dependency of the OSS work.

## References

- Django Anymail — adding ESPs (Requests-based, vendor SDKs discouraged):
  <https://github.com/anymail/django-anymail/blob/main/ADDING_ESPS.md>
- Symfony SendGrid Mailer bridge (uses HttpClient, no vendor SDK):
  <https://github.com/symfony/sendgrid-mailer>
- Laravel mail — API drivers recommended over SMTP:
  <https://laravel.com/docs/12.x/mail>
- go-mail — stdlib `http.Client`, pluggable drivers:
  <https://github.com/ainsleyclark/go-mail>
- Courrier — HTTP-API-only Ruby email providers:
  <https://github.com/Rails-Designer/courrier>
