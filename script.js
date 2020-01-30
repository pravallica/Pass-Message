function submit(){
    var message = document.getElementById("message").value;
    if(message != ""){
     document.getElementById("output").innerHTML =message.toUpperCase();
  
  document.getElementById("output").style.display ="block";
  
  document.getElementById("delivered").style.display = "block";
    }
    else{
      document.getElementById("error").style.display = "block";
   setTimeout(function(){
   document.getElementById("error").style.display = "none"},2000);
    }
    
  }
    
  