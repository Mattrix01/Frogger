const timeLeftDisplay = document.querySelector("#time-left");
const resultDisplay = document.querySelector("#result");
const StartPauseButton = document.querySelector("start-pause-button");
const squares = document.querySelectorAll(".grid div");
const logsleft = document.querySelectorAll(".log-left");
const logsRight = document.querySelectorAll(".log-right");
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
  logsRight.forEach((logRight) => moveLogRight(logRight));
}

function moveLogLeft(logLeft) {
  // looking for true statements
  switch (true) {
    //checking if log left div contains class of l1 etc.
    case logLeft.classList.contains("l1"):
      logLeft.classList.remove("l1");
      logLeft.classList.add("l2");
      break;
    // if contains l2, remove l2 and add l3 and so on...
    case logLeft.classList.contains("l2"):
      logLeft.classList.remove("l2");
      logLeft.classList.add("l3");
      break;
    case logLeft.classList.contains("l3"):
      logLeft.classList.remove("l3");
      logLeft.classList.add("l4");
      break;
    case logLeft.classList.contains("l4"):
      logLeft.classList.remove("l4");
      logLeft.classList.add("l5");
      break;
    case logLeft.classList.contains("l5"):
      logLeft.classList.remove("l5");
      logLeft.classList.add("l1");
      break;
  }
}

// same for logs right divs, going opposite way
function moveLogLeft(logRight) {
  // looking for true statements
  switch (true) {
    case logRight.classList.contains("l1"):
      logRight.classList.remove("l1");
      logRight.classList.add("l5");
      break;

    case logRight.classList.contains("l2"):
      logRight.classList.remove("l2");
      logRight.classList.add("l1");
      break;
    case logRight.classList.contains("l3"):
      logRight.classList.remove("l3");
      logRight.classList.add("l2");
      break;
    case logRight.classList.contains("l4"):
      logRight.classList.remove("l4");
      logRight.classList.add("l3");
      break;
    case logRight.classList.contains("l5"):
      logRight.classList.remove("l5");
      logRight.classList.add("l4");
      break;
  }
}

setInterval(autoMoveLogs, 1000);
