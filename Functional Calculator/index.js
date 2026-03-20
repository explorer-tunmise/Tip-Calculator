const resultDisplay = document.getElementById("result-display");
const subResult = document.getElementById("sub-result-display");
const onBtn = document.getElementById("on-btn");
const offBtn = document.getElementById("off-btn");
const eraseBtn = document.getElementById("erase-btn");
const clearBtn = document.getElementById("clear-btn");
const numberBtns = document.querySelectorAll("#number-btn");
const decimalBtn = document.getElementById("decimal-btn");
const equalsBtn = document.getElementById("equals-btn");
// const addBtn = document.getElementById("add-btn");
// const subtractBtn = document.getElementById("subtract-btn");
// const multiplyBtn = document.getElementById("multiply-btn");
// const divideBtn = document.getElementById("divide-btn");
const operatorsBtn = document.querySelectorAll("#operator-btn");

// Declaring states to store user's inputs
let currentValue = "";
let operand1 = null;
let operand2 = null;
let operator = "";

addFunction = (num1, num2) => {
  let result = num1 + num2;
  return result;
};

subtractFunction = (num1, num2) => {
  let result = num1 - num2;
  return result;
};

multiplyFunction = (num1, num2) => {
  let result = num1 * num2;
  return result;
};

divideFunction = (num1, num2) => {
  if (num2 === 0) {
    return NaN;
  }
  let result = num1 / num2;
  return result;
};

onBtn.addEventListener("click", () => {
  resultDisplay.innerText = "0";
  numberBtns.forEach((btn) => {
    btn.removeAttribute("disabled");
  });
});

offBtn.addEventListener("click", () => {
  resultDisplay.innerText = "";
  numberBtns.forEach((btn) => {
    btn.setAttribute("disabled", "disabled");
  });
});

numberBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (resultDisplay.innerText === "0") {
      resultDisplay.innerText = ` ${btn.value}`;
      operand1 = btn.value;
    } else if (resultDisplay.innerText !== "0") {
      resultDisplay.innerText += `${btn.value}`;
      operand1 += btn.value;
    }
  });
});

operatorsBtn.forEach((operate) => {
  numberBtns.forEach((btn) => {});
  operate.addEventListener("click", () => {
  if(resultDisplay.innerText === `${operand1}`) {
    resultDisplay.innerText = ` ${operand1} ${operate.value}`;
    operator = operate.value;
  }
  });
});
