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