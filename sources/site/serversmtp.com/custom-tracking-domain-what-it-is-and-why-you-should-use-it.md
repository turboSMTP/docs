# Source: https://serversmtp.com/custom-tracking-domain-what-it-is-and-why-you-should-use-it

# Custom Tracking Domain: what it is, how it works, and why it can improve deliverability.

_Setting up a custom tracking domain allows you to optimize the delivery rate, building trust among subscribers and positively impacting metrics. But how do you create a custom tracking domain? And how do you configure it on TurboSMTP? We’ll explain it to you in this guide._

## Prefer to watch rather than read?

We put together a short video that covers everything: what a Custom Tracking Domain actually is, why using a shared tracking domain can quietly damage your sender reputation, and how to set yours up on TurboSMTP (even if you’ve never touched a DNS record before).

![YouTube video player](https://i.ytimg.com/vi/O4dMLxB0G30/hqdefault.jpg)

[\[ go back to top \]](https://serversmtp.com/custom-tracking-domain-what-it-is-and-why-you-should-use-it/#top)

## To begin: what is a Custom Tracking Domain?

A Custom Tracking Domain is a domain you exclusively use to track email opens and clicks. 

If you haven’t set up a custom tracking domain but are still tracking email opens and clicks, then you are using a shared tracking domain.

A custom tracking domain can have significant benefits for your campaigns. In fact, it allows you to:

- **Preserve your sender reputation**,
- **improve email deliverability** (by avoiding being blacklisted due to a domain shared with spammers),
- **enhance engagement rates** for your contents using branded links that communicate to the reader that it is your company (and not someone else) tracking your emails.

## ******Get Early Access to Custom Tracking Domain!******

### **Take advantage of all the benefits of the latest feature on TurboSMTP.**

Get exclusive access to TurboSMTP’s new functionality and be among the first to preview it: it’s available only to a selected group of users! 
Contact us via chat to be one of the first to try TurboSMTP’s Custom Tracking Domain: our experts will personally guide you through the activation.

[GET ACCESS TO CUSTOM TRACKING DOMAIN](https://serversmtp.com/custom-tracking-domain-what-it-is-and-why-you-should-use-it/#)

But if you haven’t set up a custom tracking domain yet, **how can you find out which one you are using?** 

Simply hover your mouse over one of the links in your email (without clicking on it) and observe the URL it points to. 

You should replace this default tracking domain with your organization’s domain. For example, if your domain is _mycompany.com_, you should configure a tracking domain like _link.mycompany.com_ or _x.mycompany.com_ or _news.mycompany.com_ and use it with TurboSMTP.

The tracking domain is only visible to people who receive your email and hover or click on one of the tracked links. The same domain is also present in the open tracking pixel, but in this case, it won’t be visible to recipients (unless they carefully inspect the email and view its source code).

If you are one of those rare individuals who disable both open and click tracking, you can ignore this guide because the tracking domain will never appear in your emails. However, if you belong to the 99% of senders who track their metrics, a custom tracking domain could be beneficial to you.

But what are **the benefits of a custom tracking domain**?

The main advantages are two:

1. A custom tracking domain creates a **sense of greater reliability** among the recipients of your emails. More experienced users often hover their mouse over links before clicking, and seeing a domain they are familiar with (in this case, your company’s domain) instead of a default tracking domain can help build trust and, in turn, increase the click-through rate. This is why larger companies often use custom tracking domains rather than relying on the default ones provided by their email service providers. 

2. Setting up a custom tracking domain **isolates your reputation from that of other users**. This means that if a spammer manages to bypass security measures and send a campaign using the same tracking domain as yours, you could end up being blacklisted, negatively affecting the deliverability of your emails. However, by configuring a custom tracking domain, you can protect yourself from the negative consequences of other users’ actions.

[\[ go back to top \]](https://serversmtp.com/custom-tracking-domain-what-it-is-and-why-you-should-use-it/#top)

## **How to register a custom tracking domain: everything you need to know.**

First of all, you’ll need to decide whether to use a subdomain or register a new tracking domain.

The best solution is generally to create a subdomain of an existing domain, as this way you can leverage its reputation. A subdomain could be something like _link.yourdomain.com_ or _x.yourdomain.com_.

If you don’t have a domain that you can use for tracking (or if you can’t modify the DNS of your existing domain), you can register a new one.

Here’s how:

1. **Choose the domain registration service** you want to use. Among the best options are _GoDaddy_ and _Register.com_. 
 _GoDaddy_ is a reliable and reputable domain registration service known for its user-friendly interface, extensive domain options, and excellent customer support, making it a great choice for hassle-free domain registration. 
 _Register.com_ is one of the most popular services. It offers a broad range of domain extensions, hosting services, and tools for website creation. It has good customer service and features a simple and intuitive interface.
2. **Choose the name you desire** to create the tracking domain. If your organization is called BusinessABC and your existing corporate domain is _businessabc.com_, you could opt for a domain name like _businessabc.net_. If the exact name is not available, you could consider alternatives like businessemail.net. 
3. **You won’t need additional services** like email hosting or a website; you only need the domain. You might consider opting for WHOIS protection to safeguard your contact information, but in any case, most services offer this feature for free.
4. After registering the name, you can **set up a CNAME record for the domain**, which can be found in the ‘DNS Settings’ of the chosen service.

If you’re not familiar with what a CNAME record is, you may need to consult your webmaster or domain administrator. 

[Here is a support page provided by Google that explains how to configure a CNAME record.](https://support.google.com/a/answer/47283?hl=en)

Below are instructions on setting up a CNAME record with some of the most popular services.

- [Google Domains](https://support.google.com/domains/answer/3290350?hl=en)
- [GoDaddy](https://www.godaddy.com/help/add-a-cname-record-19236) 
- [Namecheap](https://www.namecheap.com/support/knowledgebase/article.aspx/9646/2237/how-to-create-a-cname-record-for-your-domain/)
- [Bluehost](https://my.bluehost.com/hosting/help/resource/714)
- [Ionos](https://www.ionos.com/help/domains/configuring-cname-records-for-subdomains/configuring-a-cname-record-for-a-subdomain/)
- [Hover](https://help.hover.com/hc/en-us/articles/217282457-Managing-DNS-records-#h_5eab4aa7-b044-4cc6-a3c0-5869f583edc8)

[\[ go back to top \]](https://serversmtp.com/custom-tracking-domain-what-it-is-and-why-you-should-use-it/#top)

## **How to register your Custom Tracking Domains on TurboSMTP.**

To use a Custom Tracking Domain on TurboSMTP, log in to your dashboard and select **_Settings_** from the left-hand side menu. 

Then, click on the tab **_Tracking_**.

[![How to register your Custom Tracking Domains on TurboSMTP][base64-image]](https://serversmtp.com/wp-content/uploads/2023/07/custom-tracking-domains-1.jpg)

Activate the **_Custom Tracking Domains_** feature by toggling the dedicated switch, and then click on the **_Edit_** button.

[![How to register your Custom Tracking Domains on TurboSMTP][base64-image]](https://serversmtp.com/wp-content/uploads/2023/07/custom-tracking-domains-2.jpg)

#### INFO

To use your Custom Tracking Domain, at least one of the Open Tracking and Click Tracking features must be active.

Inside the opened window, you can add your _Custom Tracking Domains_ and manage the ones already inserted.

To add a new tracking domain, click on the **_Add tracking domain_** button.

[![How to register your Custom Tracking Domains on TurboSMTP][base64-image]](https://serversmtp.com/wp-content/uploads/2023/07/custom-tracking-domains-3.jpg)

Now, enter the name of your custom domain in the designated text field. 

By checking the **_Advanced options_** box, you can customize the subdomain; otherwise, a random one will be generated.

Once you’re done, click on the **_Add tracking domain_** button located at the bottom right.

[![How to register your Custom Tracking Domains on TurboSMTP][base64-image]](https://serversmtp.com/wp-content/uploads/2023/07/custom-tracking-domains-4.jpg)

At this point, you will be shown the 2 CNAME records to add to your hosting ([refer to this guide to learn how to do it](https://support.google.com/a/answer/47283?hl=en)).

[![How to register your Custom Tracking Domains on TurboSMTP][base64-image]](https://serversmtp.com/wp-content/uploads/2023/07/custom-tracking-domains-5.jpg)

#### INFO

The second CNAME record will be the same for all subdomains of the main domain and should be added only once. 
It may take up to 24 hours for the DNS record changes to take effect.

Once you have set up the DNS records, click on the **_Verify_** button and then click **_Ok_** to return to the _Custom Tracking Domains_ management window.

[![How to register your Custom Tracking Domains on TurboSMTP][base64-image]](https://serversmtp.com/wp-content/uploads/2023/07/custom-tracking-domains-6.jpg)

Within this page, you can manage your custom tracking domains and access a table that displays the following information for each domain:

- The name of the tracking domain with its corresponding verification icon. A green checkmark indicates a _verified_ domain, while a red exclamation point indicates a _pending_ domain.
- The _Dedicated_ setting (visible only in _Match sender domain_ rotation mode): by checking this box, the custom domain will be exclusively used with the corresponding sender domain.
- The status of the domain (active/inactive).

You can also filter the domains based on their name, on the verification status of DNS records (verified/pending), the domain status (enabled/disabled), or the “Dedicated” setting.

[![How to register your Custom Tracking Domains on TurboSMTP][base64-image]](https://serversmtp.com/wp-content/uploads/2023/07/custom-tracking-domains-9.jpg)

You can activate/deactivate each individual custom domain by toggling the dedicated switch in the _Status_ column.

By clicking on the row of each custom domain, a detailed window will open with a summary of the DNS records, the verification button, and the option to delete the domain (only if it’s not yet verified).

[![How to register your Custom Tracking Domains on TurboSMTP][base64-image]](https://serversmtp.com/wp-content/uploads/2023/07/custom-tracking-domains-10.jpg)

Just below the list table, you will find information about the _Domain Rotation_ mode. You can change this mode by clicking on the link named **_Change this behavior_**.

[![How to register your Custom Tracking Domains on TurboSMTP][base64-image]](https://serversmtp.com/wp-content/uploads/2023/07/custom-tracking-domains-7.jpg)

Once you open the link, you can choose whether to match your sender domain or not.

[![How to register your Custom Tracking Domains on TurboSMTP][base64-image]](https://serversmtp.com/wp-content/uploads/2023/07/custom-tracking-domains-8.jpg)

The **_Do not match the sender domain_** mode is selected by default. In this case, one of the active tracking domains will be used, regardless of the sender’s domain.

Selecting the **_Match sender domain_** mode will use the sender’s domain that corresponds to one of the active tracking domains. If the sender’s domain does not match any tracking domain, one of the active tracking domains (excluding those marked as ‘_Dedicated_‘) will be used.

#### DID YOU KNOW

When you set up your custom tracking domain on TurboSMTP, we add it to our monitoring system and keep a close eye on major blacklists. If your domain gets listed on any of these blacklists, we will contact you directly and provide suggestions on actions to take.

[\[ go back to top \]](https://serversmtp.com/custom-tracking-domain-what-it-is-and-why-you-should-use-it/#top)

## ****Get a Sneak Peek of TurboSMTP’s Custom Tracking Domain!****

### It’s available in beta version, exclusively for a few users ⏳

Want to be among the first to try it? Contact us in the chat: our customer service will provide an exclusive activation just for you. 
Don’t miss out on this unique opportunity: sign up for TurboSMTP for free and preview our Custom Tracking Domain!

[CONTACT US VIA CHAT FOR ACTIVATION!](https://serversmtp.com/custom-tracking-domain-what-it-is-and-why-you-should-use-it/#)

**TABLE OF CONTENTS**

1. [Prefer to watch rather than read?](https://serversmtp.com/custom-tracking-domain-what-it-is-and-why-you-should-use-it/#video)
2. [To begin: what is a Custom Tracking Domain?](https://serversmtp.com/custom-tracking-domain-what-it-is-and-why-you-should-use-it/#what)
3. [How to register a custom tracking domain: everything you need to know.](https://serversmtp.com/custom-tracking-domain-what-it-is-and-why-you-should-use-it/#how)
4. [How to register your Custom Tracking Domains on TurboSMTP.](https://serversmtp.com/custom-tracking-domain-what-it-is-and-why-you-should-use-it/#turbosmtp)