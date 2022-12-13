const timeLeftDisplay = document.querySelector("#time-left");
const resultDisplay = document.querySelector("#result");
const StartPauseButton = document.querySelector("start-pause-button");
const squares = document.querySelectorAll(".grid div");
let currentIndex = 76;
console.log(squares);

// passing through event into function (e) seeing which key
function moveFrog(e) {
  switch (e.key) {
    case "ArrowLeft":
      console.log("move left");
      break;
    case "ArrowRight":
      console.log("move right");
      break;
    case "ArrowUp":
      console.log("move up");
      break;
    case "ArrowDown":
      console.log("move down");
      break;
  }
  // adding frog into squares array when called.
  squares[currentIndex].classList.add("frog");
}
// Function runs whenever a key up is heard
document.addEventListener("keyup", moveFrog);
