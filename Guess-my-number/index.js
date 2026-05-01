"use strict"; //It is used to ensure high standard compliance and avoid
//bugs that would have been ignored by JavaScript

// THE OVERALL LOGIC OF THE GAME
// 1. Check for empty input field (if condition)

// 2. Check if the guess is correct, display the high score and change the background color to green (else if condition. An if condition is nested inside
//to check if the score is higher than the high score and update it if it is)

// 3.Check if the guess is wrong, if it is, check if the score is greater than 1 and decrement accordingly. Use a tenary operator to check
// if the guess is too high or too low. The tenary operator is written as an argument of the displayMessage function. (else if condition is used. And if condition is nested
// if and else conditions are used to check the score))



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
  const guess = Number(userInput.value);

  // capturing default score
  let initialScore = Number(score.textContent);
  console.log(initialScore);

  let highNumber = Number(highScore.textContent);
  console.log(highNumber);

  // logic to check compare user input with randomNumber generated
  // 1. Check if the input field. The ! operator is used to check if the value is falsy.
  // ".value" will read an empty input field as 0 which is falsy. The ! operator will convert it to true and the code block will fire
  // if the user enters a real number, ! operator will convert it to false and code block will not fire. It will move to the next code
  // block to check if the guess is correct or not
  if (!guess) {
    // message.textContent = "⛔ No Number";
    displayMessage("⛔ No Number");
  } else if (guess === randomNumber) {
    // message.textContent = "🎉 Correct Number!";
    displayMessage("🎉 Correct Number!")
    rightGuess.textContent = guess;
    document.querySelector("body").style.backgroundColor = "#60b347";
    if (initialScore > highNumber) {
      highNumber = initialScore;
      highScore.textContent = highNumber;
    }

    //when guess is wrong
  } else if(guess !== randomNumber) {
    if (initialScore > 1) {
      //This will ensure the game ends at exactly score of zero. Once the score is 1, the condition will be false and the else block will fire.
      initialScore--; //decrementing the score by 1
      score.textContent = initialScore; //Dynamically inserting the score inside the html element
      // message.textContent = `${guess > randomNumber ? "Too High" : "Too Low"} `;
      displayMessage(guess > randomNumber ? "Too High" : "Too Low");
    } else {
      score.textContent = 0;
      // message.textContent = "🎇 You lost the game! Try again!";
      displayMessage("🎇 You lost the game! Try again!");
      userInput.setAttribute("disabled", "disabled"); //disabling the input to force user to start again
      userInput.value = "";
    }
  }

  // THE CODE BELOW IS REFACTORED TO THE ONE ABOVE TO OBEY DRY PRINCIPLE
  // else if (guess > randomNumber) {
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
  // } else if (guess < randomNumber) {
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
  rightGuess.textContent = "?";
});
