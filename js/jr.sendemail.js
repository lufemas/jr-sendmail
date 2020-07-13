/**  JR.sendemail
* https://github.com/lufemas/jr-sendmail
*
* jrSendMail(appUrl, to, from, title, body)     
*
* "appUrl": [string] The URL to your Google Apps Script Web App
*
* "to"    : [string] Recipient email
*
* "from"  : [string] Sender email
*
* "title" :  [string] Email title
*
*
* "body"  : [object]  Email body, this must be an object with at least one key.
*
* EXAMPLE:
*
* const body = {
*
*   greeting: "Hello Sailor!",
*
*   firstName: "John",
*
*   lastName: "Connor"
*
*   .
*
*   .
*
*   .
*
* }
*
* The output message will have the keys name all upper case:
*
* GREETING:
* Hello Sailor!
*
* FIRSTNAME:
* John
*
* LASTNAME:
* Connor 
*/
async function jrSendMail(appUrl, to, from, title, body){

  let message = ``

  for(key in body){
    message += 
`${String(key).toUpperCase()}: 
${body[key]}

`
  }

  title = encodeURIComponent(title)
  message = encodeURIComponent(message)

  const sendUrl = appUrl+ `?to=${to}&from=${from}&title=${title}&message=${message}`
  console.log(sendUrl)

    const response = await fetch(sendUrl, {
      method: 'GET', 
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    }
    )
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))

  

}