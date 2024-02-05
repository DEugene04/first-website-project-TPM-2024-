let music = document.getElementById("Background-music")
music.volume = 0.4;

let viewButtons = document.querySelectorAll(".viewButton");
let popUp = document.getElementById("popUp");

viewButtons.forEach(function (viewButton) {
  viewButton.addEventListener("click", function (e) {
    e.preventDefault();

    console.log("button pressed");
    popUp.style.display = (popUp.style.display === "none" || popUp.style.display === "") ? "block" : "none";

    if (popUp.style.display == "block") {
      // Stop the click event from propagating to the body
      e.stopPropagation();
    }
  });
});

// Add click event listener to the document to close popup when clicking outside
document.addEventListener("click", function () {
  if (popUp.style.display === "block") {
    popUp.style.display = "none";
  }
});


