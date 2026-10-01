# Source: https://serversmtp.com/en/knowledgebase/5073/32-Yahoo-emails-in-queue-with-high-complain-rate-error.html

### Knowledgebase

### 32\. Yahoo emails in queue with high complain rate error

Having a problem with recipients @Yahoo, Aol.com or Verizon. 

Make sure you register your sender domain at Yahoo complaint feedback loop.

A Feedback Loop is a tool that enables complaints to be automatically recorded in your account as unsubscribes.

Setting up a Yahoo complaint feedback loop (YFBL) helps with your delivery to yahoo.com recipients. If a yahoo.com recipient marks your message as spam, you do not want to continue sending to that person, so having that address automatically unsubscribed from your account helps prevent continued sending to recipients that no longer desire your emails.

Not having the Yahoo complaint feedback loop can lead to having a low reputation for your emails that cause hitting spam and getting messages delayed to get delivered or even not delivered at all.

** 
How to set Yahoo complaint feedback loop**

This can be done as follow:

### 1\. Create your mailbox

- postmaster@"your\_sending\_domain.com"- Required for activating the YFBL. It is best practice to have this mailbox created by default.

### 2\. Register with Yahoo FBL

Access the Yahoo Feedback Loop Page [here](https://io.help.yahoo.com/contact/index?page=contactform&locale=en_US&token=Zh%2FBBVqXzLHlIbokbUqVWTUbuuQeXGkGnZzhKR2JQ4O6mMQdy9JSWdtWFXvjthcYCRj9bUIFfycOfG%2B4GOHPHoOGa8HwDO2%2B0kYRtTcdR8Nja5P9HWkKh3VWfS3pyu4UdjhvwG%2BBCvnYFl5dToDK%2Fw%3D%3D&selectedChannel=email-icon). You should arrive on a page like this: 

![][base64-image] 

Complete all fields on the page, as follows:

- Company Name: turbo-smtp.com 

- Contact Name: Deliverability Team
- Contact email: info@turbo-smtp.com 

- Reporting email: loop@turbo-smtp.com 

- Selector: turbo-smtp.\_domainkey 

- Request type: Select Add
- Domain: Enter your sender domain 

![][base64-image] 

![][base64-image] 
To submit your information, click Get Verification Code.

Leave your browser tab open on the next page and go to your inbox for the postmaster@your\_sending\_domain.com

Yahoo will email you a verification code. Get the verification code from the email.

Copy the code that was sent to you and return to the YFBL page. Enter the code and click Create Request to complete the form.

![][base64-image] 

You should receive a confirmation message. If you do not, you will need to repeat these steps again. If this happens more than once, please contact Yahoo support. 

![][base64-image]

Now we can handle Verizon media complaints about your account. You can find complaining recipients in your dashboard under "Reports" under "Spam reports" 

#### Also Read

[10\. Is the email address with which I signed up the only one that I can use as a sender?](https://serversmtp.com/en/smtp/10-Is-the-email-address-with-which-I-signed-up-the-only-one-that-I-can-use-as-a-sender/kb-3762.html) (Views: 919067)

**[10\. Is the email address with which I signed up the only one that I can use as a sender?](https://serversmtp.com/en/knowledgebase/3762/10-Is-the-email-address-with-which-I-signed-up-the-only-one-that-I-can-use-as-a-sender.html)** (Views: 919067)

[31\. How can I get notified of my bounce?](https://serversmtp.com/en/smtp/31-How-can-I-get-notified-of-my-bounce/kb-4862.html) (Views: 833380)

**[31\. How can I get notified of my bounce?](https://serversmtp.com/en/knowledgebase/4862/31-How-can-I-get-notified-of-my-bounce.html)** (Views: 833380)

[16\. How many emails can I send in a day? What is the maximum attachment size?](https://serversmtp.com/en/smtp/16-How-manyemailscan-IsendinadayWhat-isthemaximum-attachment-size/kb-787.html) (Views: 1378941)

**[16\. How many emails can I send in a day? What is the maximum attachment size?](https://serversmtp.com/en/knowledgebase/787/16-How-manyemailscan-IsendinadayWhat-isthemaximum-attachment-size.html)** (Views: 1378941)

[14\. How can I cancel the auto-renewal of my plan?](https://serversmtp.com/en/smtp/14-How-can-I-cancel-the-auto-renewal-of-my-plan/kb-3667.html) (Views: 892060)

**[14\. How can I cancel the auto-renewal of my plan?](https://serversmtp.com/en/knowledgebase/3667/14-How-can-I-cancel-the-auto-renewal-of-my-plan.html)** (Views: 892060)

[24\. How can I ask the permission to send a newsletter?](https://serversmtp.com/en/smtp/24-How-can-I-ask-the-permission-to-send-a-newsletter/kb-3188.html) (Views: 903272)

**[24\. How can I ask the permission to send a newsletter?](https://serversmtp.com/en/knowledgebase/3188/24-How-can-I-ask-the-permission-to-send-a-newsletter.html)** (Views: 903272)

---

##### Was this answer helpful?

Yes No Vote

**Was this answer helpful?** YesNo

![](https://serversmtp.com/en/images/addtofavouritesicon.gif) [Add to Favourites](https://serversmtp.com/en/#) 
![](https://serversmtp.com/en/images/print.gif) [Print this Article](https://serversmtp.com/en/#)