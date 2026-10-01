# Source: https://serversmtp.com/event-webhook-reference

There are two types of event webhooks: **delivery** and **engagement** events.

The status of email delivery to the recipient is indicated by the delivery event, while the interaction of recipients with the email is represented by the engagement event.

In this page you have the event responses.

## **Delivery events**

Delivery events include processed, dropped, delivered, deferred and bounce.

- ### Processed

-   ```
    {
     "id": "5943788912",
     "mid": "5520611177",
     "status": "PROCESSED",
     "email": "example@turbo-smtp.com",
     "subject": "Test Email",
     "timestamp": 1576709777
    }
    ```

- ### Dropped

-   ```
    {
     "id": "5943799537",
     "mid": "5520621607",
     "status": "DROPPED",
     "email": "example@turbo-smtp.com",
     "subject": null,
     "timestamp": 1576710200,
     "reason": {
       "0": "Dropped due to complaining recipient",
       "response": "Dropped due to complaining recipient"
     }
    }
    ```

- ### Delivered

-   ```
    {
     "id": "5943788912",
     "mid": "5520611177",
     "status": "DELIVERED",
     "email": "example@turbo-smtp.com",
     "subject": "Test Email",
     "timestamp": 1576709777
    }
    ```

- ### Deferred

-   ```
    {
     "id": "5943788913",
     "mid": "5520611177",
     "status": "DEFERRED",
     "email": "example@turbo-smtp.com",
     "subject": "Test Email",
     "timestamp": 1576709777,
     "reason": "400 try again later",
     "attempt": 2
    }
    ```

- ### Bounce

-   ```
    {
     "id": "5943830007",
     "mid": "5520650288",
     "status": "BOUNCED",
     "email": "example@turbo-smtp.com",
     "subject": "Test Email",
     "timestamp": 1576711314,
     "reason": {
       "0": "104.47.38.36 does not like recipient. Remote host said: 550 5.4.1 Recipient address rejected: Access denied. AS(201806281) [BL2NAM02FT016.eop-nam02.prod.protection.outlook.com] {199.244.74.162} Giving up on 104.47.38.36. ",
       "response": "104.47.38.36 does not like recipient. Remote host said: 550 5.4.1 Recipient address rejected: Access denied. AS(201806281) [BL2NAM02FT016.eop-nam02.prod.protection.outlook.com] {199.244.74.162} Giving up on 104.47.38.36. "
     }
    }
    ```

## **Engagement events**

Engagement events include open, click, unsubscribe, and spam report.

- ### Open

-   ```
    {
     "id": "5943788913",
     "mid": "5520611177",
     "status": "OPENED",
     "email": "example@turbo-smtp.com",
     "subject": "Test Email",
     "timestamp": 1576709777,
     "useragent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36",
     "ip": "40.101.136.165"
    }
    ```

- ### Click

-   ```
    {
     "id": "5943788913",
     "mid": "5520611177",
     "status": "CLICKED",
     "email": "example@turbo-smtp.com",
     "subject": "Test Email",
     "timestamp": 1576709777,
     "useragent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36",
     "url": "https://serversmtp.com",
     "ip": "156.218.154.17"
    }
    ```

- ### Unsubscribe

-   ```
    {
     "id": "5943788913",
     "mid": "5520611177",
     "status": "UNSUBSCRIBED",
     "email": "example@turbo-smtp.com",
     "subject": "Test Email",
     "timestamp": 1576709777
    }
    ```

- ### Spam report

-   ```
    {
     "id": "5943788913",
     "mid": "5520611177",
     "status": "REPORT",
     "email": "example@turbo-smtp.com",
     "subject": "Test Email",
     "timestamp": 1576709777
    }
    ```

## **Event type**

| | Processed | Dropped | Delivered | Deferred | Bounce | Open | Click | Unsubscribed | Spam Report |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **ID** | | | | | | | | | |
| **MID** | | | | | | | | | |
| **Status** | | | | | | | | | |
| **Email** | | | | | | | | | |
| **Subject** | | | | | | | | | |
| **Timestamp** | | | | | | | | | |
| **Reason** | | | | | | | | | |
| **Attempt** | | | | | | | | | |
| **Useragent** | | | | | | | | | |
| **IP** | | | | | | | | | |
| **URL** | | | | | | | | | |

**ID** – The ID that identifies the event. 
**Mid** – The ID attached to the message. 
**Status** – The event type: processed, dropped, delivered, deferred, bounce, open, click, spam report, unsubscribe. 
**Email** – The recipient’s email address. 
**Subject** – The email subject. 
**Timestamp** – When the message was sent according to Unix time. This time in GMT (GMT+0). 
**Reason** – Any kind of error response. It is returned by the receiving server and indicates the reason for which the specific event was triggered. 
**Attempt** – The number of times turboSMTP has attempted to deliver this message. 
**Useragent** – The user agent responsible for the event, i.e. a web browser. 
**IP** – The IP address of the recipient who interacted with the message. 
**URL** – The URL within the email clicked on by the recipient.