const $ = (el)=>document.querySelector(el)

const appUrl = 'https://script.google.com/macros/s/AKfycbzb-_fcfFm_l3EDBlg7KxQtKIOYINs2zNXzmnCSgCY3w_e8a5WY/exec'

$('#send-btn').onclick = (e)=>{
  e.preventDefault()

  const name = $('#name').value
  const from = $('#email').value
  const phone = $('#phone').value
  const message = $('#message').value
  const sendEmailTo = $('#send-email-to').value
  const title = `Sent with JR.SendEmail`

  jrSendMail(appUrl, sendEmailTo, from, title, {
    name: name,
    phone: phone,
    message : message
   })
   .then((res)=>{
     $('#email-sent').style.display = 'inline'
     $('#name').value = ""
     $('#email').value = ""
     $('#phone').value = ""
     $('#message').value = ""
     $('#send-email-to').value = ""
   })


}

