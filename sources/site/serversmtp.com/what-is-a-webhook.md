# Source: https://serversmtp.com/what-is-a-webhook

A webhook is a simple way to allow **your online accounts to communicate with each other** and exchange notifications in real time when a pre-determined event takes place. The hook is created using third party applications.

For example, webhooks are how:

- **PayPal** notifies your accounting app when customers pay you.
- A **WordPress** signup form sends the information entered by a user directly into your CRM.
- **WooCommerce** sends you an alert when someone places a product in the shopping cart on your ecommerce site.

If want to transfer data from one app to another, you will need to know how to use webhooks.

[**IFTTT**](https://ifttt.com/) and [**Zapier**](https://zapier.com/) both provide webhooks to connect services for smartphones, video surveillance cameras, and other technologies. IFTTT, in particular, is also accessible to users without coding or development skills.

Let’s learn about webhooks and how to make your favorite apps talk to each other (find here the complete turboSMTP **[email webhook reference](https://serversmtp.com/event-webhook-reference/)**).

## Introduction to the Webhook

Webhooks contain a message (a “payload”) that is **sent to a unique URL**, generally the address of the app.

So you need to tell the first app – your ecommerce store, for example – **the URL of the webhook of the app that needs the data**. In this case it could be an app that automatically fills the purchase order.

**Let’s say you wanted to automatically trigger an invoice for a new order**. You open the invoice app, create a template, and copy the webhook URL. Next, you open your ecommerce store app and add the address to the webhook settings. When your ecommerce app pings the webhook URL (or if you enter it in the browser address bar), your invoice app notices and creates the invoice.

## The Differences Between a Webhook and an API

Both webhooks and APIs move data between your apps. **An API delivers the data from the provider; the webhooks allow the provider to send the data to you**.

The advantage of webhooks over APIs is that the **updates are communicated in real time** through the provider, without a request to the service provider.

**The timeliness of updates is a significant factor** because apps are increasingly integrated with third-party services. The ability to make decisions is therefore closely linked to the availability of updated data.

## Sending Data

**The first step** in using a webhook is to **give the provider a URL to send requests to**. This is often done through a backend panel or an API. This means that you must also set up a URL in your app that is directly accessible from the web.

Most webhooks will **send you data as a JSON file** to be interpreted as form data. Your provider will tell you how the data will be delivered or even allow you to choose. Both methods are easy to manage and most frameworks will do the work for you.

## Debugging a Webhook

Debugging a webhook **is a complex task that can be made easier with some tools**:

- Use [RequestBin](https://requestbin.com/) to verify incoming HTTP requests from any source and inspect headers and payloads.
- Simulate requests using platforms such as [curl](https://curl.haxx.se/) or [Postman](http://getpostman.com/).
- Test the code on your machine using a tool like [ngrok](https://ngrok.com/).
- Inspect the entire process using with [Runscope](https://www.runscope.com/provider-guide/troubleshooting-webhooks).

## Webhook Security

Webhooks provide data to a **publicly accessible URL**. This means that anyone on the internet can send HTTP requests to the endpoint. Luckily, there are several ways to **protect data and endpoints**:

- **Use HTTPS encryption**. The data sent and received in this way are encrypted before being sent over the internet and de-encrypted only by the receiving party. No one in the process can see the contents of the data.
- **Choose a secret**. Most webhook providers, [Github](https://developer.github.com/webhooks/securing/#setting-your-secret-token) for example, allow you to broadcast a “secret”. It could be a JSON payload field to be entered, or a token for every webhook request.
- **Accept only signed requests**. If you use a firewall to access the endpoint or you are able to limit HTTP traffic from specific IP addresses, you can also filter the IPs that can send endpoint data. However, this solution is rather technical.

## Limitations on the Use of Webhooks

The speed and convenience of webhooks should not lead you to ignore the APIs. **If your app has a certain level of complexity, you should probably use both solutions**. Webhooks brings some inherent limitations to their functionality:

- Webhooks are not provided by all services on the web.
- If **general statistics** interest you more than individual events, a single request to your app’s API is the simplest option.
- If you want to **set up an automatic action** following the receipt of a notification, you need an API.
- **Webhooks send short messages** such as “the user X made the action Y.” The messages do not include metadata about the user or the action they took. So a webhook will tell you that a user put something in their shopping cart; only an API can tall you whether that user has already set up a valid payment method.