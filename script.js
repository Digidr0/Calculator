const previousOperandContainer = document.querySelector(".previous-operand");
const currentOperationContainer = document.querySelector(".current-operation");
const currentOperandContainer = document.querySelector(".current-operand");
const operationButtons = document.querySelectorAll(".operation");
const numberButtons = document.querySelectorAll(".number");
const equalsButton = document.querySelector(".equals");
const dotButton = document.querySelector(".dot");
const deleteButton = document.querySelector(".delete");
const allClearButton = document.querySelector(".all-clear");
let previousOperand = "";
let currentOperand = "";
let currentoperation = "";

currentOperandContainer.textContent = currentOperand;
previousOperandContainer.textContent = previousOperand;

function operate(operator, a, b = 0) {
  a = parseFloat(a);
  b = parseFloat(b);
  if (operator == "+") {
    currentOperand = Math.floor((a + b) * 100) / 100;
  } else if (operator == "-") {
    currentOperand = Math.floor((a - b) * 100) / 100;
  } else if (operator == "*") {
    currentOperand = Math.floor(a * b * 100) / 100;
  } else if (operator == "÷") {
    if (b == 0) {
      currentOperand = "!error. Learn math.";
    } else {
      currentOperand = Math.floor((a / b) * 100) / 100;
    }
  }
}

operationButtons.forEach(function (item) {
  item.addEventListener("click", function () {
    currentoperation = item.value;
    previousOperand = currentOperand;
    previousOperandContainer.textContent = currentOperandContainer.textContent;
    currentOperandContainer.textContent = "";
    currentOperationContainer.textContent = item.value;
  });
});

numberButtons.forEach(function (item) {
  item.addEventListener("click", function () {
    currentOperand = currentOperandContainer.textContent.concat(item.value);
    currentOperandContainer.textContent = currentOperand;
  });
});

equalsButton.addEventListener("click", function () {
  previousOperandContainer.textContent = 
    `${previousOperand} ${currentoperation} ${currentOperand}`;
  operate(currentoperation, previousOperand, currentOperand);
  currentOperandContainer.textContent = currentOperand;
  currentOperationContainer.textContent = "=";
});

deleteButton.addEventListener("click", function () {
  currentOperandContainer.textContent =
    currentOperandContainer.textContent.slice(0, -1);
});

allClearButton.addEventListener("click", function () {
  previousOperand = "";
  currentOperand = "";
  currentoperation = "";
  currentOperandContainer.textContent = currentOperand;
  previousOperandContainer.textContent = previousOperand;
  currentOperationContainer.textContent = currentoperation;
});

dotButton.addEventListener("click", function () {
  if(currentOperand == 0){currentOperandContainer.textContent =
    currentOperandContainer.textContent.concat("0.");}
  if (currentOperandContainer.textContent.indexOf(".") == -1) {
    currentOperandContainer.textContent =
      currentOperandContainer.textContent.concat(".");
  }
});
