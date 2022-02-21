function emailValidator() {
  let form = document.getElementById("form");
  let email = document.getElementById("email").value;
  let text = document.getElementById("text");
  let thanksbutn = document.getElementById("thanksbutn");
  let mailformat =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (email.match(mailformat)) {
    form.classList.add("valid");
    form.classList.remove("invalid");
    text.innerHTML = "Your email is valid";
    text.style.color = "#00ff00";
    thanksbutn.href = "thankyou.html";
    hearts();
  } 
  else {
    form.classList.remove("valid");
    form.classList.add("invalid");
    text.innerHTML = "Please enter valid email";
    text.style.color = "#ffffff";
  }
  if (email == "") {
    form.classList.remove("valid");
    form.classList.remove("invalid");
    text.innerHTML = "";
  }
}

function signupbtn() {
  if (emailValidator == true) {
    alert("good");
  }
}

