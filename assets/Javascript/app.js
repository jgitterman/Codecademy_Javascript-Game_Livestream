// Display the canvas
const canvas = document.querySelector("canvas");
canvas.width = 300;
canvas.height = 300;
const ctx = canvas.getContext("2d")

// store variables
let play_x = 20
let play_y = 20
let base_x = Math.floor(Math.random() * 250)
let base_y = Math.floor(Math.random() * 250)
var wins = 0;
var winsText = document.getElementById("score");

// Create and style pixle
ctx.fillStyle = "red"
ctx.fillRect(play_x, play_y, 10, 10)

// Create randomly generated container
ctx.strokeRect(base_x, base_y, 50, 50)

// Create function to recreate pixle on each keystroke
function step() {
  ctx.clearRect(0, 0, 300, 300)
  ctx.fillStyle = "red";
  ctx.fillRect(play_x, play_y, 10, 10);

  ctx.strokeRect(base_x, base_y, 50, 50);
  requestAnimationFrame(step);

  if (play_x >= base_x && play_x <= base_x + 50 && play_y >= base_y && play_y <= base_y + 50) {
    console.log(score++)
    base_x = Math.floor(Math.random() * 250);
    base_y = Math.floor(Math.random() * 250);
    wins++;
    winsText.textContent = "Wins: " + wins;
  }
}
requestAnimationFrame(step);



// Create a function to move the pixle
function handleInput(event) {
  const key = event.key
  if (key === "a") {
    play_x -= 5;
  } else if (key === "s") {
    play_y += 5;
  } else if (key === "d") {
    play_x += 5;
  } else if (key === "w") {
    play_y -= 5;
  }
}

// Create an eventListner to move the pixle on keypress
document.addEventListener("keypress", handleInput)

