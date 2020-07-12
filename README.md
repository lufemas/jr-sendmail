<img src="./img/jr.sendmail.png">

# JR.sendmail

### A free and simple way to send emails from your website.
- [Demo and How To Use here](https://lufemas.github.io/jr-sendmail/)

___


## How to use JR.sendmail

### Google Apps Script
JR.sendmail was created using <a href="https://developers.google.com/apps-script" target="_blank">Google Apps Script</a> with the <a target="_blank" href="https://developers.google.com/apps-script/reference/mail/mail-app">Class MailApp Service</a>.

The first thing you should do is create your Apps Script to be accessed by <b>JR.sendmail</b>

Here is the App Script code:

```js
  function doGet(e){
      return handleResponse(e);
  }
  
  function handleResponse(e) {
      var to      = e.parameter.to;
      var from    = e.parameter.from;
      var title   = e.parameter.title
      var message = e.parameter.message;
  
      MailApp.sendEmail( to, from, title, message)
      
      return HtmlService.createHtmlOutput(JSON.stringify(e));
  }          
```


Publish your script with the *"Deploy as web app..."* option.

If you want to use it as a contact form or something similar that is open to everyone, you have to choose ```Execute the app as: Me(YOUR_GOOGLE_ACCOUNT)``` and ```Who has access to the app: Anyone, even anonymous```, otherwise the app will ask for user login or block it depending on your choice.

After that just save your <code>Current Web App URL</code> because you need that to use <strong>JR.sendmail</strong>.


### JR.sendimail on your project

To use **JR.sendmail** with you website is very simple, just download <a href="./js/jr.sendemail.js" target="_blank" rel="noopener noreferrer">JR.sendemail.js</a> to your project folder and link it with a SCRIPT tag:

<code>&lt;script src="js/jr.sendemail.js">&lt;/script></code>


Whenever you want to send an email you call the <code>jrSendEmail</code> function.

```js
  jrSendMail(appUrl, to, from, title, body)     

  "appUrl": [string] The URL to your Google Apps Script Web App

  "to"    : [string] Recipient email

  "from"  : [string] Sender email

  "title" :  [string] Email title

  "body"  : [on level nested object]  Email body, this must be an object with at least one key.
  EXAMPLE:
  const body = {
    greeting: "Hello Sailor!",
    firstName: "John",
    lastName: "Connor"
    .
    .
    .

  }

  The output message will have the keys name all upper case:

  GREETING:
  Hello Sailor!

  FIRSTNAME:
  John

  LASTNAME:
  Connor
```

___
- The demo page uses <strong><a href="https://github.com/lufemas/jr-web-lib" target="_blank">JR.css</a></strong></li>
- Take a look on my other projects <strong><a href="https://github.com/lufemas" target="_blank">JR.Maschietto</a></strong></li>
- You can contact me on my web page <strong><a href="http://jrmaschietto.com" target="_blank">JRmaschietto.com</a></strong></li>