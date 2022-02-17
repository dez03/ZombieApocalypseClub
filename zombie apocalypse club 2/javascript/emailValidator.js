function ValidateEmail(inputText) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var checkboxes = document.getElementById("terms");

  if (inputText.value.match(mailformat) && checkboxes.checked) { /* Good email and good checked */
    window.location.href = "http://127.0.0.1:5501/thankyou.html";
    /* return true; */
  } 
  else if (!inputText.value.match(mailformat) && checkboxes.checked){ /* bad email good checked */
    alert("Please enter a valid email addresss!")
   
  }
  else if (inputText.value.match(mailformat) && !checkboxes.checked){ /*good email bad checked */
    alert("Good email but check the box")
  
  }
  else {
    alert("You have entered an invalid email address!");
    /* document.form1.emailInput.focus();
    return false; */
  }
}


// function ValidateEmail(inputText) {
//   var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   var checkboxes = document.getElementById("terms");
//   if (inputText.value.match(mailformat) && checkboxes.checked) {
//     location.href = "thankyou.html";


//     return true;
//   } else {
//     alert("You have entered an invalid email address!");
//     return false;
//   }
// }
