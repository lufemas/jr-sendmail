const $ = (el)=>document.querySelector(el)

const appUrl = 'https://script.google.com/macros/s/AKfycbzb-_fcfFm_l3EDBlg7KxQtKIOYINs2zNXzmnCSgCY3w_e8a5WY/exec'

$('#send-btn').onclick = (e)=>{
  e.preventDefault()

  const name = $('#name').value
  const from = 'FAKE' + $('#email').value
  const phone = $('#phone').value
  const message = $('#message').value
  const sendEmailTo = $('#send-email-to').value

  jrSendMail(appUrl, sendEmailTo, from, `Sent with JR.SendEmail`, {
    warning: 
`
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
THIS  EMAIL ISN'T REAL
IT WAS GENERATED USING A DEMO TOOL
YOU CAN CHECK MORE ABOUT IT AT:
https://github.com/lufemas/jr-sendmail

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

WARNING


_______________________________________
`,
    name: name,
    phone: phone,
    message : message
   })
   .then((res)=>{
     $('#email-sent').style.display = 'inline'
     console.log('sent')
   })


}

