"use strict"; //It is used to ensure high standard compliance and avoid
//bugs that would have been ignored by JavaScript

// Selecting elements
const resetBtn = document.getElementById("reset-button");
const rightGuess = document.getElementById("right-number");
const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-button");
const score = document.getElementById("score");
const highScore = document.getElementById("highscore");
const message = document.getElementById("message");

// GAME LOGIC
//1. Defining the random number. Defined outside the event listener
//because we want it to be generated once. And let keyword is used
//because it is going to be reassigned
let randomNumber = Math.trunc(Math.random() * 20) + 1;

const displayMessage = function(logMessage) {
  message.textContent = logMessage;
}

//2.Adding event listener to the check button
checkBtn.addEventListener("click", function () {
  // Capturing user's input and doing type conversion
  const inputNumber = Number(userInput.value);

  // capturing default score
  let initialScore = Number(score.textContent);
  console.log(initialScore);

  let highNumber = Number(highScore.textContent);
  console.log(highNumber);

  // logic to check compare user input with randomNumber generated
  if (!inputNumber) {
    // message.textContent = "⛔ No Number";
    displayMessage("⛔ No Number");
  } else if (inputNumber === randomNumber) {
    // message.textContent = "🎉 Correct Number!";
    displayMessage("🎉 Correct Number!")
    rightGuess.textContent = inputNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    if (initialScore > highNumber) {
      highNumber = initialScore;
      highScore.textContent = highNumber;
    }

    //when guess is wrong
  } else if(inputNumber !== randomNumber) {
    if (initialScore > 1) {
      //This will ensure the game ends at exactly score of zero
      initialScore--; //decrementing the score by 1
      score.textContent = initialScore; //Dynamically inserting the score inside the html element
      // message.textContent = `${inputNumber > randomNumber ? "Too High" : "Too Low"} `;
      displayMessage(inputNumber > randomNumber ? "Too High" : "Too Low");
    } else {
      score.textContent = 0;
      // message.textContent = "🎇 You lost the game! Try again!";
      displayMessage("🎇 You lost the game! Try again!");
      userInput.setAttribute("disabled", "disabled"); //disabling the input to force user to start again
      userInput.value = "";
    }
  }

  // THE CODE BELOW IS REFACTORED TO THE ONE ABOVE TO OBEY DRY PRINCIPLE
  // else if (inputNumber > randomNumber) {
  //   if (initialScore > 1) {
  //     //This will ensure the game ends at exactly score of zero
  //     initialScore--; //decrementing the score by 1
  //     score.textContent = initialScore; //Dynamically inserting the score inside the html element
  //     message.textContent = "📈 Too High!";
  //   } else {
  //     score.textContent = 0;
  //     message.textContent = "🎇 You lost the game! Try again!";
  //     userInput.setAttribute("disabled", "disabled"); //disabling the input to force user to start again
  //     userInput.value = "";
  //   }
  // } else if (inputNumber < randomNumber) {
  //   if (initialScore > 1) {
  //     //This will ensure the game ends at exactly score of zero
  //     initialScore--; //decrementing the score by 1
  //     score.textContent = initialScore; //Dynamically inserting the score inside the html element
  //     message.textContent = "📉 Too Low!";
  //   } else {
  //     score.textContent = 0;
  //     message.textContent = "🎇 You lost the game! Try again!";
  //     userInput.setAttribute("disabled", "disabled"); //disabling input to force user to start again
  //     userInput.value = "";
  //   }
  // }
});

// Resetting everything
resetBtn.addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#000000";
  // message.textContent = "🎉 start Guessing...";
  displayMessage("🎉 start Guessing...");
  score.textContent = 20;
  userInput.value = "";
  userInput.removeAttribute("disabled");
});
