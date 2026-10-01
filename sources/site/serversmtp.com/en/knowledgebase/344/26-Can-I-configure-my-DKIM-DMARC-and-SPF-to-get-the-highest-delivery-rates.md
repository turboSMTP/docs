# Source: https://serversmtp.com/en/knowledgebase/344/26-Can-I-configure-my-DKIM-DMARC-and-SPF-to-get-the-highest-delivery-rates.html

### Knowledgebase

### 26\. Can I configure my DKIM, DMARC and SPF to get the highest delivery rates?

Sure you can! In fact, we highly recommend it. It's **extremely important** to make the most of turboSMTP's services and guarantee the **highest deliverability**. 

Plus, it will minimize the references to turboSMTP in the header of your sent emails. And **it's 100% free**.

\===========================

**IMPORTANT NOTE**

Please configure manually your DKIM, DMARC and SPF only if you are **skilled enough**: that is, if you are familiar with these strings and you can edit your domain's DNS settings. If you're not sure how to manage them, **ask your hosting company**. 

If your provider doesn't allow you to modify your DNS records, you can create another domain from which to send emails, as explained [here](https://www.serversmtp.com/en/smtp/I-cannot-configure-the-DNS-of-my-domain-How-can-I-do/kb-3546.html).

\===========================

### DKIM and SPF setup

Add the following DNS records in the control panel of the domain you are going to use as "sender":

#### SPF record

This is a TXT record that should be added to the domain of the envelope address (example.com):

v=spf1 a mx include:spf.turbo-smtp.com ?all

#### DomainKey/DKIM record

One records should be added to the subdomains "turbo-smtp.\_domainkey".

It can be added as TXT records as follows:

| Region | Value |
| --- | --- |
| turbo-smtp.\_domainkey | k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDT3MWLni6so1q9eQggRYBCLHFjohZkCnYHH8gZNDBm6zRrodRVpWpJQW7x3cWWiuBhS1X0IfBB80l5tqFa+yc+mVgnk8tkUzOHFbPQPp4fi7egTpMtsQW/ZMrxw73SItNvPr72qvJTYZNPxarMx+ULjEWybcfEdXHPY8jslGcpCwIDAQAB |

#### DMARC record

One records should be added to the subdomains "turbo-smtp.\_domainkey".

It can be added as TXT records as follows:

| Region | Value |
| --- | --- |
| \_dmarc | v=DMARC1; p=none;  |

#### Also Read

[6\. Is the Free Trial automatically activated to all new accounts?](https://serversmtp.com/en/smtp/6-Is-the-Free-Trial-automatically-activated-to-all-new-accounts/kb-3174.html) (Views: 871023)

**[6\. Is the Free Trial automatically activated to all new accounts?](https://serversmtp.com/en/knowledgebase/3174/6-Is-the-Free-Trial-automatically-activated-to-all-new-accounts.html)** (Views: 871023)

[7\. Why my free account has been closed?](https://serversmtp.com/en/smtp/7-Why-my-free-account-has-been-closed/kb-5029.html) (Views: 808062)

**[7\. Why my free account has been closed?](https://serversmtp.com/en/knowledgebase/5029/7-Why-my-free-account-has-been-closed.html)** (Views: 808062)

[27\. I cannot configure the DNS of my domain. How can I do?](https://serversmtp.com/en/smtp/27-I-cannot-configure-the-DNS-of-my-domain-How-can-I-do/kb-3546.html) (Views: 910174)

**[27\. I cannot configure the DNS of my domain. How can I do?](https://serversmtp.com/en/knowledgebase/3546/27-I-cannot-configure-the-DNS-of-my-domain-How-can-I-do.html)** (Views: 910174)

[34\. What is the difference between Smart Routing and Dedicated IP Pools?](https://serversmtp.com/en/smtp/34-What-is-the-difference-between-Smart-Routing-and-Dedicated-IP-Pools/kb-7518.html) (Views: 215766)

**[34\. What is the difference between Smart Routing and Dedicated IP Pools?](https://serversmtp.com/en/knowledgebase/7518/34-What-is-the-difference-between-Smart-Routing-and-Dedicated-IP-Pools.html)** (Views: 215766)

[15\. What if I want to cancel my monthly plan?](https://serversmtp.com/en/smtp/15-What-if-I-want-to-cancel-my-monthly-plan/kb-37.html) (Views: 1355572)

**[15\. What if I want to cancel my monthly plan?](https://serversmtp.com/en/knowledgebase/37/15-What-if-I-want-to-cancel-my-monthly-plan.html)** (Views: 1355572)

---

##### Was this answer helpful?

Yes No Vote

**Was this answer helpful?** YesNo

![](https://serversmtp.com/en/images/addtofavouritesicon.gif) [Add to Favourites](https://serversmtp.com/en/#) 
![](https://serversmtp.com/en/images/print.gif) [Print this Article](https://serversmtp.com/en/#)