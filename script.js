const rect = document.getElementById("myRect");
let topPosition = 200; // starting top position
let leftPosition = 200; // starting left position


document.addEventListener("keydown", function(event) {
  if (event.key === "ArrowUp") {
    topPosition -= 10; // move up by 10px
    rect.style.top = topPosition + "px";
  }
  if (event.key === "ArrowDown") {
    topPosition += 10; // move down by 10px
    rect.style.top = topPosition + "px";
  }
  if (event.key === "ArrowLeft") {
    leftPosition -= 10; // move left by 10px
    rect.style.left = leftPosition + "px";
  }
  if (event.key === "ArrowRight") {
    leftPosition += 10; // move right by 10px
    rect.style.left = leftPosition + "px";
  }
  
});