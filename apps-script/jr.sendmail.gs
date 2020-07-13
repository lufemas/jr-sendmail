  // JR.sendemail
  // https://github.com/lufemas/jr-sendmail
  
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