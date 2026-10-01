# Source: https://serversmtp.com/en/what-is-dkim

**DKIM** (acronym for **Domain Keys Identification Mail**) is a method used to prevent people to fake email identities. Analyzing the domain part of the sending address – @domain.com – it verifies whether a message comes from the claimed source or not: basically, it’s an **email authentication service**.

DKIM is extremely useful. In fact, email is pretty easy to spoof: you have probably receveid lots of messages that pretended to be sent from your bank or from a Post Office – when they were phishing instead.

With DKIM, you get a **digital signature** that proofs your identity and avoid you to fall into spam filters: so this will kill phishing, increase legitimate email delivery, and enhance the general trust in this form of communication.

[turboSMTP](https://serversmtp.com/en/tsmtpregistration1.php 'server SMTP') offers a **default authentication process** through its servers, but we strongly recommend to add a record to your **DNS settings** in order to improve your email delivery rate. This is a crucial technical requirement to make it sure that all your newsletters are correctly delivered to all intended recipients.

For all information about how to do that, please check our [tutorial](https://serversmtp.com/en/smtp/What-is-the-White-labeled-Service/kb-344.html 'White Labeled service') or watch the following video.

![YouTube player](https://i.ytimg.com/vi/vxIPQ6ggTTg/hqdefault.jpg)