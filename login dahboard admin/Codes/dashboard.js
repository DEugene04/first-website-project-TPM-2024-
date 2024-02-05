let music = document.getElementById("Background-music")
music.volume = 0.4;

document.addEventListener("DOMContentLoaded", function () {
  var timelineButton = document.getElementById("timelineButton");

  var timelineContent = document.getElementById("timelineContent");

  timelineButton.addEventListener("click", function () {
    timelineContent.scrollIntoView({ behavior: "smooth" });
  });
});

// 111

document.addEventListener("DOMContentLoaded", function () {
  var dashboardButton = document.getElementById("dashboardo");
  var rectangleeContent = document.getElementById("welcomee");

  dashboardButton.addEventListener("click", function () {
    rectangleeContent.scrollIntoView({ behavior: "smooth" });
  });
});


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