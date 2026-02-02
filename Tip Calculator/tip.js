// Selecting DOM elements
let amount = document.getElementById("bill-amount");
let tipPercentage = document.getElementById("tip-percentage");
let calculateBtn = document.getElementById("calculate-btn");
let totalAmount = document.getElementById("total-amount");
let tipAmount = document.getElementById("tip-amount");
let tipForm = document.getElementById("tip-Form");

// Function to calculate total amount
function totalMoney(billAmount, percentage) {
  let tipQuota = (percentage / 100) * billAmount;
  let total = tipQuota + billAmount;
  return total;
}

// Function for validity of Number
function validNumberInput(number) {
  if (number.trim() === "") {
    amount.classList.add("error");
    alert("Please enter a valid!")
  } else if (number.trim !== "") {
    amount.classList.add("valid");
  }
}

calculateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  //Getting the values users enter
  let userBill = amount.value;
  let tipValue = tipPercentage.value;

  // Converting the inputs to number
  let userBillNumber = Number(userBill);
  let tipValueNumber = Number(tipValue);
  // Checking validity via the validNumberInput helper function
  validNumberInput(userBill);
  validNumberInput(tipValue);

  // Calculating the total amount via the totalMoney helper function
  let result = totalMoney(userBillNumber, tipValueNumber);
  totalAmount.innerText = result;
});
