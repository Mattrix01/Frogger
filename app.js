const timeLeftDisplay = document.querySelector("#time-left");
const resultDisplay = document.querySelector("#result");
const StartPauseButton = document.querySelector("start-pause-button");
const squares = document.querySelectorAll(".grid div");
let currentIndex = 0;
console.log(squares);

function moveFrog() {
  // adding frog into squares array when called.
  squares[currentIndex].classList.add("frog");
}
// Function runs whenever a key up is heard
document.addEventListener("keyup", moveFrog);
