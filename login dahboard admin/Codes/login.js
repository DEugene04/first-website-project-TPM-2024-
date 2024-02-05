let music = document.getElementById("Background-music")
music.volume = 0.4;

function validateName () {
  let inputName = document.querySelector("#team-name")
  let valueName = inputName.value;
  let errorName = document.querySelector("#error-teamName")

  if (valueName == ""){
    errorName.innerHTML = "Team name cannot be empty"
    inputName.style.border = "2px solid red"
    return false;
  } else {
    errorName.innerHTML = ""
    inputName.style.border = "2px solid black"
    return true;
  }
}

function validatePassword () {
  let inputPassword = document.querySelector("#password")
  let valuePassword = inputPassword.value;
  let errorPassword = document.querySelector("#error-password")

  if (valuePassword == ""){
    errorPassword.innerHTML = "Password cannot be empty"
    inputPassword.style.border = "2px solid red"
    return false;
  } else if (valuePassword === "sepuhhanson"){
    errorPassword.innerHTML = ""
    inputPassword.style.border = ""
    return true;
  } else if (valuePassword.length < 8){
    errorPassword.innerHTML = "Password must be longer than 8!"
    inputPassword.style.border = "2px solid red"
    return false;
  } else if (!/[A-Z]/.test(valuePassword)){
    errorPassword.innerHTML = "Password must contain at least 1 uppercase letter!"
    inputPassword.style.border = "2px solid red"
    return false;
  } else if (!/[a-z]/.test(valuePassword)){
    errorPassword.innerHTML = "Password must contain at least 1 lowercase letter!"
    inputPassword.style.border = "2px solid red"
    return false;
  }else if (!/\d/.test(valuePassword)){
    errorPassword.innerHTML = "Password must contain at least 1 digit"
    inputPassword.style.border = "2px solid red"
    return false;
  } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(valuePassword)){
    errorPassword.innerHTML = "Password must contain at least 1 special character"
    inputPassword.style.border = "2px solid red"
    return false;
  } else {
    errorPassword.innerHTML = ""
    inputPassword.style.border = "2px solid black"
    return true;
  }
}



let loginButton = document.querySelector("#login-button")
loginButton.addEventListener("click", function(e){
  e.preventDefault();

  let isNameTrue = validateName();
  let isPassTrue = validatePassword();

  if (isNameTrue && isPassTrue){
    let submitForm = document.querySelector("#login-form")
    submitForm.submit();

    let inputPassword = document.querySelector("#password")
    let valuePassword = inputPassword.value;
    let inputName = document.querySelector('#team-name')
    let valueName = inputName.value;

    if (valuePassword === ("sepuhhanson") && valueName === ("kelompok13")) {
      alert("Redirecting to Admin Panel.");
      // Redirect to Admin Panel page
      window.location.href = "admin.html";
    } else {
      alert("Redirecting to Dashboard.");
      // Redirect to Dashboard page
      window.location.href = "dashboard.html";
    }
  }
  
  
})