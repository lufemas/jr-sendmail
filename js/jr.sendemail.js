async function jrSendMail(appUrl, to, from, body){

  // to = encodeURIComponent(to)
  // from = encodeURIComponent(from)

  let message = ``

  for(key in body){
    message += 
`${String(key).toUpperCase()}: 
${body[key]}

`
  }

  message = encodeURIComponent(message)

  const sendUrl = appUrl+ `?to=${to}&from=${from}&message=${message}`
  console.log(sendUrl)

    const response = await fetch(sendUrl, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'no-cors', // no-cors, *cors, same-origin
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    }
    )
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))

  

}