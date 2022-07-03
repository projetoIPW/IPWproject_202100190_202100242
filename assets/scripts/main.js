/*-------------------------------------
            Form Validation
--------------------------------------*/
function validateform() {  
  var name = document.myform.name.value;  
  var email = document.myform.email.value;  
  var message = document.myform.message.value; 
      
  if (name == null || name == "") {  
    document.getElementsByName('name')[0].placeholder = 'Please fill name'; 
    updateColorInvalidName();
    return false;  
  }
  if(email.length < 4) {  
    document.getElementsByName('email')[0].placeholder = 'Invalid email'; 
    updateColorInvalidEmail(); 
    return false;  
  }
  if(message.length < 10) {  
    document.getElementsByName('message')[0].placeholder = 'Message must be at least 10 characters long'; 
    updateColorInvalidMessage();  
    return false;  
  }else {
    //document.getElementsByName('message')[0].placeholder = 'Submitted Successfully!';
    //updateColorSuccess();
    alert("Submitted Successfully!");
    return true;
  }
}

function updateColorInvalidName() {
  document.querySelector('input[name=name]').style.setProperty("--c", "#ff7b7b");
}

function updateColorInvalidEmail() {
  document.querySelector('input[name=email]').style.setProperty("--c", "#ff7b7b");
}

function updateColorInvalidMessage() {
  document.querySelector('input[name=message]').style.setProperty("--c", "#ff7b7b");
}

function updateColorSuccess() {
  document.querySelector('input[name=message]').style.setProperty("--c", "#B7EFA1");
}

/*-------------------------------------
            Scroll Button
--------------------------------------*/
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
