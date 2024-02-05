let music = document.getElementById("Background-music")
music.volume = 0.4;

var a = 1;

function Eye1(){
  if (a==1) {
    document.getElementById("password").type='password';
    document.getElementById('eye').src ='/close eye.png'
    let close = document.getElementById('eye');
    a=0;
  }else {
    document.getElementById('password').type='text';
    document.getElementById('eye').src ='/Open Eye.png'
    let open = document.getElementById('eye')
    a=1;
  }
}

function Eye2(){
  if (a==1) {
    document.getElementById("confirm-password").type='password';
    document.getElementById('eye-confirm-pass').src ='/close eye.png'
    let close = document.getElementById('eye-confirm-pass');
    a=0;
  }else {
    document.getElementById('confirm-password').type='text';
    document.getElementById('eye-confirm-pass').src ='/Open Eye.png'
    let open = document.getElementById('eye-confirm-pass') 
    a=1;
  }
}

function validateName(){
  let inputName = document.querySelector("#nama-group")
  let valueName = inputName.value;
  let errorName = document.querySelector("#error-name")

  if (valueName == ""){
    errorName.innerHTML = "Group name cannot be empty!"
    inputName.style.border = "1px solid red"
    return false;
  }else {
    errorName.innerHTML = ""
    inputName.style.border = "1px solid white"
    return true;
  }
}

function validatePassword(){
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

function validateConfirmPassword(){
  let inputConfirmPassword = document.querySelector("#confirm-password")
  
  let valueConfirmPassword = inputConfirmPassword.value;

  let errorConfirmPassword = document.querySelector("#error-confirm-password")

  let inputPassword = document.querySelector("#password")
  let valuePassword = inputPassword.value;
  

  if (valueConfirmPassword == ""){
    errorConfirmPassword.innerHTML = "Confirm password cannot be empty!"
    inputConfirmPassword.style.border = "1px solid red"
    return false;
  }else if (valueConfirmPassword != valuePassword){
    errorConfirmPassword.innerHTML = "Confirm password must be the same with password"
    inputConfirmPassword.style.border = "1px solid red"
    return false;
  } 
  else {
    errorConfirmPassword.innerHTML = ""
    inputConfirmPassword.style.border = "1px solid white"
    return true;
  }
}

function eye(){
  let eye1 = document.querySelector("#eye")
  let eye2 = document.querySelector("#eye-confirm-pass")
  let isNameTrue = validateName();
  let isPassTrue = validatePassword();

  if (isNameTrue == false && isPassTrue == false){
    eye1.style.top = "490px"
    eye2.style.top = "620px"
  } else if (isNameTrue == true && isPassTrue == false) {
    eye1.style.top = "470px"
    eye2.style.top = "600px"
  } else if (isNameTrue == false && isPassTrue == true){
    eye1.style.top = "490px"
    eye2.style.top = "600px"
  } else {
    eye1.style.top = "470px"
    eye2.style.top = "580px"
  }
}

function validateStatus(){
  let binusianChecked = document.querySelector("#Binusian").checked;
  let nonBinusianChecked = document.querySelector("#Non-Binusian").checked;
  let errorStatus = document.querySelector("#error-status")


  if (!binusianChecked && !nonBinusianChecked){
    errorStatus.innerHTML = "This section is required"
    return false;
  }else {
    errorStatus.innerHTML = ""
    return true;
  } 
}

// document.getElementById('second-page').style.display = 'none';
// document.getElementById('third-page').style.display = 'none';

let nextButton = document.querySelector("#next-btn1")
let formPage1 = document.querySelector("#first-page");

nextButton.addEventListener("click", function(e){
  e.preventDefault(); // Prevent the default form submission behavior
  console.log("button clicked in first page");

  eye();

  let isNameTrue = validateName();
  let isPassTrue = validatePassword();
  let inputConfirmPassword = validateConfirmPassword();
  let isStatusTrue = validateStatus();

  if (isNameTrue && isPassTrue && isStatusTrue && inputConfirmPassword) {
    let form = document.createElement("form");
    form.id = "dynamic-form";
    form.action = "#second-page"; // Set the action attribute to the next page
    form.method = "get"; // Choose the appropriate HTTP method (get or post)

    // Append input elements with their values to the form
    form.innerHTML = `
      <input type="hidden" name="group_name" value="${document.getElementById("nama-group").value}">
      <input type="hidden" name="password" value="${document.getElementById("password").value}">
      <input type="hidden" name="status" value="${document.querySelector('input[name="fav_language"]:checked').value}">
    `;

    // Append the form to the document body
    document.body.appendChild(form);

    // Hide the first page
    formPage1.style.display = 'none';

    // Show the second page
    document.getElementById('second-page').style.display = 'block';
    console.log("moving to second page");
    // You can also add a similar logic for the transition to the third page
  }
});

// secondPage JS
let secondPage = document.querySelector("#second-page")
let firstPage = document.querySelector("#first-page")
let thirdPage = document.querySelector("#third-page")

function validateName2(){
  let inputName = document.querySelector("#nama-lengkap")
  let valueName = inputName.value;
  let errorName = document.querySelector("#error-name2")

  if (valueName == ""){
    errorName.innerHTML = "Name cannot be empty"
    inputName.style.border = "1px solid red"
    return false;
  } else{
    errorName.innerHTML = ""
    inputName.style.border = "1px solid black"
    return true;
  }
}

function validateEmail2(){
  let inputEmail = document.querySelector("#email2")
  let valueEmail = inputEmail.value;
  let errorEmail = document.querySelector("#error-email2")

  if (valueEmail == "") {
    errorEmail.innerHTML = "Email cannot be empty!"
    inputEmail.style.border = "1px solid red"
    return false;
  } else if (!valueEmail.includes("@")){
    errorEmail.innerHTML = "Email must contain '@'!"
    inputEmail.style.border = "1px solid red"
    return false;
  } else {
    errorEmail.innerHTML = ""
    inputEmail.style.border = "1px solid black"
    return true;
  }
}

function validateWaNumber(){
  let inputNumber = document.querySelector("#wa-number")
  let valueNumber = inputNumber.value;
  let errorNumber = document.querySelector("#error-wa-number")

  if (valueNumber == "") {
    errorNumber.innerHTML = "WA number cannot be empty!"
    inputNumber.style.border = "1px solid red"
    return false;
  } else if (valueNumber.length < 7){
    errorNumber.innerHTML = "WA Number must be longer 7 digit!"
    inputNumber.style.border = "1px solid red"
    return false;
  } else if (valueNumber.length > 15){
    errorNumber.innerHTML = "WA Number must be no longer 15 digit!"
    inputNumber.style.border = "1px solid red"
    return false;
  } else {
    errorNumber.innerHTML = ""
    inputNumber.style.border = "1px solid black"
    return true;
  }
}

function validateLineId(){
  let inputLineId = document.querySelector("#line-id-number")
  let valueLineId = inputLineId.value;
  let errorLineId = document.querySelector("#error-line-id")

  console.log("Line id")
  if (valueLineId == "") {
    errorLineId.innerHTML = "Line ID cannot be empty!"
    inputLineId.style.border = "1px solid red"
    return false;
  } else if (!valueLineId.includes("@")){
    errorLineId.innerHTML = "Line ID must contain '@'!"
    inputLineId.style.border = "1px solid red"
    return false;
  } else {
    errorLineId.innerHTML = ""
    inputLineId.style.border = "1px solid black"
    return true;
  }
}

let nextButton2 = document.querySelector("#next-btn2")
let backButton2 = document.querySelector("#back-btn2")
nextButton2.addEventListener("click", function(e){
  e.preventDefault();

  let isNameTrue2 = validateName2();
  let isEmailTrue2 = validateEmail2();
  let isNumberTrue2 = validateWaNumber();
  let isLineTrue2 = validateLineId();

  if (isNameTrue2 && isEmailTrue2 && isNumberTrue2 && isLineTrue2 ){
    let form2 = document.createElement("form");
    form2.id = "dynamic-form2";
    form2.action = "#third-page"; // Set the action attribute to the next page
    form2.method = "get"; // Choose the appropriate HTTP method (get or post)

    // Append input elements with their values to the form
    form2.innerHTML = `
    <input type="hidden" name="nama_lengkap" value="${document.getElementById("nama-lengkap").value}">
    <input type="hidden" name="email" value="${document.getElementById("email2").value}">
    <input type="hidden" name="wa_number" value="${document.getElementById("wa-number").value}">
    <input type="hidden" name="line_id" value="${document.getElementById("line-id-number").value}">
    `;

    // Append the form to the document body
    document.body.appendChild(form2);
    
    console.log("second page ni")
    secondPage.style.display = "none"
    thirdPage.style.display = "block"
  }
})
backButton2.addEventListener("click", function (){
  secondPage.style.display = "none"
  firstPage.style.display = "block"
})

let backButton3 = document.querySelector("#back-btn3")
backButton3.addEventListener("click", function(e){
  e.preventDefault();
  secondPage.style.display = "block"
  thirdPage.style.display = "none"
})

function validateGit(){
  let inputGit = document.querySelector("#github")
  let valueGit = inputGit.value;
  let errorGit = document.querySelector("#error-github")

  console.log("git")
  if (valueGit == ""){
    errorGit.innerHTML = "GitHub cannot be empty!"
    inputGit.style.border = "1px solid red"
    return false;
  } else {
    errorGit.innerHTML = ""
    inputGit.style.border = "1px solid black"
    return true;
  }
}

function validateTmptLahir(){
  let inputLahir = document.querySelector("#tempat-lahir")
  let valueLahir = inputLahir.value;
  let errorLahir = document.querySelector("#error-tempat-lahir")

  if (valueLahir == ""){
    errorLahir.innerHTML = "Tempat lahir cannot be empty!"
    inputLahir.style.border = "1px solid red"
    return false;
  } else {
    errorLahir.innerHTML = ""
    inputLahir.style.border = "1px solid black"
    return true;
  }
}
let submitBtn = document.querySelector("#submit-btn")
submitBtn.addEventListener("click", function(e){
  e.preventDefault();
  

  let isGitTrue = validateGit();
  let isLahirTrue = validateTmptLahir();

  if (isGitTrue && isLahirTrue) {
    let form3 = document.createElement("form");
    form3.id = "dynamic-form3";
    form3.action = "submit"; // Set the action attribute to the next page
    form3.method = "get"; // Choose the appropriate HTTP method (get or post)

    // Append input elements with their values to the form
    form3.innerHTML = `
    <input type="hidden" name="github" value="${document.getElementById("github").value}">
    <input type="hidden" name="tempat_lahir" value="${document.getElementById("tempat-lahir").value}">
    <input type="hidden" name="tanggal_lahir" value="${document.getElementById("tanggal-lahir").value}">
    `;

    // // Append the form to the document body
    // document.body.appendChild(form3);
    // form.submit();

    let regisForm1 = document.querySelector("#register-form1");
    regisForm1.submit();

    // Submit the second form
    let regisForm2 = document.querySelector("#register-form2");
    regisForm2.submit();

    // Submit the third form
    let regisForm3 = document.querySelector("#register-form3");
    regisForm3.submit();
  }
})