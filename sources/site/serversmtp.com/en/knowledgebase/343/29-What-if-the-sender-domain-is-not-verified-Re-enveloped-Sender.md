# Source: https://serversmtp.com/en/knowledgebase/343/29-What-if-the-sender-domain-is-not-verified-Re-enveloped-Sender.html

### Knowledgebase

### 29\. What if the sender domain is not verified? (Re-enveloped Sender)

After your turboSMTP account is activated, you can start sending emails even if your sender domain is not yet verified. In this case, our system uses a **"re-enveloping" technique** to allow email delivery without requiring advanced domain configuration.

Technically, this means the envelope sender address is rewritten by our servers to appear as coming from the **turbo-smtp.com domain**. For example, if you're sending an email from sender@example.com to recpt@example2.com, our servers will automatically rewrite the envelope sender to follow the VERP standard: bounce+rcpt=example2.com@turbo-smtp.com

This modification ensures the message passes **SPF checks**, since SPF verification is performed on **turbo-smtp.com**, not your unverified domain.

Additionally, our system adds a Sender header to your email (e.g., Sender: sender=example.com@turbo-smtp.com), allowing it to pass **DomainKey/DKIM** filters by verifying the signature with our own DNS records.

We also handle **bounce management** for you. You can:

- Download a **CSV file** containing bounced addresses from the turboSMTP servers.
- Or, choose to have bounce messages **forwarded to you**.

At any time, users can switch from this mode to the **Send without modification** (recommended) directly from the **Client Area**

#### Important note:

Using this re-enveloped sender method may result in a lower delivery rate. For optimal deliverability, we strongly recommend verifying your sender domain and using the "**Send without confirmation"**.

#### Also Read

[5\. Do I need a Credit Card to activate a Free Trial?](https://serversmtp.com/en/smtp/5-Do-I-need-a-Credit-Card-to-activate-a-Free-Trial/kb-3173.html) (Views: 902532)

**[5\. Do I need a Credit Card to activate a Free Trial?](https://serversmtp.com/en/knowledgebase/3173/5-Do-I-need-a-Credit-Card-to-activate-a-Free-Trial.html)** (Views: 902532)

[41\. Privacy Policy](https://serversmtp.com/en/smtp/41-Privacy-Policy/kb-6.html) (Views: 1410092)

**[41\. Privacy Policy](https://serversmtp.com/en/knowledgebase/6/41-Privacy-Policy.html)** (Views: 1410092)

[30\. Can I use turboSMTP with Outlook or Thunderbird and send a mass email via CC/BCC?](https://serversmtp.com/en/smtp/30-Can-I-use-turboSMTP-with-Outlook-or-Thunderbird-and-send-a-mass-email-via-CCorBCC/kb-4996.html) (Views: 773847)

**[30\. Can I use turboSMTP with Outlook or Thunderbird and send a mass email via CC/BCC?](https://serversmtp.com/en/knowledgebase/4996/30-Can-I-use-turboSMTP-with-Outlook-or-Thunderbird-and-send-a-mass-email-via-CCorBCC.html)** (Views: 773847)

[2\. Which email clients are compatible with turboSMTP?](https://serversmtp.com/en/smtp/2-Which-email-clients-are-compatible-with-turboSMTP/kb-11.html) (Views: 1254810)

**[2\. Which email clients are compatible with turboSMTP?](https://serversmtp.com/en/knowledgebase/11/2-Which-email-clients-are-compatible-with-turboSMTP.html)** (Views: 1254810)

[17\. How do I keep track of sent emails?](https://serversmtp.com/en/smtp/17-How-do-I-keep-track-of-sent-emails/kb-20.html) (Views: 1483323)

**[17\. How do I keep track of sent emails?](https://serversmtp.com/en/knowledgebase/20/17-How-do-I-keep-track-of-sent-emails.html)** (Views: 1483323)

---

##### Was this answer helpful?

Yes No Vote

**Was this answer helpful?** YesNo

![](https://serversmtp.com/en/images/addtofavouritesicon.gif) [Add to Favourites](https://serversmtp.com/en/#) 
![](https://serversmtp.com/en/images/print.gif) [Print this Article](https://serversmtp.com/en/#)