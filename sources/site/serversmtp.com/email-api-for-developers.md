# Source: https://serversmtp.com/email-api-for-developers

# Email API for Developers: Drive Efficient Email Deliverability

TurboSMTP's **Email API** revolutionizes your development workflow, offering **lightning-fast integration** and instantaneous email delivery. Experience the simplicity of **integrating with any application or website** using our [API documentation](https://serversmtp.com/turbo-api/ 'TurboSMTP API Documentation') - sending emails at scale has never been more seamless.

[GET STARTED](https://serversmtp.com/en/signup)

![](https://serversmtp.com/wp-content/uploads/2023/11/email-api-integration-1.png)

## Email API for Developers by Developers

TurboSMTP's **Email API** makes integrating email services into your application a breeze. With our simple API, effortless integration, and **[comprehensive documentation](https://serversmtp.com/turbo-api/ 'TurboSMTP API Documentation')**, you can quickly scale your email dispatch, whether it's to send 2 emails or 2 million. 
Here are some easy-to-follow examples of how to integrate our **APIs** with the most commonly used programming languages.

cURL c# GO NodeJS Python Ruby PHP Java

cURL (CMD) cURL (Bash) cURL (Powershell)

.Net 6.0

GO

NodeJS

Python

Ruby

PHP

Java

```
curl -X "POST"^
  "https://api.turbo-smtp.com/api/v2/mail/send" ^
  -H "accept: application/json" ^
  -H "consumerKey: <CONSUMER_KEY>" ^
  -H "consumerSecret: <CONSUMER_SECRET>" ^
  -H "Content-Type: application/json" ^
  -d ^
"{^
  ""from"": ""hello@your-company.com"",^
  ""to"": ""Doe.Jhon@gmail.com,contact@global-travel.com"",^
  ""subject"": ""New live training session"",^
  ""cc"": ""cc_user@example.com"",^
  ""bcc"": ""bcc_user@example.com"",^
  ""content"": ""Dear partner, we are delighted to invite you to an exclusive training session on UX Design. This session is designed to provide essential insights and practical strategies to enhance your skills."",^
  ""html_content"": ""Dear partner, we are delighted to invite you to an exclusive training session on UX Design. This session is designed to provide essential insights and practical strategies to enhance your skills.""^
}"
```

```
curl -X "POST"^
  "https://api.turbo-smtp.com/api/v2/mail/send" ^
  -H "accept: application/json" ^
  -H "consumerKey: <CONSUMER_KEY>" ^
  -H "consumerSecret: <CONSUMER_SECRET>" ^
  -H "Content-Type: application/json" ^
  -d ^
"{^
  ""from"": ""hello@your-company.com"",^
  ""to"": ""Doe.Jhon@gmail.com,contact@global-travel.com"",^
  ""subject"": ""New live training session"",^
  ""cc"": ""cc_user@example.com"",^
  ""bcc"": ""bcc_user@example.com"",^
  ""content"": ""Dear partner, we are delighted to invite you to an exclusive training session on UX Design. This session is designed to provide essential insights and practical strategies to enhance your skills."",^
  ""html_content"": ""Dear partner, we are delighted to invite you to an exclusive training session on UX Design. This session is designed to provide essential insights and practical strategies to enhance your skills.""^
}"
```

```
curl -X 'POST' \
  'https://api.turbo-smtp.com/api/v2/mail/send' \
  -H 'accept: application/json' \
  -H 'consumerKey:  <CONSUMER_KEY>' \
  -H 'consumerSecret: <CONSUMER_SECRET>' \
  -H 'Content-Type: application/json' \
  -d '{
  "from": "hello@your-company.com",
  "to": "Doe.Jhon@gmail.com,contact@global-travel.com",
  "subject": "New live training session",
  "cc": "cc_user@example.com",
  "bcc": "bcc_user@example.com",
  "content": "Dear partner,\nWe are delighted to invite you to an exclusive training session on UX Design. This session is designed to provide essential insights and practical strategies to enhance your skills.",
  "html_content": "Dear partner,\nWe are delighted to invite you to an exclusive training session on <strong>UX Design</strong>. This session is designed to provide essential insights and practical strategies to enhance your skills."
}'
```

```
curl -X 'POST' \
  'https://api.turbo-smtp.com/api/v2/mail/send' \
  -H 'accept: application/json' \
  -H 'consumerKey:  <CONSUMER_KEY>' \
  -H 'consumerSecret: <CONSUMER_SECRET>' \
  -H 'Content-Type: application/json' \
  -d '{
  "from": "hello@your-company.com",
  "to": "Doe.Jhon@gmail.com,contact@global-travel.com",
  "subject": "New live training session",
  "cc": "cc_user@example.com",
  "bcc": "bcc_user@example.com",
  "content": "Dear partner,\nWe are delighted to invite you to an exclusive training session on UX Design. This session is designed to provide essential insights and practical strategies to enhance your skills.",
  "html_content": "Dear partner,\nWe are delighted to invite you to an exclusive training session on <strong>UX Design</strong>. This session is designed to provide essential insights and practical strategies to enhance your skills."
}'
```

```
curl.exe -X 'POST' `
  'https://api.turbo-smtp.com/api/v2/mail/send' `
  -H 'accept: application/json'  `
  -H 'consumerKey:  <CONSUMER_KEY>'  `
  -H 'consumerSecret: <CONSUMER_SECRET>'  `
  -H 'Content-Type: application/json' `
  -d @"
{
  \"from\": \"hello@your-company.com\",
  \"to\": \"Doe.Jhon@gmail.com,contact@global-travel.com\",
  \"subject\": \"New live training session\",
  \"cc\": \"cc_user@example.com\",
  \"bcc\": \"bcc_user@example.com\",
  \"content\": \"Dear partner,\nWe are delighted to invite you to an exclusive training session on UX Design. This session is designed to provide essential insights and practical strategies to enhance your skills.\",
  \"html_content\": \"Dear partner,\nWe are delighted to invite you to an exclusive training session on <strong>UX Design</strong>. This session is designed to provide essential insights and practical strategies to enhance your skills.\"
}
"@
```

```
curl.exe -X 'POST' `
  'https://api.turbo-smtp.com/api/v2/mail/send' `
  -H 'accept: application/json'  `
  -H 'consumerKey:  <CONSUMER_KEY>'  `
  -H 'consumerSecret: <CONSUMER_SECRET>'  `
  -H 'Content-Type: application/json' `
  -d @"
{
  \"from\": \"hello@your-company.com\",
  \"to\": \"Doe.Jhon@gmail.com,contact@global-travel.com\",
  \"subject\": \"New live training session\",
  \"cc\": \"cc_user@example.com\",
  \"bcc\": \"bcc_user@example.com\",
  \"content\": \"Dear partner,\nWe are delighted to invite you to an exclusive training session on UX Design. This session is designed to provide essential insights and practical strategies to enhance your skills.\",
  \"html_content\": \"Dear partner,\nWe are delighted to invite you to an exclusive training session on <strong>UX Design</strong>. This session is designed to provide essential insights and practical strategies to enhance your skills.\"
}
"@
```

```
using System.Text;
using System.Text.Json;

public class Program
{
    public static async Task Main(string[] args)
    {
        var consumerKey = "<CONSUMER_KEY>";
        var consumerSecret = "<CONSUMER_SECRET>";

        string url = "https://api.turbo-smtp.com/api/v2/mail/send";
        
        var mailData = new { 
            from = "hello@your-company.com", 
            to = "Doe.Jhon@gmail.com,contact@global-travel.com",
            subject = "New live training session",
            cc = "cc_user@example.com",
            bcc = "bcc_user@example.com",
            content = "Dear partner, we are delighted to invite you to an exclusive training session on UX Design. This session is designed to provide essential insights and practical strategies to enhance your skills.",
            html_content = "Dear partner, We are delighted to invite you to an exclusive training session on <strong>UX Design</strong>. This session is designed to provide essential insights and practical strategies to enhance your skills."
        }; // Mail Data setup.

        using (HttpClient httpClient = new HttpClient())
        {
            // JSON data seriaization
            var json = JsonSerializer.Serialize(mailData);
            var content = new StringContent(json, Encoding.UTF8, "application/json");

            // Set authentication headers
            content.Headers.Add("consumerKey", consumerKey);
            content.Headers.Add("consumerSecret", consumerSecret);

            // Trigger POST request
            using (var response = await httpClient.PostAsync(url, content))
            {
                if (response.IsSuccessStatusCode)
                {
                    var result = await response.Content.ReadAsStringAsync();
                    Console.WriteLine("Response: " + result);
                }
                else
                {
                    Console.WriteLine("Request error: " + response.StatusCode);
                }
            }
        }
    }
}
```

```
using System.Text;
using System.Text.Json;

public class Program
{
    public static async Task Main(string[] args)
    {
        var consumerKey = "<CONSUMER_KEY>";
        var consumerSecret = "<CONSUMER_SECRET>";

        string url = "https://api.turbo-smtp.com/api/v2/mail/send";
        
        var mailData = new { 
            from = "hello@your-company.com", 
            to = "Doe.Jhon@gmail.com,contact@global-travel.com",
            subject = "New live training session",
            cc = "cc_user@example.com",
            bcc = "bcc_user@example.com",
            content = "Dear partner, we are delighted to invite you to an exclusive training session on UX Design. This session is designed to provide essential insights and practical strategies to enhance your skills.",
            html_content = "Dear partner, We are delighted to invite you to an exclusive training session on <strong>UX Design</strong>. This session is designed to provide essential insights and practical strategies to enhance your skills."
        }; // Mail Data setup.

        using (HttpClient httpClient = new HttpClient())
        {
            // JSON data seriaization
            var json = JsonSerializer.Serialize(mailData);
            var content = new StringContent(json, Encoding.UTF8, "application/json");

            // Set authentication headers
            content.Headers.Add("consumerKey", consumerKey);
            content.Headers.Add("consumerSecret", consumerSecret);

            // Trigger POST request
            using (var response = await httpClient.PostAsync(url, content))
            {
                if (response.IsSuccessStatusCode)
                {
                    var result = await response.Content.ReadAsStringAsync();
                    Console.WriteLine("Response: " + result);
                }
                else
                {
                    Console.WriteLine("Request error: " + response.StatusCode);
                }
            }
        }
    }
}
```

```
package main

import (
	"bytes"
	"fmt"
	"io/ioutil"
	"net/http"
)

func main() {
	// setup.
	url := "https://api.turbo-smtp.com/api/v2/mail/send"
	consumerkey := "<CONSUMER_KEY>"
	consumerSecret := "<CONSUMER_SECRET>"	

	// Body Data.
	data := []byte(`{
		"from": "hello@your-company.com",
		"to": "Doe.Jhon@gmail.com,contact@global-travel.com",
		"subject": "New live training session",
		"cc": "cc_user@example.com",
		"bcc": "bcc_user@example.com",
		"content": "Dear partner,\nWe are delighted to invite you to an exclusive training session on UX Design. This session is designed to provide essential insights and practical strategies to enhance your skills.",
		"html_content": "Dear partner,\nWe are delighted to invite you to an exclusive training session on <strong>UX Design</strong>. This session is designed to provide essential insights and practical strategies to enhance your skills."
		}`)

	// Create POST Resquest.
	req, err := http.NewRequest("POST", url, bytes.NewBuffer(data))
	if err != nil {
		fmt.Println("An Error has occured:", err)
		return
	}

	// Set Request Headers.
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("accept", "application/json")
	req.Header.Set("consumerKey", consumerkey)
	req.Header.Set("consumerSecret", consumerSecret)		

	// Perform HTTP Request.
	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		fmt.Println("An Error has occured sending the request:", err)
		return
	}
	defer resp.Body.Close()

	// Read Server Response
	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		fmt.Println("An Error has occured reading the server response:", err)
		return
	}

	// Print Server Response
	fmt.Println(string(body))
}
```

```
package main

import (
	"bytes"
	"fmt"
	"io/ioutil"
	"net/http"
)

func main() {
	// setup.
	url := "https://api.turbo-smtp.com/api/v2/mail/send"
	consumerkey := "<CONSUMER_KEY>"
	consumerSecret := "<CONSUMER_SECRET>"	

	// Body Data.
	data := []byte(`{
		"from": "hello@your-company.com",
		"to": "Doe.Jhon@gmail.com,contact@global-travel.com",
		"subject": "New live training session",
		"cc": "cc_user@example.com",
		"bcc": "bcc_user@example.com",
		"content": "Dear partner,\nWe are delighted to invite you to an exclusive training session on UX Design. This session is designed to provide essential insights and practical strategies to enhance your skills.",
		"html_content": "Dear partner,\nWe are delighted to invite you to an exclusive training session on <strong>UX Design</strong>. This session is designed to provide essential insights and practical strategies to enhance your skills."
		}`)

	// Create POST Resquest.
	req, err := http.NewRequest("POST", url, bytes.NewBuffer(data))
	if err != nil {
		fmt.Println("An Error has occured:", err)
		return
	}

	// Set Request Headers.
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("accept", "application/json")
	req.Header.Set("consumerKey", consumerkey)
	req.Header.Set("consumerSecret", consumerSecret)		

	// Perform HTTP Request.
	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		fmt.Println("An Error has occured sending the request:", err)
		return
	}
	defer resp.Body.Close()

	// Read Server Response
	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		fmt.Println("An Error has occured reading the server response:", err)
		return
	}

	// Print Server Response
	fmt.Println(string(body))
}
```

```
const https = require('https');

//setup credentials.
const consumerKey = '<CONSUMER_KEY>';
const consumerSecret = '<CONSUMER_SECRET>';

//setup body.
const sendData = {
    from: 'hello@your-company.com',
    to: 'Doe.Jhon@gmail.com,contact@global-travel.com',
    subject: 'New live training session',
    cc: 'cc_user@example.com',
    bcc: 'bcc_user@example.com',
    content: 'Dear partner,\nWe are delighted to invite you to an exclusive training session on UX Design. This session is designed to provide essential insights and practical strategies to enhance your skills.',
    html_content: 'Dear partner, <br>We are delighted to invite you to an exclusive training session on <strong>UX Design</strong>. This session is designed to provide essential insights and practical strategies to enhance your skills.',
};


//setup request options.
const options = {
    hostname: 'api.turbo-smtp.com',
    path: '/api/v2/mail/send',
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Consumerkey': consumerKey,
        'Consumersecret': consumerSecret,
        'Content-Type': 'application/json',
    },
};

//perform http request
const req = https.request(options, (res) => {
    let responseData = '';

    res.on('data', (chunk) => {
        responseData += chunk;
    });

    res.on('end', () => {
        console.log('Response:', responseData);
    });
});

//handle request error.
req.on('error', (error) => {
    console.error('Error:', error.message);
});

//write response.
req.write(JSON.stringify(sendData));
req.end();
```

```
const https = require('https');

//setup credentials.
const consumerKey = '<CONSUMER_KEY>';
const consumerSecret = '<CONSUMER_SECRET>';

//setup body.
const sendData = {
    from: 'hello@your-company.com',
    to: 'Doe.Jhon@gmail.com,contact@global-travel.com',
    subject: 'New live training session',
    cc: 'cc_user@example.com',
    bcc: 'bcc_user@example.com',
    content: 'Dear partner,\nWe are delighted to invite you to an exclusive training session on UX Design. This session is designed to provide essential insights and practical strategies to enhance your skills.',
    html_content: 'Dear partner, <br>We are delighted to invite you to an exclusive training session on <strong>UX Design</strong>. This session is designed to provide essential insights and practical strategies to enhance your skills.',
};


//setup request options.
const options = {
    hostname: 'api.turbo-smtp.com',
    path: '/api/v2/mail/send',
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Consumerkey': consumerKey,
        'Consumersecret': consumerSecret,
        'Content-Type': 'application/json',
    },
};

//perform http request
const req = https.request(options, (res) => {
    let responseData = '';

    res.on('data', (chunk) => {
        responseData += chunk;
    });

    res.on('end', () => {
        console.log('Response:', responseData);
    });
});

//handle request error.
req.on('error', (error) => {
    console.error('Error:', error.message);
});

//write response.
req.write(JSON.stringify(sendData));
req.end();
```

```
import http.client
import json

# setup credentials.
consumerKey = '<CONSUMER_KEY>'
consumerSecret = '<CONSUMER_SECRET>'

# setup body.
data = {
    'from': 'hello@your-company.com',
    'to': 'Doe.Jhon@gmail.com,contact@global-travel.com',
    'subject': 'New live training session',
    'cc': 'cc_user@example.com',
    'bcc': 'bcc_user@example.com',
    'content': 'Dear partner,\nWe are delighted to invite you to an exclusive training session on UX Design. This session is designed to provide essential insights and practical strategies to enhance your skills.',
    'html_content': 'Dear partner, <br>We are delighted to invite you to an exclusive training session on <strong>UX Design</strong>. This session is designed to provide essential insights and practical strategies to enhance your skills.'
}

# convert body to json.
data_json = json.dumps(data)

# setup headers
headers = {
        'Accept': 'application/json',
        'Consumerkey': consumerKey,
        'Consumersecret': consumerSecret,
        'Content-Type': 'application/json',
}

# Setup URL and endpoint
url = 'api.turbo-smtp.com'
endpoint = '/api/v2/mail/send'

# Create HTTP connection.
conn = http.client.HTTPConnection(url)

# Perform POST request.
try:
    conn.request('POST', endpoint, body=data_json, headers=headers)
    response = conn.getresponse()

    # Read Server response.
    response_data = response.read().decode('utf-8')
    print(response_data)

    # Close connection.
    conn.close()
except http.client.HTTPException as e:
    # Handle HTTP errors
    print('Error on HTTP request:', e)
except ConnectionError as e:
    # Handle Connection errors
    print('Error on HTTP connection:', e)
```

```
import http.client
import json

# setup credentials.
consumerKey = '<CONSUMER_KEY>'
consumerSecret = '<CONSUMER_SECRET>'

# setup body.
data = {
    'from': 'hello@your-company.com',
    'to': 'Doe.Jhon@gmail.com,contact@global-travel.com',
    'subject': 'New live training session',
    'cc': 'cc_user@example.com',
    'bcc': 'bcc_user@example.com',
    'content': 'Dear partner,\nWe are delighted to invite you to an exclusive training session on UX Design. This session is designed to provide essential insights and practical strategies to enhance your skills.',
    'html_content': 'Dear partner, <br>We are delighted to invite you to an exclusive training session on <strong>UX Design</strong>. This session is designed to provide essential insights and practical strategies to enhance your skills.'
}

# convert body to json.
data_json = json.dumps(data)

# setup headers
headers = {
        'Accept': 'application/json',
        'Consumerkey': consumerKey,
        'Consumersecret': consumerSecret,
        'Content-Type': 'application/json',
}

# Setup URL and endpoint
url = 'api.turbo-smtp.com'
endpoint = '/api/v2/mail/send'

# Create HTTP connection.
conn = http.client.HTTPConnection(url)

# Perform POST request.
try:
    conn.request('POST', endpoint, body=data_json, headers=headers)
    response = conn.getresponse()

    # Read Server response.
    response_data = response.read().decode('utf-8')
    print(response_data)

    # Close connection.
    conn.close()
except http.client.HTTPException as e:
    # Handle HTTP errors
    print('Error on HTTP request:', e)
except ConnectionError as e:
    # Handle Connection errors
    print('Error on HTTP connection:', e)
```

```
require 'net/https'
require 'uri'

# URL of the endpoint you want to send the POST request to
url = URI.parse('https://api.turbo-smtp.com/api/v2/mail/send')
consumerKey = "<CONSUMER_KEY>";
consumerSecret = "<CONSUMER_SECRET>";

# Data to send in the request body
data = {
    'from' => 'hello@your-company.com',
    'to' => 'Doe.Jhon@gmail.com,contact@global-travel.com',
    'subject' => 'New live training session',
    'cc' => 'cc_user@example.com',
    'bcc' => 'bcc_user@example.com',
    'content' => 'Dear partner,\nWe are delighted to invite you to an exclusive training session on UX Design. This session is designed to provide essential insights and practical strategies to enhance your skills.',
    'html_content' => 'Dear partner, <br>We are delighted to invite you to an exclusive training session on <strong>UX Design</strong>. This session is designed to provide essential insights and practical strategies to enhance your skills.'
}

# Create the HTTPS connection
http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

# Create the request object
request = Net::HTTP::Post.new(url.path)
request["Consumerkey"] = consumerKey 
request["Consumersecret"] = consumerSecret 
request["Content-Type"] = "application/json" 
request["Accept"] = "application/json" 

request.set_form_data(data)

# Send the request and get the response
response = http.request(request)

# Print the response body
puts response.body
```

```
require 'net/https'
require 'uri'

# URL of the endpoint you want to send the POST request to
url = URI.parse('https://api.turbo-smtp.com/api/v2/mail/send')
consumerKey = "<CONSUMER_KEY>";
consumerSecret = "<CONSUMER_SECRET>";

# Data to send in the request body
data = {
    'from' => 'hello@your-company.com',
    'to' => 'Doe.Jhon@gmail.com,contact@global-travel.com',
    'subject' => 'New live training session',
    'cc' => 'cc_user@example.com',
    'bcc' => 'bcc_user@example.com',
    'content' => 'Dear partner,\nWe are delighted to invite you to an exclusive training session on UX Design. This session is designed to provide essential insights and practical strategies to enhance your skills.',
    'html_content' => 'Dear partner, <br>We are delighted to invite you to an exclusive training session on <strong>UX Design</strong>. This session is designed to provide essential insights and practical strategies to enhance your skills.'
}

# Create the HTTPS connection
http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

# Create the request object
request = Net::HTTP::Post.new(url.path)
request["Consumerkey"] = consumerKey 
request["Consumersecret"] = consumerSecret 
request["Content-Type"] = "application/json" 
request["Accept"] = "application/json" 

request.set_form_data(data)

# Send the request and get the response
response = http.request(request)

# Print the response body
puts response.body
```

```
<?php

$send_data = [
    "from" => "hello@your-company.com",
    "to" => "Doe.Jhon@gmail.com,contact@global-travel.com",
    "subject" => "New live training session",
    "cc" => "cc_user@example.com",
    "bcc" => "bcc_user@example.com",
    "content" => "Dear partner,\n We are delighted to invite you to an exclusive training session on UX Design. This session is designed to provide essential insights and practical strategies to enhance your skills.",
    "html_content" => "Dear partner,<br />We are delighted to invite you to an exclusive training session on <strong>UX Design</strong>. This session is designed to provide essential insights and practical strategies to enhance your skills."
];

$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, 'https://api.turbo-smtp.com/api/v2/mail/send');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($send_data));

$headers = array();
$headers[] = 'Accept: application/json';
$headers[] = 'Consumerkey: <CONSUMER_KEY>';
$headers[] = 'Consumersecret: <CONSUMER_SECRET>';
$headers[] = 'Content-Type: application/json';
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

$result = curl_exec($ch);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);

if (curl_errno($ch)) {
    echo 'Error:' . curl_error($ch);
} else if ($http_code !== 200) {
    echo "Request error: ".$http_code;
} else {
    echo "Response: ".$result;
}
curl_close($ch);
```

```
<?php

$send_data = [
    "from" => "hello@your-company.com",
    "to" => "Doe.Jhon@gmail.com,contact@global-travel.com",
    "subject" => "New live training session",
    "cc" => "cc_user@example.com",
    "bcc" => "bcc_user@example.com",
    "content" => "Dear partner,\n We are delighted to invite you to an exclusive training session on UX Design. This session is designed to provide essential insights and practical strategies to enhance your skills.",
    "html_content" => "Dear partner,<br />We are delighted to invite you to an exclusive training session on <strong>UX Design</strong>. This session is designed to provide essential insights and practical strategies to enhance your skills."
];

$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, 'https://api.turbo-smtp.com/api/v2/mail/send');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($send_data));

$headers = array();
$headers[] = 'Accept: application/json';
$headers[] = 'Consumerkey: <CONSUMER_KEY>';
$headers[] = 'Consumersecret: <CONSUMER_SECRET>';
$headers[] = 'Content-Type: application/json';
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

$result = curl_exec($ch);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);

if (curl_errno($ch)) {
    echo 'Error:' . curl_error($ch);
} else if ($http_code !== 200) {
    echo "Request error: ".$http_code;
} else {
    echo "Response: ".$result;
}
curl_close($ch);
```

```
import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class TurboSMTPMailExample {
    public static void main(String[] args) {
        try {
            // Specify the URL of the API endpoint
            URL url = new URL("https://api.turbo-smtp.com/api/v2/mail/send");

            // Specify Credentials
            String Consumerkey = "<CONSUMER_KEY>";
            String Consumersecret = "<CONSUMER_SECRET>";

            // Open a connection to the URL
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();

            // Set the request method to POST
            connection.setRequestMethod("GET");

            // Set the request headers
            connection.setRequestProperty("Content-Type", "application/json");
            connection.setRequestProperty("Accept", "application/json");
            connection.setRequestProperty("Consumerkey", Consumerkey);
            connection.setRequestProperty("Consumersecret", Consumersecret);

            // Enable input and output streams
            connection.setDoInput(true);
            connection.setDoOutput(true);

            // Define the request body (as JSON)
            //String requestBody = "{\"from\": \"user@example.com\", \"to\": \"user@example.com,user2@example.com\", \"subject\": \"This is a test message\"}";
            
            String requestBody = "{" +
                                "\"from\": \"user@example.com\", " +
                                "\"to\": \"user@example.com,user2@example.com\", " +
                                "\"subject\": \"This is a test message\", " +
                                "\"cc\": \"cc_user@example.com\", " +
                                "\"bcc\": \"bcc_user@example.com\", " +
                                "\"content\": \"Dear partner. We are delighted to invite you to an exclusive training session on UX Design. This session is designed to provide essential insights and practical strategies to enhance your skills.\", " +
                                "\"html_content\": \"Dear partner,<br />We are delighted to invite you to an exclusive training session on <strong>UX Design</strong>. This session is designed to provide essential insights and practical strategies to enhance your skills.\" " +
                                "}";            
            
            DataOutputStream outputStream = new DataOutputStream(connection.getOutputStream());
            outputStream.writeBytes(requestBody);
            outputStream.flush();
            outputStream.close();

            // Get the response code
            int responseCode = connection.getResponseCode();

            // Read the response from the server
            BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream()));
            String line;
            StringBuilder response = new StringBuilder();
            while ((line = reader.readLine()) != null) {
                response.append(line);
            }
            reader.close();

            // Print the response
            System.out.println("Response Code: " + responseCode);
            System.out.println("Response Body: " + response.toString());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

```
import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class TurboSMTPMailExample {
    public static void main(String[] args) {
        try {
            // Specify the URL of the API endpoint
            URL url = new URL("https://api.turbo-smtp.com/api/v2/mail/send");

            // Specify Credentials
            String Consumerkey = "<CONSUMER_KEY>";
            String Consumersecret = "<CONSUMER_SECRET>";

            // Open a connection to the URL
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();

            // Set the request method to POST
            connection.setRequestMethod("GET");

            // Set the request headers
            connection.setRequestProperty("Content-Type", "application/json");
            connection.setRequestProperty("Accept", "application/json");
            connection.setRequestProperty("Consumerkey", Consumerkey);
            connection.setRequestProperty("Consumersecret", Consumersecret);

            // Enable input and output streams
            connection.setDoInput(true);
            connection.setDoOutput(true);

            // Define the request body (as JSON)
            //String requestBody = "{\"from\": \"user@example.com\", \"to\": \"user@example.com,user2@example.com\", \"subject\": \"This is a test message\"}";
            
            String requestBody = "{" +
                                "\"from\": \"user@example.com\", " +
                                "\"to\": \"user@example.com,user2@example.com\", " +
                                "\"subject\": \"This is a test message\", " +
                                "\"cc\": \"cc_user@example.com\", " +
                                "\"bcc\": \"bcc_user@example.com\", " +
                                "\"content\": \"Dear partner. We are delighted to invite you to an exclusive training session on UX Design. This session is designed to provide essential insights and practical strategies to enhance your skills.\", " +
                                "\"html_content\": \"Dear partner,<br />We are delighted to invite you to an exclusive training session on <strong>UX Design</strong>. This session is designed to provide essential insights and practical strategies to enhance your skills.\" " +
                                "}";            
            
            DataOutputStream outputStream = new DataOutputStream(connection.getOutputStream());
            outputStream.writeBytes(requestBody);
            outputStream.flush();
            outputStream.close();

            // Get the response code
            int responseCode = connection.getResponseCode();

            // Read the response from the server
            BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream()));
            String line;
            StringBuilder response = new StringBuilder();
            while ((line = reader.readLine()) != null) {
                response.append(line);
            }
            reader.close();

            // Print the response
            System.out.println("Response Code: " + responseCode);
            System.out.println("Response Body: " + response.toString());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

## Send Emails Using Your Favorite Coding Language

Our APIs offer developers the flexibility to effortlessly integrate email solutions using their **preferred programming languages**. Whether you're skilled in Python, cURL, Ruby, or any other popular coding language, our comprehensive **API** support has you covered.

[![Sending email in cURL using Smtp API][base64-image]](https://serversmtp.com/sending-email-in-curl-using-smtp-api/)

#### [cURL](https://serversmtp.com/sending-email-in-curl-using-smtp-api/)

Sending email in cURL using Smtp API

[![Sending email in C# using Smtp API][base64-image]](https://serversmtp.com/sending-email-in-c-sharp-using-smtp-api/)

#### [C#](https://serversmtp.com/sending-email-in-c-sharp-using-smtp-api/)

Sending email in C# using Smtp API

[![Sending email in GO using Smtp API][base64-image]](https://serversmtp.com/sending-email-in-go-using-smtp-api/)

#### [GO](https://serversmtp.com/sending-email-in-go-using-smtp-api/)

Sending email in GO using Smtp API

[![Sending email in NodeJS using Smtp API][base64-image]](https://serversmtp.com/sending-email-in-nodejs-using-smtp-api/)

#### [NodeJS](https://serversmtp.com/sending-email-in-nodejs-using-smtp-api/)

Sending email in NodeJS using Smtp API

[![Sending email in Python using Smtp API][base64-image]](https://serversmtp.com/sending-email-in-python-using-smtp-api/)

#### [Python](https://serversmtp.com/sending-email-in-python-using-smtp-api/)

Sending email in Python using Smtp API

[![Sending email in Ruby using Smtp API][base64-image]](https://serversmtp.com/sending-email-in-ruby-using-smtp-api/)

#### [Ruby](https://serversmtp.com/sending-email-in-ruby-using-smtp-api/)

Sending email in NodeJS using Smtp API

[![Sending email in PHP using Smtp API][base64-image]](https://serversmtp.com/sending-email-in-php-using-smtp-api/)

#### [PHP](https://serversmtp.com/sending-email-in-php-using-smtp-api/)

Sending email in PHP using Smtp API

[![Sending email in Java using Smtp API][base64-image]](https://serversmtp.com/sending-email-in-java-using-smtp-api/)

#### [Java](https://serversmtp.com/sending-email-in-java-using-smtp-api/)

Sending email in PHP using Smtp API

## TurboSMTP Service Highlights

Here are four compelling reasons to choose **TurboSMTP**'s service: unparalleled email delivery, data-driven insights through analytics, robust privacy and security, and dedicated 24/7 support for a worry-free email experience.

### Powerful Infrastructure for High Email Deliverability

Our infrastructure seamlessly scales from a handful to several million emails, simplifying the process of mass email distribution with cloud-based solutions that support both **SMTP** and **RESTful API** integration. 
Additionally, TurboSMTP ensures **fast email delivery**, which is vital for keeping communication timely and strengthening connections with your audience.

[Try TurboSMTP for free](https://serversmtp.com/en/signup)

![Powerful Infrastructure for High Email Deliverability][base64-image]

![Refine Outreach with Email Metrics & Analytics][base64-image]

### Refine Outreach with Email Metrics & Analytics

TurboSMTP's **statistics and reporting tools** transform your email strategy with actionable insights. Our analytics dashboard delivers **real-time metrics** on deliverability, opens, clicks, and bounces, empowering you to optimize campaigns effectively. Track recipient behavior to fine-tune your messages, enhance engagement, and increase conversions. With TurboSMTP, **make data-driven decisions** for targeted campaigns that achieve better ROI and deepen audience connections.

[Try TurboSMTP for free](https://serversmtp.com/en/signup)

### Email Privacy and Security: Fundamental Values

Our email service is engineered with your **privacy and security** in mind, integrating superior encryption protocols to secure your data. 
Strict adherence to **privacy laws** is at the core of our service, ensuring each email is fortified against unauthorized access, keeping your private exchanges secure.

[Try TurboSMTP for free](https://serversmtp.com/en/signup)

![Email Privacy and Security][base64-image]

![Email API support service][base64-image]

### Support at Your Service 
Whenever You Want

At TurboSMTP, we offer **24/7 support** that goes beyond service: it's a collaborative effort. Our dedicated team stands by your side, ready to provide expert guidance and swift resolutions. With a commitment to excellence, we ensure your email experience is **smooth and worry-free**. Count on us for reliable support in every step of email delivery process.

[Try TurboSMTP for free](https://serversmtp.com/en/signup)

## **Get Started with TurboSMTP Email API**

### Just follow these three simple steps to seamlessly integrate TurboSMTP into your application.

Sign up for a free account and get **6,000 free emails per month**.

Retrieve your **API key** from your dashboard.

Follow our **[API documentation](https://serversmtp.com/turbo-api/ 'turboSMTP API Documentation')** to start your integration.

[GET STARTED FOR FREE](https://serversmtp.com/en/signup)