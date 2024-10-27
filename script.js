"use strict";

// ---State of the application---
let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector(".number").textContent = secretNumber;

// --- DOM Manipulation---
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //   No Guess Number entered Scenario
  if (!guess) {
    document.querySelector(".message").textContent = "⛔...No Number...⛔";
  }

  // Guess Number is Superior to Secret Number
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "🫡Too High";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥GAME OVER💥";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#be4044";
    }
  }

  // Guess Number is Inferior to Secret Number
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "😒Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥GAME OVER💥";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#be4044";
    }
  }

  // uess Number is equal to Secret Number
  else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉WELL DONE🎉";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#50be44";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").style.borderRadius = "50%";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
      document.querySelector(
        ".game"
      ).textContent = `🏆 ${highScore} New High Score🏆`;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".game").textContent = "Guess My Number!";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").style.borderRadius = "0";
  document.querySelector(".message").textContent = `Start guessing...`;
});
