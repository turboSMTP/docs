# Source: https://serversmtp.com/en/smtp-api

![smtp mail server – professional SMTP service provider](https://serversmtp.com/wp-content/uploads/2022/02/logo_2021-2.svg)

## TurboSMTP Public APIs ```
 2.0.0-oas3 
``` 

```
OAS 3.1
```

[./turbo-smtp.yaml](https://serversmtp.com/turbo-api/turbo-smtp.yaml)

This document describes all public turboSMTP **V2** API and offers endpoints Descriptions, Parameters, Requests, Responses and Samples of usage.

[Click here to view the previous version of turboSMTP Public API Version 1.0](https://www.serversmtp.com/turbo-api-1)

# Useful Links for Developers

-   [Email SDKs for Developers](https://serversmtp.com/email-sdks-for-developers)
-   [Webhooks Reference](https://serversmtp.com/event-webhook-reference/)
-   [Email API for Developers](https://serversmtp.com/email-api-for-developers)

# Security

For the most part (and where not otherwise explicit) turboSMTP's API requires authorization. Both methods are passed as HTTP request headers.

## Base URLs

Different endpoints live on different hosts:

| Host | Used for |
| --- | --- |
| `https://pro.api.serversmtp.com/api/v2` | All endpoints **except** `/mail/send` |
| `https://api.turbo-smtp.com/api/v2` | `POST /mail/send` only |
| `https://api.eu.turbo-smtp.com/api/v2` | `POST /mail/send` only — EU sending infrastructure |

## Authentication Methods

| Method | Headers | Lifetime | Best for |
| --- | --- | --- | --- |
| **API Key** | `Authorization: <key>` | 2 hours (or non-expiring with `no_expire: true`) | Interactive sessions, account administration |
| **Consumer Key / Secret** | `consumerKey: <key>` + `consumerSecret: <secret>` | Permanent until deleted | Production integrations, sending email |

**Endpoint-specific rules:**

-   **`POST /mail/send` accepts only `consumerKey`/`consumerSecret`** — requests with an `Authorization` header will be rejected with `401`.
-   **Consumer key management (`/user/consumerKeys`) requires the `Authorization` header** — you cannot create or delete consumer keys while authenticated with a consumer key.
-   **The `Authorization` value is the raw key** — do not prefix it with `Bearer` or any other scheme.

## \* API Key

Issued by `POST /authorize` upon a successful email + password challenge. Returned as the `auth` field. With `no_expire: false` (default) the key expires after **2 hours**; set `no_expire: true` for a non-expiring key. To revoke a key call `POST /deauthorize`.

> `/authorize` is rate-limited — cache and reuse the key rather than calling it before every request.

(Use [/authorize](https://serversmtp.com/turbo-api/#/authentication/AuthenticationLogin) to obtain an API Key)

## \* Consumer Key / Secret

A permanent key/secret pair tied to your account (not to your password). Consumer keys support IP-based restrictions and can be revoked individually — they are the recommended method for production and are **required** for `/mail/send`.

> The `consumerSecret` is returned **only at creation time** and cannot be retrieved later — store it securely.

(Use [/user/consumerKeys](https://serversmtp.com/turbo-api/#/consumerkey/createConsumerKey) to create a Consumer Key / Secret pair)

# Data Interchange Format

For the most part (and where not otherwise explicit) turboSMTP’s API uses JSON as the data format of choice when it comes to request and response bodies.

[Contact the developer](mailto:api@turbo-smtp.com)

[MIT](https://opensource.org/licenses/MIT)

Servers

https://pro.api.serversmtp.com/api/v2 - turboSMTP Production Server

Authorize

### [mail](https://serversmtp.com/turbo-api/#/mail)

Send email message

### [authentication](https://serversmtp.com/turbo-api/#/authentication)

Authentication

### [suppressions](https://serversmtp.com/turbo-api/#/suppressions)

Suppressions

### [meta](https://serversmtp.com/turbo-api/#/meta)

Meta

### [billing](https://serversmtp.com/turbo-api/#/billing)

Billing

### [email-validator](https://serversmtp.com/turbo-api/#/email-validator)

Email Validator

### [subaccounts](https://serversmtp.com/turbo-api/#/subaccounts)

Subaccounts

### [alerts](https://serversmtp.com/turbo-api/#/alerts)

Alerts

### [analytics](https://serversmtp.com/turbo-api/#/analytics)

Analytics

### [consumerkey](https://serversmtp.com/turbo-api/#/consumerkey)

Api Keys