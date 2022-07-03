/*-------------------------------------
            Form Validation
--------------------------------------*/
function validateform() {  
  var name = document.myform.name.value;  
  var email = document.myform.email.value;  
  var message = document.myform.message.value; 
      
  if (name == null || name == "") {  
    document.getElementsByName('name')[0].placeholder = 'Please fill name'; 
    updateColorInvalid();
    return false;  
  }else if(email.length < 4) {  
    document.getElementsByName('email')[0].placeholder = 'Invalid email'; 
    updateColorInvalid(); 
    return false;  
  }else if(message.length < 10) {  
    document.getElementsByName('message')[0].placeholder = 'Message must be at least 10 characters long'; 
    updateColorInvalid();  
    return false;  
  }else {
    document.getElementsByName('message')[0].placeholder = 'Submitted Successfully!';
    updateColorSuccess();
    return true;
  }
}

function updateColorInvalid() {
  document.querySelector('input[type=text]').style.setProperty("--c", "#ff7b7b");
}

function updateColorSuccess() {
  document.querySelector('input[type=text]').style.setProperty("--c", "#B7EFA1");
}

/*-------------------------------------
            Scroll Button
--------------------------------------*/
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
    