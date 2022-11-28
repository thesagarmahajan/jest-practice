function isValidEmail(str){
    if(String(str)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )){
      return true;
    }
    else{
      return false;
    }
}


function isValidPhone(str){
    if(String(str)
    .toLowerCase()
    .match(/^\d{10}$/))
    {
      return true
    }
    else{
      return false
    }
}

module.exports = {isValidEmail, isValidPhone};