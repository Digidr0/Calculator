//querySelectors
const previousOperandContainer = document.querySelector(".previous-operand");
const currentOperationContainer = document.querySelector(".current-operation");
const currentOperandContainer = document.querySelector(".current-operand");
const operationButtons = document.querySelectorAll(".operation");
const numberButtons = document.querySelectorAll(".number");
const equalsButton = document.querySelector(".equals");
const dotButton = document.querySelector(".dot");
const deleteButton = document.querySelector(".delete");
const allClearButton = document.querySelector(".all-clear");

//variables
let previousOperand = ""; //top text
let currentOperand = ""; //bottom text
let currentoperation = ""; //middle operation
let isNew = false; //false all after click "equal", clear all after click numbers

currentOperandContainer.textContent = currentOperand;
previousOperandContainer.textContent = previousOperand;

//operators, rounding to .000, if b = 0 display "error"
function operate(operator, a, b = 0) {
  a = parseFloat(a);
  b = parseFloat(b);
  if (operator == "+") {
    currentOperand = Math.floor((a + b) * 1000) / 1000;
  } else if (operator == "-") {
    currentOperand = Math.floor((a - b) * 1000) / 1000;
  } else if (operator == "*") {
    currentOperand = Math.floor(a * b * 1000) / 1000;
  } else if (operator == "÷") {
    if (b == 0) {
      currentOperand = "!error. Learn math.";
    } else {
      currentOperand = Math.floor((a / b) * 1000) / 1000;
    }
  }
}
//clear all display and all vars
function allClear() {
  previousOperand = "";
  currentOperand = "";
  currentoperation = "";
  currentOperandContainer.textContent = currentOperand;
  previousOperandContainer.textContent = previousOperand;
  currentOperationContainer.textContent = currentoperation;
}
//operate with .value operator
operationButtons.forEach(function (item) {
  item.addEventListener("click", function () {
    currentoperation = item.value;
    previousOperand = currentOperand;
    previousOperandContainer.textContent = currentOperandContainer.textContent;
    currentOperandContainer.textContent = "";
    currentOperationContainer.textContent = item.value;
  });
});
//add .value number to current operator, if "isNew" is "true" clear all, and then...
numberButtons.forEach(function (item) {
  item.addEventListener("click", function () {
    if (isNew) {
      allClear();
      isNew = false;
    }
    currentOperand = currentOperandContainer.textContent.concat(item.value);
    currentOperandContainer.textContent = currentOperand;
  });
});
//count all and dispay result, change "previosOperator" to result expression
equalsButton.addEventListener("click", function () {
  previousOperandContainer.textContent = `${previousOperand} ${currentoperation} ${currentOperand}`;
  operate(currentoperation, previousOperand, currentOperand);
  currentOperandContainer.textContent = currentOperand;
  currentOperationContainer.textContent = "=";
  isNew = true;
});
//delete last char from string "currentOperator"
deleteButton.addEventListener("click", function () {
  currentOperandContainer.textContent =
    currentOperandContainer.textContent.slice(0, -1);
  isNew = true;
});
//clear all with function
allClearButton.addEventListener("click", allClear);
dotButton.addEventListener("click", function () {
  if (currentOperand == 0) {
    currentOperandContainer.textContent =
      currentOperandContainer.textContent.concat("0.");
  }
  if (currentOperandContainer.textContent.indexOf(".") == -1) {
    currentOperandContainer.textContent =
      currentOperandContainer.textContent.concat(".");
  }
});
