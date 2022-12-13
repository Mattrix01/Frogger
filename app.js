const timeLeftDisplay = document.querySelector("#time-left");
const resultDisplay = document.querySelector("#result");
const StartPauseButton = document.querySelector("start-pause-button");
const squares = document.querySelectorAll(".grid div");
let currentIndex = 76;
const width = 9;
console.log(squares);

// passing through event into function (e) seeing which key
function moveFrog(e) {
  // everytime function run remove frog to prevent trails
  squares[currentIndex].classList.remove("frog");
  switch (e.key) {
    case "ArrowLeft":
      console.log("move left");
      currentIndex -= 1;
      break;
    case "ArrowRight":
      console.log("move right");
      currentIndex += 1;
      break;
    case "ArrowUp":
      console.log("move up");
      currentIndex -= width;

      break;
    case "ArrowDown":
      console.log("move down");
      currentIndex += width;
      break;
  }
  // adding frog into squares array when called.
  squares[currentIndex].classList.add("frog");
}
// Function runs whenever a key up is heard
document.addEventListener("keyup", moveFrog);
