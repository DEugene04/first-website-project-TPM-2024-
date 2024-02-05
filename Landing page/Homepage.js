let music = document.getElementById("Background-music")
music.volume = 0.2;

//Sticky navbar
window.addEventListener("scroll", function(){
  let navBar = this.document.querySelector("header")

  navBar.classList.toggle("sticky", this.window.scrollY > 0);
})

// SFX NavBar
let beepOne = $('#beep')
let navLinks = $('.navLinks a')
navLinks.on("mouseenter", function(){
  beepOne[0].play();
})

// mentor gallery 
function showFace(x) {
  if (x === 1) {
    var faceImage = document.getElementById("mentor1");

    // Toggle the image source
    if (faceImage.src.endsWith("/mentors/technobox.png")) {
      faceImage.style.opacity = 0; // Fade out
      setTimeout(function() {
        faceImage.src = "/mentors/Mentor1(name).png";
        faceImage.style.opacity = 1; // Fade in
      }, 300); // Adjust the duration to match the transition duration
    } else {
      faceImage.style.opacity = 0; // Fade out
      setTimeout(function() {
        faceImage.src = "/mentors/technobox.png";
        faceImage.style.opacity = 1; // Fade in
      }, 300); // Adjust the duration to match the transition duration
    }
  }

  if (x === 2) {
    var faceImage = document.getElementById("mentor2");

    // Toggle the image source
    if (faceImage.src.endsWith("/mentors/businessbox.png")) {
      faceImage.style.opacity = 0; // Fade out
      setTimeout(function() {
        faceImage.src = "/mentors/Mentor2(name).png";
        faceImage.style.opacity = 1; // Fade in
      }, 300); // Adjust the duration to match the transition duration
    } else {
      faceImage.style.opacity = 0; // Fade out
      setTimeout(function() {
        faceImage.src = "/mentors/businessbox.png";
        faceImage.style.opacity = 1; // Fade in
      }, 300); // Adjust the duration to match the transition duration
    }
  }

  if (x === 3) {
    var faceImage = document.getElementById("mentor3");

    // Toggle the image source
    if (faceImage.src.endsWith("/mentors/designbox.png")) {
      faceImage.style.opacity = 0; // Fade out
      setTimeout(function() {
        faceImage.src = "/mentors/Mentor3(name).png";
        faceImage.style.opacity = 1; // Fade in
      }, 300); // Adjust the duration to match the transition duration
    } else {
      faceImage.style.opacity = 0; // Fade out
      setTimeout(function() {
        faceImage.src = "/mentors/designbox.png";
        faceImage.style.opacity = 1; // Fade in
      }, 300); // Adjust the duration to match the transition duration
    }
  }

  if (x === 4) {
    var faceImage = document.getElementById("mentor4");

    // Toggle the image source
    if (faceImage.src.endsWith("/mentors/businessbox.png")) {
      faceImage.style.opacity = 0; // Fade out
      setTimeout(function() {
        faceImage.src = "/mentors/Mentor4(name).png";
        faceImage.style.opacity = 1; // Fade in
      }, 300); // Adjust the duration to match the transition duration
    } else {
      faceImage.style.opacity = 0; // Fade out
      setTimeout(function() {
        faceImage.src = "/mentors/businessbox.png";
        faceImage.style.opacity = 1; // Fade in
      }, 300); // Adjust the duration to match the transition duration
    }
  }

  if (x === 5) {
    var faceImage = document.getElementById("mentor5");

    // Toggle the image source
    if (faceImage.src.endsWith("/mentors/technobox.png")) {
      faceImage.style.opacity = 0; // Fade out
      setTimeout(function() {
        faceImage.src = "/mentors/Mentor5(name).png";
        faceImage.style.opacity = 1; // Fade in
      }, 300); // Adjust the duration to match the transition duration
    } else {
      faceImage.style.opacity = 0; // Fade out
      setTimeout(function() {
        faceImage.src = "/mentors/technobox.png";
        faceImage.style.opacity = 1; // Fade in
      }, 300); // Adjust the duration to match the transition duration
    }
  }

  if (x === 6) {
    var faceImage = document.getElementById("mentor6");

    // Toggle the image source
    if (faceImage.src.endsWith("/mentors/businessbox.png")) {
      faceImage.style.opacity = 0; // Fade out
      setTimeout(function() {
        faceImage.src = "/mentors/Mentor6(name).png";
        faceImage.style.opacity = 1; // Fade in
      }, 300); // Adjust the duration to match the transition duration
    } else {
      faceImage.style.opacity = 0; // Fade out
      setTimeout(function() {
        faceImage.src = "/mentors/businessbox.png";
        faceImage.style.opacity = 1; // Fade in
      }, 300); // Adjust the duration to match the transition duration
    }
  }
  if (x === 7) {
    var faceImage = document.getElementById("mentor7");

    // Toggle the image source
    if (faceImage.src.endsWith("/mentors/designbox.png")) {
      faceImage.style.opacity = 0; // Fade out
      setTimeout(function() {
        faceImage.src = "/mentors/Mentor7(name).png";
        faceImage.style.opacity = 1; // Fade in
      }, 300); // Adjust the duration to match the transition duration
    } else {
      faceImage.style.opacity = 0; // Fade out
      setTimeout(function() {
        faceImage.src = "/mentors/designbox.png";
        faceImage.style.opacity = 1; // Fade in
      }, 300); // Adjust the duration to match the transition duration
    }
  }
  if (x === 8) {
    var faceImage = document.getElementById("mentor8");

    // Toggle the image source
    if (faceImage.src.endsWith("/mentors/businessbox.png")) {
      faceImage.style.opacity = 0; // Fade out
      setTimeout(function() {
        faceImage.src = "/mentors/Mentor8(name).png";
        faceImage.style.opacity = 1; // Fade in
      }, 300); // Adjust the duration to match the transition duration
    } else {
      faceImage.style.opacity = 0; // Fade out
      setTimeout(function() {
        faceImage.src = "/mentors/businessbox.png";
        faceImage.style.opacity = 1; // Fade in
      }, 300); // Adjust the duration to match the transition duration
    }
  }
  if (x === 9) {
    var faceImage = document.getElementById("mentor9");

    // Toggle the image source
    if (faceImage.src.endsWith("/mentors/technobox.png")) {
      faceImage.style.opacity = 0; // Fade out
      setTimeout(function() {
        faceImage.src = "/mentors/Mentor9(name).png";
        faceImage.style.opacity = 1; // Fade in
      }, 300); // Adjust the duration to match the transition duration
    } else {
      faceImage.style.opacity = 0; // Fade out
      setTimeout(function() {
        faceImage.src = "/mentors/technobox.png";
        faceImage.style.opacity = 1; // Fade in
      }, 300); // Adjust the duration to match the transition duration
    }
  }
}


// FAQ JAVASCRIPT
$("div#FAQ1").on("click",function(){
  details = $("div#detailsA");
  details.slideToggle();
  arrow = $("img#dropdown-1")
  arrow.toggleClass('hide-details')
})
$("div#FAQ2").on("click",function(){
  details = $("div#detailsB");
  details.slideToggle();
  arrow = $("img#dropdown-2")
  arrow.toggleClass('hide-details')
})
$("div#FAQ3").on("click",function(){
  details = $("div#detailsC");
  details.slideToggle();
  arrow = $("img#dropdown-3")
  arrow.toggleClass('hide-details')
})
$("div#FAQ4").on("click",function(){
  details = $("div#detailsD");
  details.slideToggle();
  arrow = $("img#dropdown-4")
  arrow.toggleClass('hide-details')
})

// timeline js
document.addEventListener("DOMContentLoaded", function timeline(){
const circle1 = document.getElementById("dot-1")
const details1 = document.getElementById("dot-1-action")
const container1 = document.getElementById("dot1-container")

const circle2 = document.getElementById("dot-2")
const details2 = document.getElementById("dot-2-action")
const container2 = document.getElementById("dot2-container")

const circle3 = document.getElementById("dot-3")
const details3 = document.getElementById("dot-3-action")
const container3 = document.getElementById("dot3-container")

const circle4 = document.getElementById("dot-4")
const details4 = document.getElementById("dot-4-action")
const container4 = document.getElementById("dot4-container")

const circle5 = document.getElementById("dot-5")
const details5 = document.getElementById("dot-5-action")
const container5 = document.getElementById("dot5-container")

const circle6 = document.getElementById("dot-6")
const details6 = document.getElementById("dot-6-action")
const container6 = document.getElementById("dot6-container")

container1.addEventListener("mouseover", function(){
  toggleDetails(circle1, details1, container1)
})

container2.addEventListener("mouseover", function(){
  toggleDetails(circle2, details2, container2)
})

container3.addEventListener("mouseover", function(){
  toggleDetails(circle3, details3, container3)
})

container4.addEventListener("mouseover", function(){
  toggleDetails(circle4, details4, container4)
})

container5.addEventListener("mouseover", function(){
  toggleDetails(circle5, details5, container5)
})

container6.addEventListener("mouseover", function(){
  toggleDetails(circle6, details6, container6)
})

function toggleDetails(circle, details, container){
  container.addEventListener("mouseover", () => {
    circle.style.opacity = 0;
    details.style.display = 'block';
    setTimeout(() => {
      details.style.opacity = 1;
    }, 10); // Delay to ensure transition works properly
  });
  container.addEventListener("mouseout", () => {
    circle.style.opacity = 0;
    setTimeout(() => {
      circle.style.opacity = 1;
      details.style.opacity = 0;
    }, 100); // Delay to ensure transition works properly
  });
}})

// form submission
function validateName(){
  let inputName = document.querySelector("#name")
  let valueName = inputName.value;
  let errorName = document.querySelector("#error-name")

  if (valueName == ""){
    errorName.innerHTML = "Name cannot be empty!"
    inputName.style.border = "1px solid #A60A0A"
    return false;
  }else{
    errorName.innerHTML = ""
    inputName.style.border = "1px solid black"
    return true;
  }
}

function validateEmail(){
  let inputEmail = document.querySelector("#email")
  let valueEmail = inputEmail.value;
  let errorEmail = document.querySelector("#error-email")

  if (valueEmail == ""){
    errorEmail.innerHTML = "Email cannot be empty!"
    inputEmail.style.border = "1px solid #A60A0A"
    return false;
  }else if(!valueEmail.includes("@")){
    errorEmail.innerHTML = "Email must contain @!"
    inputEmail.style.border = "1px solid #A60A0A"
    return false;
  }else{
    errorEmail.innerHTML = ""
    inputEmail.style.border = "1px solid black"
    return true;
  }
}

function validateSubject(){
  let inputSubject = document.querySelector("#subject")
  let valueSubject = inputSubject.value;
  let errorSubject = document.querySelector("#error-subject")

  if (valueSubject == ""){
    errorSubject.innerHTML = "Subject cannot be empty!"
    inputSubject.style.border = "1px solid #A60A0A"
    return false;
  }else{
    errorSubject.innerHTML = ""
    inputSubject.style.border = "1px solid black"
    return true;
  }
}

function formAdjustment(){
  let isNameValid = validateName();
  let isEmailValid = validateEmail();
  let isSubjectValid = validateSubject();
  let blueForm = document.getElementById('form-container')
  if (isNameValid == false && isEmailValid == false && isSubjectValid == false){
    blueForm.style.height = "725px"
  } else if (isNameValid == true && isEmailValid == false && isSubjectValid == false){
    blueForm.style.height = "705px"
  } else if (isNameValid == false && isEmailValid == true && isSubjectValid == false){
    blueForm.style.height = "705px"
  } else if (isNameValid == false && isEmailValid == false && isSubjectValid == true){
    blueForm.style.height = "705px"
  }else if (isNameValid == true && isEmailValid == true && isSubjectValid == false){
    blueForm.style.height = "685px"
  } else if (isNameValid == false && isEmailValid == true && isSubjectValid == true){
    blueForm.style.height = "685px"
  } else if (isNameValid == true && isEmailValid == false && isSubjectValid == true){
    blueForm.style.height = "685px"
  } else {
    blueForm.style.height = "665px"
  }
}

let submitBtn = document.querySelector("#submit-btn")
submitBtn.addEventListener("click", function(e) {
  e.preventDefault();
  
  formAdjustment();
  let isNameValid = validateName();
  let isEmailValid = validateEmail();
  let isSubjectValid = validateSubject();
  
  if(isEmailValid && isNameValid && isSubjectValid){
    console.log("yes")
    let submitForm = document.querySelector("#submit-form")
    submitForm.submit();
  }
})

function mailTo(){
  let emailAddress = "technoevent@bncc.net"

  let mailToLink = 'mailto: ' + emailAddress;

  window.location.href = mailToLink;
}