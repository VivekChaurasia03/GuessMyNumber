"use strict";

// Deciding a secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highestScore = 0;

const displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
};

// Handling click of a button - evenListener
document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess);
    // In case there is no input from user
    if (!guess) {
        displayMessage("⛔ No number!");
        // When guess is same
    } else if (guess === secretNumber) {
        displayMessage("🎉 Correct Number!");
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
        document.querySelector(".number").textContent = secretNumber;
        highestScore = Math.max(score, highestScore);
        document.querySelector(".highscore").textContent = highestScore;
        // When the guess is different
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(
                guess > secretNumber ? "📈 Too high!" : "📉 Too low!"
            );
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            displayMessage("💥 You lost the game!");
            document.querySelector(".score").textContent = 0;
        }
    }
});

document.querySelector(".again").addEventListener("click", function () {
    // Resetting the score and generating a new number
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    // Resetting the properties
    displayMessage("Start guessing...");
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";

    // Styling
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
});
