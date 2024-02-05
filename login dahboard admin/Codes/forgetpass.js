let music = document.getElementById("Background-music")
music.volume = 0.4;

function validateEmail(){
  let inputEmail = document.querySelector("#email")
  let valueEmail = inputEmail.value;
  let errorEmail = document.querySelector("#error-email")

  if (valueEmail == ""){
    errorEmail.innerHTML = "Email cannot be empty!"
    inputEmail.style.border = "1px solid red"
    return false;
  } else if (!valueEmail.includes("@")) {
    errorEmail.innerHTML = "Email must contain '@'!"
    inputEmail.style.border = "1px solid red"
    return false;
  }else {
    errorEmail.innerHTML = ""
    inputEmail.style.border = "1px solid black"
    return true;
  }
}


let sendButton = document.querySelector("#sendBtn")
sendButton.addEventListener("click", function(e){
  e.preventDefault();

  let isEmailTrue = validateEmail();

  if (isEmailTrue){
    let submitForm = document.querySelector("#forgetPass-form")
    submitForm.submit();
  }
  
  
})