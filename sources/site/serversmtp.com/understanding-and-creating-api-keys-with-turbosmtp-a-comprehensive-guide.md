# Source: https://serversmtp.com/understanding-and-creating-api-keys-with-turbosmtp-a-comprehensive-guide

## What are API Keys?

API Keys are unique codes used to securely connect applications or systems with turboSMTP.

Each key has two parts:

- **Consumer Key**, which identifies your application and acts as your username.
- **Consumer Secret**, a private code that proves your application is allowed to use turboSMTP. It will be your password.

These keys let your applications safely access turboSMTP’s services, including sending emails through its SMTP servers, and allow your applications to do so safely and securely.

## Why use API keys?

API Keys **provide a high level of security** when connecting your applications to turboSMTP. They are also required for sending emails via turboSMTP’s SMTP servers, ensuring secure and controlled access.

Unlike traditional username and password combinations, API Keys are designed to be long, complex, and unique, making them difficult to guess or compromise.

Furthermore, you have **full control over these keys**: you can generate new ones as needed and revoke them at any time if you suspect that a key has been compromised or if you no longer need a particular integration.

## Key benefits of using API Keys with turboSMTP.

- **Enhanced Security**: API Keys ensure that only authorized applications can connect, reducing the risk of unauthorized access.
- **Ease of Use**: once an API Key is generated, it can be easily integrated into your applications, streamlining the connection process.
- **Full Control**: you can revoke or regenerate API Keys at any time, giving you control over which applications have access to your turboSMTP services.
- **Scalability**: whether you’re sending a few emails or managing large-scale campaigns, API Keys allow you to seamlessly integrate turboSMTP into your workflow.

API Keys are essential not only for automating email sending and managing large campaigns but also for securely connecting your applications to turboSMTP’s SMTP servers.

## How to generate API Keys in turboSMTP.

This guide shows you how to **create API Keys** directly from your turboSMTP dashboard. Follow these steps to generate your keys quickly and start using them securely in your applications.

1. Log in to the turboSMTP dashboard and select the _Settings_ option from the main menu on the left.
2. Select the _Integrations_ tab, and then, in the _API Keys_ block, click the _Edit_ button.

[![How to Generate API Keys in turboSMTP][base64-image]](https://serversmtp.com/wp-content/uploads/2025/09/how-to-generate-api-keys-in-turbosmtp-1.jpg)

3. Click the _Create API Key_ button.

[![How to Generate API Keys in turboSMTP][base64-image]](https://serversmtp.com/wp-content/uploads/2025/09/how-to-generate-api-keys-in-turbosmtp-2.jpg)

4. Enter the name of your API Key in the designated field (this name is for internal reference within the turboSMTP dashboard). Then, choose which services the API can access (SMTP Sending, HTTP API Sending, Statistics and Management APIs). 
 If you wish, choose specific IPs to restrict access to the API.
5. Then, click the _Generate API Key_ button at the bottom right.

[![How to Generate API Keys in turboSMTP][base64-image]](https://serversmtp.com/wp-content/uploads/2025/09/how-to-generate-api-keys-in-turbosmtp-3.jpg)

6. On the confirmation screen, you will see the details of the newly generated API Key. In addition to the name, you can view and copy the _Consumer Key_ and _Consumer Secret_.

[![How to Generate API Keys in turboSMTP][base64-image]](https://serversmtp.com/wp-content/uploads/2025/09/how-to-generate-api-keys-in-turbosmtp-4.jpg)

#### Note

Please note that the Consumer Secret is only displayed on this screen and cannot be retrieved later.

7. Click the _Ok_ button at the bottom right to return to the API Keys list screen. Here, you can view the generated API Keys, copy the _Consumer Key_, or delete the API Key.

[![How to Generate API Keys in turboSMTP][base64-image]](https://serversmtp.com/wp-content/uploads/2025/09/how-to-generate-api-keys-in-turbosmtp-5.jpg)

### **📌 First-time dashboard access.**

At your first login as a new turboSMTP customer, a popup will prompt you to create your first API Keys. This is **required to securely send emails via SMTP**.

Just click the button _Generate API Keys_ to generate your keys instantly.

[![][base64-image]](https://serversmtp.com/wp-content/uploads/2025/09/api-keys-dashboard-alert.jpg)