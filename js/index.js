const $ = (el)=>document.querySelector(el)

const appUrl = process.env.APP_URL

$('#send-btn').onclick = (e)=>{
  e.preventDefault()

  const name = $('#name').value
  const from = $('#email').value
  const phone = $('#phone').value
  const message = $('#message').value
  const sendEmailTo = $('#send-email-to').value

  jrSendMail(appUrl, sendEmailTo, from, {
    name: name,
    phone: phone,
    message : message
   })


}

