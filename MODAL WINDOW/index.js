"use strict";

const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("close-modal");
const btnsOpenModal = document.querySelectorAll("#button");

// Function to open Modal
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// Function to close Modal
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// Selecting each button with for loop. For loop is used because
//all the buttons were selected at once, hence thy are in an array

for (let i = 0; i < btnsOpenModal.length; i++) {
  let eachBtn = btnsOpenModal[i];
  eachBtn.addEventListener("click", openModal)
}


// Adding event listeners to closeBtn and ovelay
closeBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function(e) {
    if(e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }
})
