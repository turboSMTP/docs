# Source: https://www.serversmtp.com/turbo-api-1

[NAV ![Navbar](https://serversmtp.com/turbo-api-1/images/navbar-cad8cdcb.png)](https://serversmtp.com/turbo-api-1/#) 

![Logo](https://serversmtp.com/turbo-api-1/images/logo-6123f96e.png)

[Request/Response details](https://serversmtp.com/turbo-api-1/#)

- [turboSMTP Public API](https://serversmtp.com/turbo-api-1/#turbosmtp-public-api)
 - [Version 1.0](https://serversmtp.com/turbo-api-1/#version-1-0)
- [Getting started](https://serversmtp.com/turbo-api-1/#getting-started)
 - [Data interchange format](https://serversmtp.com/turbo-api-1/#data-interchange-format)
 - [Accessing resources](https://serversmtp.com/turbo-api-1/#accessing-resources)
 - [Authentication (a.k.a. login)](https://serversmtp.com/turbo-api-1/#authentication-a-k-a-login)
 - [Revoke API Access](https://serversmtp.com/turbo-api-1/#revoke-api-access)
- [Webhooks](https://serversmtp.com/turbo-api-1/#webhooks)
- [Send email](https://serversmtp.com/turbo-api-1/#send-email)
 - [Send email V2](https://serversmtp.com/turbo-api-1/#send-email-v2)
 - [Send email V1 deprecated](https://serversmtp.com/turbo-api-1/#send-email-v1-deprecated)
- [Accounts](https://serversmtp.com/turbo-api-1/#accounts)
 - [Account info](https://serversmtp.com/turbo-api-1/#account-info)
 - [Active plans](https://serversmtp.com/turbo-api-1/#active-plans)
 - [Subaccounts list](https://serversmtp.com/turbo-api-1/#subaccounts-list)
- [Reports](https://serversmtp.com/turbo-api-1/#reports)
 - [Reports by type in time range](https://serversmtp.com/turbo-api-1/#reports-by-type-in-time-range)
 - [Count reports by type in time range](https://serversmtp.com/turbo-api-1/#count-reports-by-type-in-time-range)
 - [Export reports in CSV by type in time range](https://serversmtp.com/turbo-api-1/#export-reports-in-csv-by-type-in-time-range)
 - [All reports by type](https://serversmtp.com/turbo-api-1/#all-reports-by-type)
 - [Count all reports by type](https://serversmtp.com/turbo-api-1/#count-all-reports-by-type)
 - [Export all reports in CSV by type](https://serversmtp.com/turbo-api-1/#export-all-reports-in-csv-by-type)
 - [Delete report by type](https://serversmtp.com/turbo-api-1/#delete-report-by-type)
 - [Delete all spam reports](https://serversmtp.com/turbo-api-1/#delete-all-spam-reports)
- [Statistics](https://serversmtp.com/turbo-api-1/#statistics)
 - [Email sent statistics](https://serversmtp.com/turbo-api-1/#email-sent-statistics)
 - [Last email sent statistics](https://serversmtp.com/turbo-api-1/#last-email-sent-statistics)
 - [Count of email sent](https://serversmtp.com/turbo-api-1/#count-of-email-sent)
 - [Export email sent statistics in CSV](https://serversmtp.com/turbo-api-1/#export-email-sent-statistics-in-csv)
- [Tools](https://serversmtp.com/turbo-api-1/#tools)
 - [Click tracking status](https://serversmtp.com/turbo-api-1/#click-tracking-status)
 - [Open tracking status](https://serversmtp.com/turbo-api-1/#open-tracking-status)
 - [Enable / disable click tracking](https://serversmtp.com/turbo-api-1/#enable-disable-click-tracking)
 - [Enable / disable open tracking](https://serversmtp.com/turbo-api-1/#enable-disable-open-tracking)
- [Errors](https://serversmtp.com/turbo-api-1/#errors)
 - [General errors](https://serversmtp.com/turbo-api-1/#general-errors)
 - [Send Api errors](https://serversmtp.com/turbo-api-1/#send-api-errors)

- [Go to turboSMTP website](https://www.serversmtp.com)
- [Go to turboSMTP webhooks reference](https://www.serversmtp.com/event-webhook-reference/)
- [Go to turboSMTP dashboard](https://dashboard.serversmtp.com)

# turboSMTP Public API

## Version 1.0

**IMPORTANT: This turboSMTP Public API Version 1.0 will no longer be supported after June 30th, 2024.**

[Click here to find the latest version of the turboSMTP Public API Version 2.](https://serversmtp.com/turbo-api/ 'Go to turboSMTP Public API Version 2')

This document contains information about turboSMTP's public API. Please report bugs to: [api@turbo-smtp.com](mailto:api@turbo-smtp.com)

# Getting started

## Data interchange format

For the most part (and where not otherwise explicit) turboSMTP’s API uses JSON as the data format of choice when it comes to request and response bodies.

## Accessing resources

Authorization to access a user’s resource is granted to clients provided they set a authentication cookie into their request, valued with the proper authentication key issued by turboSMTP servers. The authentication key is user-based and it is issued by turboSMTP servers upon successful user’s email address + password challenge, performed by means of appropriate request.

As an example, such cookie or request header should look like what follows:

`Authorization: 44cf4c36d0e9cbe32f6fd83ff69a9df3b6212828c`

## Authentication (a.k.a. login)

> Request headers:

```
Content-Type: application/json; charset=utf-8
```

> Request Body Example

```
{
    "email": "turboSMTP email address",
    "password": "turboSMTP password",
    "no_expire": "1"
}
```

> Response headers:

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
```

> Response body (successful authentication):

```
{
    "auth" : "44cf4c36d0e9cbe32f6fd83ff69a9df3b62128s28c"
}
```

> Response body (unsuccessful authentication):

```
{
    "errorCode" : 1,
    "message": "Wrong credentials specified"
}
```

The `auth` value in the response has to be used as a custom header or cookie for all requests towards turboSMTP's API.

### Request endpoint:

`POST https://dashboard.serversmtp.com/api/authorize`

- `email` is the email of turboSMTP account
- `password` is the password of turboSMTP account
- `no_expire` (optional) in this case session doesn't expire.

If no\_expire value is not specified or is set to 0, the authentication will expire in 1 hour, otherwise it will not expire.

You can revoke API access using the **deauthorize** endpoint.

## Revoke API Access

> Request headers:

```
Content-Type: application/json; charset=utf-8
Authorization: "your authorization token"
```

> Response headers:

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
```

> Response body (successful authentication):

```
{
    "message": "Token deauthorized"
}
```

> Response body (unsuccessful authentication):

```
{
    "errorCode": 8,
    "message": "No authorization key was specified for request"
}
```

```
{
    "errorCode": 9,
    "message": "This authorization token doesn't exist."
}
```

### Request endpoint:

`POST https://dashboard.serversmtp.com/api/deauthorize`

No params needed

# Webhooks

TurboSMTP offers two types of event webhooks (Server To Server notification of events that occur to your emails): delivery and engagement events. The status of email delivery to the recipient is indicated by the delivery event, while the interaction of recipients with the email is represented by the engagement event. Please check the following pages for further information:

- English: [https://www.serversmtp.com/event-webhook-reference](https://www.serversmtp.com/event-webhook-reference 'Go to Webhooks reference')
- Italiano: [https://www.serversmtp.com/it/documentazione-per-le-notifiche-di-eventi-webhooks](https://www.serversmtp.com/it/documentazione-per-le-notifiche-di-eventi-webhooks 'Go to Webhooks reference')

# Send email

## Send email V2

> Request Body Example

```
{
    "from": "email address",
    "to": "recipient email address",
    "subject": "subject in string format",
    "content": "plain / text content",
    "html_content": "html content",
    "attachments": [
        {
            "name": "test.gif",
            "type": "image/gif",
            "content": "The Base64 encoded content of the attachment."
        },
{
            "name": "test.pdf",
            "type": "application/pdf",
            "content": "The Base64 encoded content of the attachment."
        }
    ]
}
```

> Attachment object

```
{
  "content": "The Base64 encoded content of the attachment.",
  "name": "The filename of the attachment.", 
  "type": "The mime type of the content you are attaching. For example, image/gif."
}
```

> Request headers:

```
Content-Type: application/json; charset=utf-8
```

> Response headers:

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
```

> Response body (Turbo-SMTP successfully received your message):

```
 { 
   "message":"OK" 
   "mid": 1475205839938715648
 }
```

> Response body Example (in case of error):

```
 { 
     "message": "error",
     "errors": [
        "error message"
     ]
 } 
```

### Request endpoint:

`POST https://api.eu.turbo-smtp.com/api/v2/mail/send` --> for **EU** users

`POST https://api.turbo-smtp.com/api/v2/mail/send` --> for **NON EU** users

- `authuser` is the email of turboSMTP account (this param can be used as POST or Headers)
- `authpass` is the password of turboSMTP account (this param can be used as POST or Headers)
- `from` is the from address
- `to` is provided as comma-separated recipients list
- `subject` is the subject of the email (optional)
- `cc` is provided as comma-separated copy list (optional)
- `bcc` is provided as comma-separated hidden copy list (optional)
- `content` is the text content of the email (optional)
- `html_content` is the html content of the email (optional)
- `custom_headers` are additional headers, e.g. `{"X-key1":"value1", "X-key2":"value2"}` (optional)
- `reference_id` custom argument that you includes with an email sent and gets added to your Event Webhook response.
- `mime_raw` mime message which replaces `content` and `html_content`
- `attachments` array of attachment objects

### Attachments

It should be configured as an array of attachments.

#### Limitations

- The total size of your email, including attachments, must be less than 24MB.

Failed requests will always return an error response, including a response code and a message explaining the reason for the error.

| Response Code | Response Message | Description |
| --- | --- | --- |
| 200 | OK | Turbo-SMTP successfully received your message |
| 400 | BAD REQUEST | Something wrong with the request body/parameters |
| 401 | UNAUTHORIZED | Wrong credentials |
| 500 | SERVER\_UNAVAILABLE | An error occurred on a Turbo-Smtp server. |

### Errors

Please check [Errors section](https://serversmtp.com/turbo-api-1/#send-api-errors) for a detailed errors documentation.

### Some implementations

PHP: [Download PHP sample code](https://dashboard.serversmtp.com/downloads/turbo_send_email_code_v2.zip 'Go to PHP implementation')

C#: [Download C# sample code](https://dashboard.serversmtp.com/downloads/CSharp-turboSMTP-API_v2.zip 'Go to C# implementation')

Java: [Download Java sample code](https://dashboard.serversmtp.com/downloads/Java-turboSMTP-API_v2.zip 'Go to Java implementation')

Python: [Download Python sample code](https://dashboard.serversmtp.com/downloads/Python-turboSMTP-API_v2.zip 'Go to Python implementation')

Perl: [Download Perl sample code](https://dashboard.serversmtp.com/downloads/Perl-turboSMTP-API_v2.zip 'Go to Perl implementation')

Ruby: [Download Ruby sample code](https://dashboard.serversmtp.com/downloads/Ruby-turboSMTP-API_v2.zip 'Go to Ruby implementation')

## Send email V1 deprecated

This endpoint is deprecated and will stop working on April 1st, 2022

### Migration instructions

1. Change the API url from `https://api.turbo-smtp.com/api/mail/send` to: 
 `https://api.turbo-smtp.com/api/v2/mail/send` (NON EU users) 
 or 
 `https://api.eu.turbo-smtp.com/api/v2/mail/send` (EU users)
2. Handle all types of status codes and status messages refer to [Send API v2](https://serversmtp.com/turbo-api-1/#send-email-v2)

> Request Body Example

```
{
    "from": "email address",
    "to": "recipient email address",
    "subject": "subject in string format",
    "content": "plain / text content",
    "html_content": "html content",
    "attachments": [
        {
            "name": "test.gif",
            "type": "image/gif",
            "content": "The Base64 encoded content of the attachment."
        },
{
            "name": "test.pdf",
            "type": "application/pdf",
            "content": "The Base64 encoded content of the attachment."
        }
    ]
}
```

> Attachment object

```
{
  "content": "The Base64 encoded content of the attachment.",
  "name": "The filename of the attachment.", 
  "type": "The mime type of the content you are attaching. For example, image/gif."
}
```

> Request headers:

```
Content-Type: application/json; charset=utf-8
```

> Response headers:

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
```

> Response body (successful authentication):

```
 { 
   "message":"OK" 
 }
```

> Response body (in case of error):

```
 { 
     "message": "error",
     "errors": [
        "error message"
     ]
 } 
```

### Request endpoint:

`POST https://api.turbo-smtp.com/api/mail/send`

- `authuser` is the email of turboSMTP account (this param can be used as POST or GET)
- `authpass` is the password of turboSMTP account (this param can be used as POST or GET)
- `from` is the from address
- `to` is provided as comma-separated recipients list
- `subject` is the subject of the email (optional)
- `cc` is provided as comma-separated copy list (optional)
- `bcc` is provided as comma-separated hidden copy list (optional)
- `content` is the text content of the email (optional)
- `html_content` is the html content of the email (optional)
- `custom_headers` are additional headers, e.g. `{"X-key1":"value1", "X-key2":"value2"}` (optional)
- `mime_raw` mime message which replaces `content` and `html_content`
- `attachments` array of attachment objects

### Attachments

It should be configured as an array of attachments.

#### Limitations

- The total size of your email, including attachments, must be less than 4MB.

### Some implementations

PHP: [Download PHP sample code](https://dashboard.serversmtp.com/downloads/turbo_send_email_code.zip 'Go to PHP implementation')

C#: [Download C# sample code](https://dashboard.serversmtp.com/downloads/CSharp-turboSMTP-API.zip 'Go to C# implementation')

Java: [Download Java sample code](https://dashboard.serversmtp.com/downloads/Java-turboSMTP-API.zip 'Go to Java implementation')

Python: [Download Python sample code](https://dashboard.serversmtp.com/downloads/Python-turboSMTP-API.zip 'Go to Python implementation')

Perl: [Download Perl sample code](https://dashboard.serversmtp.com/downloads/Perl-turboSMTP-API.zip 'Go to Perl implementation')

Ruby: [Download Ruby sample code](https://dashboard.serversmtp.com/downloads/Ruby-turboSMTP-API.zip 'Go to Ruby implementation')

# Accounts

The following requests will allow you to show accounts info.

## Account info

### Request endpoint:

`GET https://dashboard.serversmtp.com/api/user/info`

No params needed.

> Request headers:

```
Content-Type: application/json; charset=utf-8
```

> Response headers:

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
```

> Response body:

```
{
  "passwd":"",
  "active":true,
  "email":"andrea@emailchef.com",
  "gateway":"q1",
  "ip":3350965831,
  "accountid":18897904
  ...
}
```

## Active plans

### Request endpoint:

`GET https://dashboard.serversmtp.com/api/plans`

No params needed.

> Request headers:

```
Content-Type: application/json; charset=utf-8
```

> Response headers:

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
```

> Response body:

```
[{
    "id": 1,
    "accountID": 584,
    "smtp_limit": 200,
    "smtp_limit_interval": "Daily",
    "plan_expiration": "2019-01-04T00:00:00.000Z",
    "smtp_count": 1,
    "last_used": "2018-04-24T08:58:06.000Z",
    "parentid": null,
    "expired": 0,
    "active": true
}, {
    "id": 2,
    "accountID": 584,
    "smtp_limit": 100000,
    "smtp_limit_interval": "Monthly",
    "plan_expiration": "2018-05-03T00:00:00.000Z",
    "smtp_count": 0,
    "last_used": "2018-04-04T08:47:16.000Z",
    "parentid": null,
    "expired": 0,
    "active": true
}]
```

## Subaccounts list

### Request endpoint:

`GET https://dashboard.serversmtp.com/api/useraccounts/summary`

No params needed.

> Request headers:

```
Content-Type: application/json; charset=utf-8
```

> Response headers:

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
```

> Response body:

```
[{
     "id": 584,
     "email": "subaccount@dueclic.com",
     "active": true,
     "ip": "199.244.75.99",
     "sent": 3,
     "limit": -1,
     "reputation": 5
 }]
```

# Reports

The following requests will allow you to show a reports list, count results, delete a single instance and export in CSV format.

In the list requests `20` results for page are shown.

## Reports by type in time range

### Request endpoint:

`GET https://dashboard.serversmtp.com/web/api/reports/:type?start=:start&end=:end&page=:page&filter=:filter&tz=:tz`

- `type` parameter represents the type of report, possible values are:
 - `bounce` for bounces
 - `hardbounce` for hard bounces 

 - `softbounce` for soft bounces
 - `spam` for spam
 - `unsub` for unsubscriptions
- `start` parameter is a date formatted as 'YYYY-MM-DD'
- `end` parameter is a date formatted as 'YYYY-MM-DD'
- `page` parameter represents the page number
- `filter` parameter is the search filter for email
- `tz` is the timezone offset (default: `+01:00`)

> Request headers:

```
Content-Type: application/json; charset=utf-8
```

> Response headers:

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
```

> Response body:

```
[
    {
        "cid": 323223135,
        "email": "andrea.colombini@dueclic.com",
        "ts": "2018-03-27T06:31:42.000Z",
        "response": "62.149.128.154 does not like recipient. Remote host said: 550 5.1.1 <andrea.colombini@dueclic.com> : sorry, no mailbox here by that name (#5.1.1 - chkuser) {1.2.3.4} Giving up on 1.2.3.4. "
    }
]
```

## Count reports by type in time range

### Request endpoint:

`GET https://dashboard.serversmtp.com/web/api/reports/:type/count?start=:start&end=:end&page=:page&filter=:filter&tz=:tz`

- `type` parameter represents the type of report, possible values are:
 - `bounce` for bounces
 - `hardbounce` for hard bounces 

 - `softbounce` for soft bounces
 - `spam` for spam
 - `unsub` for unsubscriptions
- `start` parameter is a date formatted as 'YYYY-MM-DD'
- `end` parameter is a date formatted as 'YYYY-MM-DD'
- `page` parameter represents the page number
- `filter` parameter is the search filter for email
- `tz` is the timezone offset (default: `+01:00`)

> Request headers:

```
Content-Type: application/json; charset=utf-8
```

> Response headers:

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
```

> Response body:

```
{
    "count" : 1
}
```

## Export reports in CSV by type in time range

### Request endpoint:

`GET https://dashboard.serversmtp.com/web/api/reports/:type/csv?start=:start&end=:end&page=:page&filter=:filter&tz=:tz`

- `type` parameter represents the type of report, possible values are:
 - `bounce` for bounces
 - `hardbounce` for hard bounces 

 - `softbounce` for soft bounces
 - `spam` for spam
 - `unsub` for unsubscriptions
- `start` parameter is a date formatted as 'YYYY-MM-DD'
- `end` parameter is a date formatted as 'YYYY-MM-DD'
- `page` parameter represents the page number
- `filter` parameter is the search filter for email
- `tz` is the timezone offset (default: `+01:00`)

## All reports by type

### Request endpoint:

`GET https://dashboard.serversmtp.com/web/api/reports/:type/all?page=:page&filter=:filter&tz=:tz`

- `type` parameter represents the type of report, possible values are:
 - `bounce` for bounces
 - `hardbounce` for hard bounces 

 - `softbounce` for soft bounces
 - `spam` for spam
 - `unsub` for unsubscriptions
- `page` parameter represents the page number
- `filter` parameter is the search filter for email
- `tz` is the timezone offset (default: `+01:00`)

> Request headers:

```
Content-Type: application/json; charset=utf-8
```

> Response headers:

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
```

> Response body:

```
[
    {
        "cid": 323223135,
        "email": "andrea.debernardi@dueclic.com",
        "ts": "2018-03-27T06:31:42.000Z",
        "response": "62.149.128.154 does not like recipient. Remote host said: 550 5.1.1 <andrea.debernardi@dueclic.com> : sorry, no mailbox here by that name (#5.1.1 - chkuser) {1.2.3.4} Giving up on 1.2.3.4. "
    }
]
```

## Count all reports by type

### Request endpoint:

`GET https://dashboard.serversmtp.com/web/api/reports/:type/all/count?filter=:filter&tz=:tz&page=:page`

- `type` parameter represents the type of report, possible values are:
 - `bounce` for bounces
 - `hardbounce` for hard bounces 

 - `softbounce` for soft bounces
 - `spam` for spam
 - `unsub` for unsubscriptions
- `filter` parameter is the search filter for email
- `tz` is the timezone offset (default: `+01:00`)
- `page` parameter represents the page number (optional)

> Request headers:

```
Content-Type: application/json; charset=utf-8
```

> Response headers:

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
```

> Response body:

```
{
    "count" : 520
}
```

## Export all reports in CSV by type

### Request endpoint:

`GET https://dashboard.serversmtp.com/web/api/reports/:type/all/csv?filter=:filter&tz=:tz&page=:page`

- `type` parameter represents the type of report, possible values are:
 - `bounce` for bounces
 - `spam` for spam
 - `unsub` for unsubscriptions
- `start` parameter is a date formatted as 'YYYY-MM-DD'
- `end` parameter is a date formatted as 'YYYY-MM-DD'
- `page` parameter represents the page number
- `filter` parameter is the search filter for email
- `tz` is the timezone offset (default: `+01:00`)
- `page` parameter represents the page number (optional)

## Delete report by type

### Request endpoint:

`DELETE https://dashboard.serversmtp.com/web/api/reports/:type?ids=:ids`

- `type` parameter represents the type of report, possible values are:
 - `bounce` for bounces
 - `spam` for spam
 - `unsub` for unsubscriptions
- `ids` comma separated reports id to delete

> Request headers:

```
Content-Type: application/json; charset=utf-8
```

> Response headers:

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
```

> Response body:

```
{
    "success" : true
}
```

## Delete all spam reports

### Request endpoint:

`DELETE https://dashboard.serversmtp.com/web/api/reports/spam/all`

No params needed

> Request headers:

```
Content-Type: application/json; charset=utf-8
```

> Response headers:

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
```

> Response body:

```
{
    "success" : true
}
```

# Statistics

The following requests will allow you to show statistics list, count results and export in CSV format.

In the list requests `10` results for page are shown.

## Email sent statistics

### Request endpoint:

`GET https://dashboard.serversmtp.com/api/stats/panes/emails?start=:start&end=:end&page=:page&filter=:filter&tz=:tz`

- `start` parameter is a date formatted as 'YYYY-MM-DD H:i:s'
- `end` parameter is a date formatted as 'YYYY-MM-DD H:i:s'
- `page` parameter represents the page number
- `filter` parameter is the status filter, possible values:
 - `*` or not set to get all statuses
 - `NEW`, `DEFER`, `SUCCESS`, `OPEN`, `CLICK`, `REPORT`, `FAIL`, `SYSFAIL`, `UNSUB`, `REPORT`
 - Combination of statuses in array format
- `tz` is the timezone offset (default: `+01:00`)

Some filter combinations:

- Queued emails : `["NEW", "DEFER"]`
- Delivered emails : `["SUCCESS","OPEN","CLICK","UNSUB","REPORT"]`
- Read emails : `["OPEN","CLICK","UNSUB","REPORT"]`
- Bounce emails : `['FAIL', 'SYSFAIL']`

> Request headers:

```
Content-Type: application/json; charset=utf-8
```

> Response headers:

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
```

> Response body:

```
[
    {
        "id":4612864212,
        "subject":"Test for documentation",
        "sender":"christian.serafino@dueclic.com",
        "recipient":"andrea@debbaweb.it",
        "sendTime":"2018-04-24T10:58:06.000Z",
        "status":"SUCCESS",
        "error":null
    },
    {
        "id":4611292665,
        "subject":"Test for documentation #2",
        "sender":"andrea.debernardi@dueclic.com",
        "recipient":"test-dev@dueclic.com",
        "sendTime":"2018-04-23T17:33:02.000Z",
        "status":"OPEN",
        "error":null
    }
]
```

## Last email sent statistics

### Request endpoint:

`GET https://dashboard.serversmtp.com/api/stats/email-feed-last/:no`

- `no` parameter is number of results, possible values are: `10`, `20`, `30`

> Request headers:

```
Content-Type: application/json; charset=utf-8
```

> Response headers:

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
```

> Response body:

```
[
    {
        "id":4612864212,
        "subject":"Last test for documentation",
        "sender":"chiara.cortese@dueclic.com",
        "recipient":"andrea.debernardi@dueclic.com",
        "sendTime":"2018-04-24T10:58:06.000Z",
        "status":"SUCCESS",
        "error":null
    }
]
```

## Count of email sent

### Request endpoint:

`GET https://dashboard.serversmtp.com/api/stats/panes/emails/count?start=:start&end=:end&filter=:filter&tz=:tz`

- `start` parameter is a date formatted as 'YYYY-MM-DD H:i:s'
- `end` parameter is a date formatted as 'YYYY-MM-DD H:i:s'
- `filter` parameter is the status filter, possible values:
 - `*` or not set to get all statuses
 - `NEW`, `DEFER`, `SUCCESS`, `OPEN`, `CLICK`, `REPORT`, `FAIL`, `UNSUB`
 - Combination of statuses in array format
- `tz` is the timezone offset (default: `+01:00`)

Some filter combinations:

- Queued emails : `["NEW", "DEFER"]`
- Delivered emails : `["SUCCESS","OPEN","CLICK","UNSUB","REPORT"]`
- Read emails : `["OPEN","CLICK","UNSUB","REPORT"]`
- Bounce emails : `["FAIL"]`

> Request headers:

```
Content-Type: application/json; charset=utf-8
```

> Response headers:

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
```

> Response body:

```
{
    "count" : 220
}
```

## Export email sent statistics in CSV

### Request endpoint:

`GET https://dashboard.serversmtp.com/api/stats/emails/csv?start_date=:start_date&end_date=:end_date&filter=:filter&tz=:tz`

- `start_date` parameter is a date formatted as 'YYYY-MM-DD H:i:s'
- `end_date` parameter is a date formatted as 'YYYY-MM-DD H:i:s'
- `filter` parameter is the status filter, possible values:
 - `*` or not set to get all statuses
 - `NEW`, `DEFER`, `SUCCESS`, `OPEN`, `CLICK`, `REPORT`, `FAIL`, `UNSUB`, `REPORT`
 - Combination of statuses in array format
- `tz` is the timezone offset (default: `+01:00`)

Some filter combinations:

- Queued emails : `["NEW", "DEFER"]`
- Delivered emails : `["SUCCESS","OPEN","CLICK","UNSUB","REPORT"]`
- Read emails : `["OPEN","CLICK","UNSUB","REPORT"]`
- Bounce emails : `["FAIL"]`

# Tools

The following requests will allow you to see if turboSMTP tools are enabled / disabled and change.

## Click tracking status

### Request endpoint:

`GET https://dashboard.serversmtp.com/api/tools/clickTracking`

> Request headers:

```
Content-Type: application/json; charset=utf-8
```

> Response headers:

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
```

> Response body (in case of enabling):

```
{
    "id": "clickTracking",
    "forced": false,
    "requiredSettings": [],
    "enabled": true,
    "settings": [
        {
            "key": "clicktracking",
            "value": true
        },
        {
            "key": "clicktracking_plaintext",
            "value": false
        }
    ]
}
```

## Open tracking status

### Request endpoint:

`GET https://dashboard.serversmtp.com/api/tools/openingTracking`

> Request headers:

```
Content-Type: application/json; charset=utf-8
```

> Response headers:

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
```

> Response body (in case of enabling):

```
{
  "id": "openingTracking",
  "forced": false,
  "requiredSettings": [],
  "enabled": true,
  "settings": []
}
```

## Enable / disable click tracking

### Request endpoint:

`PUT https://dashboard.serversmtp.com/api/tools/clickTracking/:action`

- `action` param, possible values are: `enable` or `disable`

> Request headers:

```
Content-Type: application/json; charset=utf-8
```

> Response headers:

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
```

> Response body (in case of enabling):

```
{
    "id": "clickTracking",
    "forced": false,
    "requiredSettings": [],
    "enabled": true,
    "settings": [
        {
            "key": "clicktracking",
            "value": true
        },
        {
            "key": "clicktracking_plaintext",
            "value": false
        }
    ]
}
```

## Enable / disable open tracking

### Request endpoint:

`PUT https://dashboard.serversmtp.com/api/tools/openingTracking/:action`

- `action` param, possible values are: `enable` or `disable`

> Request headers:

```
Content-Type: application/json; charset=utf-8
```

> Response headers:

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
```

> Response body (in case of disabling):

```
{
    "id": "openingTracking",
    "forced": false,
    "requiredSettings": [],
    "enabled": false,
    "settings": []
}
```

# Errors

## General errors

The turboSMTP API uses the following error codes:

| Error Type | Meaning |
| --- | --- |
| 1 | Invalid authorization credentials |
| 2 | Provided account is inactive. Maybe you are banned. |
| 3 | Invalid authorization token |
| 4 | Resource not found |
| 5 | Server system error |
| 6 | Concurrent modification exception |
| 7 | Access to requested resources is denied |

## Send Api errors

### Missing username/password

```
{
    "errorCode": 3,
    "message": "Invalid authorization token",
    "details": "No authorization key was specified for request: POST /api/mail/send"
}
```

### Invalid username/password

```
{
    "error": 3,
    "message": "Wrong credentials specified"
}
```

### Missing sender

```
{
    "message": "error",
    "errors": [
        "missing or not valid sender email (from)"
    ]
}
```

### Missing recipients

```
{
    "message": "error",
    "errors": [
        "missing recipients (to)"
    ]
}
```

### Invalid recipients (to-cc-bcc)

```
{
    "message": "error",
    "errors": [
        [
            "'INVALID_EMAIL' 'to' email not valid"
        ]
    ]
}
```

### Invalid Mime

```
{
    "message": "error",
    "errors": {
        "message": "error",
        "errors": "Invalid Mime"
    }
}
```

### No enough credit in account subscription

```
{
    "message": "error",
    "errors": {
        "message": "error",
        "errors": "nocredit"
    }
}
```

### deactivated account

```
{
    "error": 3,
    "message": "Account for  test@domain.com  is inactive"
}
```

[Request/Response details](https://serversmtp.com/turbo-api-1/#)