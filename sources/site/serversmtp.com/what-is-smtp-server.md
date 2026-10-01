# Source: https://serversmtp.com/what-is-smtp-server

The acronym **[SMTP](https://serversmtp.com/en/what-is-smtp 'What is SMTP')** stands for **Simple Mail Transfer Protocol**, the procedure behind the email flow on the internet.

What happens when you send out an email? The process of email delivery is actually quite similar to classical mail: an organized system takes care of your envelope and through a series of steps it drops it off to your recipient. In this process, the **SMTP server** is simply a **computer running SMTP**, and which acts more or less like the postman. Once the messages have been picked up they are sent to this server, which takes care of concretely delivering emails to their recipients.

Basically, the journey of a message from your computer to the recipient’s is like this:

![SMTP server](https://serversmtp.com/wp-content/uploads/2018/02/what-is-an-smtp-server.png)

- You send an email with your webmail or **mail client** from your address (e.g. mark@website.com) to a given recipient (e.g. jane@domain.com). In jargon, the webmail or client is called **Message User Agent**, or **MUA**.
- The message is sent normally via **[port 25](https://serversmtp.com/en/port-for-smtp 'What is an SMTP port')** to an SMTP server (named for instance mail.website.com) which is given to your client when you set it up and acts as a Message Transfer Agent or MTA. Client and server start a brief “conversation” where the latter checks all the data concerning the message’s transmission (sender, recipient, domains, etc.). Note that SMTP language defines only the message’s transmission, and doesn’t deal with its body content.
- Then, if the domain where your recipient has his account is directly connected to the server, the email is immediately delivered. If it’s not the case, the SMTP hands it to another **incoming server** closer to the recipient (in jargon these passages are called **relays**). In our example, the Website server connects with the Domain server, which (if everything has gone right) receives the email and stores it.
- What if the recipient’s server is down or busy? The SMTP host simply drops the message to a **backup server**: if none of them is available, the email is queued and the delivery is retried periodically. After a determined period, however, the message is returned as undelivered.
- If there are no issues, however, the final segment is controlled by **[POP](https://serversmtp.com/en/pop-and-smtp 'POP and SMTP')**, another protocol that picks up the email from the receiving server and puts it into the recipient’s inbox.

It must be underlined, though, that the SMTP servers used when you send your “normal emails” – e.g. the ones associated to providers like Hotmail, Gmail and Yahoo Mail – are **shared among users** and they are based on non-dedicated IPs. Which means that you could end up to rely on an IP that is also used by a spammer: a fact that will negatively affect the correct delivery of your messages. Also, common providers establish some **strict limits** on the number of emails you can send (e.g. Yahoo’s restriction is 100 email per hour).

That is why, if you plan to send a **massmail** or set up an **email campaign** we recommend to use a professional [**SMTP Relay Server**](https://serversmtp.com/smtp-relays/ 'SMTP relays') like [turboSMTP](https://serversmtp.com/en/tsmtpregistration1.php 'SMTP service'), which guarantees a controlled IP and avoids all the aforementioned problems.

You can register and [get a free package of 6000 emails per month](https://serversmtp.com/en/tsmtpregistration1.php 'free smpt service'), then upgrade to the plan that best suits your options.