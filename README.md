# TurboSMTP Developer Ecosystem

Steering repo for the TurboSMTP Developer Ecosystem: directional decisions live
here as **RFCs** (markdown docs, discussed in the PR). Accepted RFCs land
automatically in the [Decision Log](#decision-log) below.

> No code lives here — this is a pure RFC / decision repo.

## Mission

Make TurboSMTP a first-class citizen of the developer ecosystem: present
wherever developers already choose an email provider, and supported by a
developer hub that makes integration take minutes, not hours.

The work is split into two tasks.

## Task 1 — Developers Minisite (developers.serversmtp.com)

A dedicated subdomain explicitly targeting developers, while serversmtp.com
continues to serve the general B2B audience. Covers both the site itself and the
assets it showcases.

**The site:**

- **Quickstarts** — send your first email in under 5 minutes (cURL, Node, Python, PHP, C#, Go)
- **API Reference** — interactive, generated from the finalized OpenAPI 3.1 spec
- **SDKs & Libraries** — one page per language, from install to webhooks
- **Integrations** — WordPress, e-commerce platforms, automation tools, framework guides
- **Guides & Tutorials** — deliverability, webhooks, migration guides from other providers
- **AI Integrations** — MCP server, agent skills, usage from Claude/Cursor/Copilot

**The assets behind it:**

- **SDKs** — modernize the existing PHP and C# SDKs; build new official SDKs grounded on the OpenAPI spec
- **AI tools** — official MCP server (send, metrics, validation, domain-auth) published to npm + MCP directories; open-source agent skills (e.g. deliverability diagnostics, list hygiene)
- **Example apps** — small open-source sample projects that double as tutorial material and GitHub presence

## Task 2 — Contributions to relevant open-source projects

Open-source projects with millions of installs ship our competitors today
(e.g. SMTP2Go, Mailgun) as native one-click providers, while TurboSMTP is
absent. The goal: TurboSMTP selectable wherever a developer chooses an email
provider, by contributing the integrations upstream ourselves.

Example target projects (final list & ordering to be defined together):

- **WordPress mailers** — FluentSMTP, Post SMTP: PRs adding a native TurboSMTP API connection
- **Django Anymail** — PR adding a TurboSMTP backend
- **Symfony Mailer** — a TurboSMTP bridge package
- **Laravel** — a TurboSMTP mail transport on Packagist
- **Nodemailer** — a TurboSMTP transport for the Node.js ecosystem
- **Novu** ([novu.co](https://novu.co/)) — a TurboSMTP email provider integration
- **Mautic** — a TurboSMTP email transport plugin
- **Ghost** — TurboSMTP as a bulk-mail alternative
- **Listmonk / Keila** — provider presets & documented setups
- **n8n / Activepieces** — community node / piece (send, metrics, validation)

## How this repo works

- **Decisions** → RFC as a PR. Discussion happens inline in the PR, merge = decided. See [CONTRIBUTING.md](CONTRIBUTING.md).
- **Loose tasks & bugs** → GitHub issue (the "Task" template).
- **Decision Log** → below, generated automatically from the RFC frontmatter (`scripts/index.mjs`). Do not edit by hand.

## Decision Log

<!-- BEGIN DECISION LOG -->
_No RFCs yet._
<!-- END DECISION LOG -->
