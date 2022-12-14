const timeLeftDisplay = document.querySelector("#time-left");
const resultDisplay = document.querySelector("#result");
const StartPauseButton = document.querySelector("start-pause-button");
const squares = document.querySelectorAll(".grid div");
const logsleft = document.querySelectorAll(".log-left");
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
      // modulus operator, remainder %
      // preventing frog going off screen with if statement, only change currentIndex not 0
      if (currentIndex % width !== 0) currentIndex -= 1;
      break;
    case "ArrowRight":
      console.log("move right");
      if (currentIndex % width < width - 1) currentIndex += 1;
      break;
    case "ArrowUp":
      console.log("move up");
      if (currentIndex - width >= 0) currentIndex -= width;

      break;
    case "ArrowDown":
      console.log("move down");
      if (currentIndex + width < width * width) currentIndex += width;
      break;
  }
  // adding frog into squares array when called.
  squares[currentIndex].classList.add("frog");
}
// Function runs whenever a key up is heard
document.addEventListener("keyup", moveFrog);

function autoMoveLogs() {
  // grabbing all log left divs, passing into moveLogleft function
  logsleft.forEach((logLeft) => moveLogLeft(logLeft));
}

autoMoveLogs();

function moveLogLeft(logLeft) {
  // looking for true statements
  switch (true) {
    //checking if log left div contains class of l1
    case logLeft.classList.contains("l1"):
      logLeft.classList.remove("l1");
      logLeft.classList.add("l2");
      break;
  }
}

setInterval(autoMoveLogs);
