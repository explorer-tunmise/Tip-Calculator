"use strict";

// SELECTING ALL THE ELEMENTS
const reload = document.getElementById("new-game");
const simulator = document.getElementById("dice-simulator");
const rollDiceBtn = document.getElementById("roll-dice");
const holdBtn = document.getElementById("hold");
const card0 = document.getElementById("card_0");
const total1 = document.getElementById("total_0");
const currentScore1 = document.getElementById("current_score_0");
const card1 = document.getElementById("card_1");
const total2 = document.getElementById("total_1");
const currentScore2 = document.getElementById("current_score_1");

// IMPLEMENTING THE LOGIC
let currentScore, scores, activePlayer, playing;

const init = function () {
  currentScore = 0; // it cannot be inside the event listener, else it will
//keep resetting after each click, and that is not what we want
  activePlayer = 0;
  scores = [0, 0];
  playing = true;
  simulator.classList.add("hidden");
  total1.textContent = 0;
  total2.textContent = 0;
  currentScore1.textContent = 0;
  currentScore2.textContent = 0;
  card0.classList.remove("bg-black");
  card1.classList.remove("bg-black");
  card0.classList.add("bg-amber-300");
  card1.classList.add("bg-amber-200");
}

init();

const switchPlayer = function () {
  document.getElementById(`current_score_${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  card0.classList.toggle("bg-amber-300");
  card1.classList.toggle("bg-amber-200");
  card0.classList.toggle("bg-amber-200");
  card1.classList.toggle("bg-amber-300");
};

rollDiceBtn.addEventListener("click", function () {
  if (playing) {
    //1. Generating a random dice roll
    let dice = Math.trunc(Math.random() * 6) + 1;
    simulator.classList.remove("hidden");

    //2. display dice
    simulator.textContent = dice; //this is used to simulate dice roll
    //diceEl.src = `dice-${dice}.png` - this is the code that
    //would have been there if I had used real dice images with different
    //numbers

    //3.check for the rolled 1. if true, switch player, else add roll to the current score
    if (dice !== 1) {
      //add dice to the current score
      currentScore += dice;
      document.getElementById(`current_score_${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch to another player
      switchPlayer();
    }
  }
});

holdBtn.addEventListener("click", function () {
  if (playing) {
    //1. Add current score to total score of the active player
    scores[activePlayer] += currentScore;
    document.getElementById(`total_${activePlayer}`).textContent =
      scores[activePlayer];

    //2.check if player's total >= 100

    if (scores[activePlayer] >= 20) {
      simulator.classList.add("hidden");
      playing = false;
      document
        .getElementById(`card_${activePlayer}`)
        .classList.remove("bg-amber-300");
      document.getElementById(`card_${activePlayer}`).classList.add("bg-black");

    } else {
      switchPlayer();
    }
  }
});

reload.addEventListener("click", init);
