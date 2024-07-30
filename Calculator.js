function add(num1, num2) {
  return num1 + num2
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

let operand1 = 2
let operand2 = 3
let operator = "add"

function operate(num1, num2, operator) {
  switch (operator) {
    case "add":
      add(num1, num2)
      break
    case "subtract":
      subtract(num1, num2)
      break
    case "multiply":
      multiply(num1, num2)
      break
    case "divide":
      divide(num1, num2)
  }
}


operate(operand1, operand2, operator)