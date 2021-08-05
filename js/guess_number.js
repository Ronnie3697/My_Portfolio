"use strict";

/*
 * Handling Click Events + Implementing the Game Logic
 */

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (messageClass) {
  document.querySelector(".message").textContent = messageClass;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // When there is now input
  if (!guess) {
    displayMessage("NO number!");
  }
  // When the player wins
  else if (guess === secretNumber) {
    displayMessage("Correct number");

    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }

  // When the input is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too high" : "Too low");
      ("Too low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You just lost the game");

      document.querySelector(".score").textContent = 0;
    }
  }
});

// Button again - reset everything
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  displayMessage("Start guessing...");

  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = score;

  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
});
