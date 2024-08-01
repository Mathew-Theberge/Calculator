const clearButton = document.querySelector(".clear-button")
const negativeNumbersButton = document.querySelector(".negative-numbers-button")
const exponentButton = document.querySelector(".exponent-button")
const dotButton = document.querySelector(".dot-button")
const equalsButton = document.querySelector(".equals-button")
const n1 = document.querySelector(".n1")
const n2 = document.querySelector(".n2")
const n3 = document.querySelector(".n3")
const n4 = document.querySelector(".n4")
const n5 = document.querySelector(".n5")
const n6 = document.querySelector(".n6")
const n7 = document.querySelector(".n7")
const n8 = document.querySelector(".n8")
const n9 = document.querySelector(".n9")
const n0 = document.querySelector(".n0")
const divideButton = document.querySelector(".divide-button")
const multiplyButton = document.querySelector(".multiply-button")
const subtractButton = document.querySelector(".subtract-button")
const addButton = document.querySelector(".add-button")
const displayOutput = document.querySelector(".display-output")

function add(num1, num2) {
  if (Math.floor(num1 + num2) === num1 + num2) {
    displayOutput.textContent = num1 + num2
    displayOutput.classList.add("bold")
  } else {
    displayOutput.textContent = (num1 + num2).toFixed(7)
    displayOutput.classList.add("bold")
  }
}

function subtract(num1, num2) {
  if (Math.floor(num1 - num2) === num1 - num2) {
    displayOutput.textContent = num1 - num2
    displayOutput.classList.add("bold")
  } else {
    displayOutput.textContent = (num1 - num2).toFixed(7)
    displayOutput.classList.add("bold")
  }
}

function multiply(num1, num2) {
  if (Math.floor(num1 * num2) === num1 * num2) {
    displayOutput.textContent = num1 * num2
    displayOutput.classList.add("bold")
  } else {
    displayOutput.textContent = (num1 * num2).toFixed(7)
    displayOutput.classList.add("bold")
  }
}

function divide(num1, num2) {
  if (Math.floor(num1 / num2) === num1 / num2) {
    displayOutput.textContent = num1 / num2
    displayOutput.classList.add("bold")
  } else {
    displayOutput.textContent = (num1 / num2).toFixed(7)
    displayOutput.classList.add("bold")
  }
}

let displayValue = ""
let operand1 = ""
let operand2 = ""
let operator = ""

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

n1.addEventListener("click", () => {displayOutput.textContent = displayValue += "1";displayOutput.classList.remove("bold")})
n2.addEventListener("click", () => {displayOutput.textContent = displayValue += "2";displayOutput.classList.remove("bold")})
n3.addEventListener("click", () => {displayOutput.textContent = displayValue += "3";displayOutput.classList.remove("bold")})
n4.addEventListener("click", () => {displayOutput.textContent = displayValue += "4";displayOutput.classList.remove("bold")})
n5.addEventListener("click", () => {displayOutput.textContent = displayValue += "5";displayOutput.classList.remove("bold")})
n6.addEventListener("click", () => {displayOutput.textContent = displayValue += "6";displayOutput.classList.remove("bold")})
n7.addEventListener("click", () => {displayOutput.textContent = displayValue += "7";displayOutput.classList.remove("bold")})
n8.addEventListener("click", () => {displayOutput.textContent = displayValue += "8";displayOutput.classList.remove("bold")})
n9.addEventListener("click", () => {displayOutput.textContent = displayValue += "9";displayOutput.classList.remove("bold")})
n0.addEventListener("click", () => {displayOutput.textContent = displayValue += "0";displayOutput.classList.remove("bold")})


addButton.addEventListener("click", () => {
  operator = "add"
  if (operand1 === "") {
    operand1 = +displayValue
    displayValue = ""
  } else if (operand2 === "") {
    operand2 = +displayValue
    operate(operand1, operand2, operator)
    displayValue = ""
  } else {
    operand1 = operand1 + operand2
    operand2 = +displayValue
    operate(operand1, operand2, operator)
    displayValue = ""
  }
})

subtractButton.addEventListener("click", () => {
  operator = "subtract"
  if (operand1 === "") {
    operand1 = +displayValue
    displayValue = ""
  } else if (operand2 === "") {
    operand2 = +displayValue
    operate(operand1, operand2, operator)
    displayValue = ""
  } else {
    operand1 = operand1 - operand2
    operand2 = +displayValue
    operate(operand1, operand2, operator)
    displayValue = ""
  }
})

multiplyButton.addEventListener("click", () => {
  operator = "multiply"
  if (operand1 === "") {
    operand1 = +displayValue
    displayValue = ""
  } else if (operand2 === "") {
    operand2 = +displayValue
    operate(operand1, operand2, operator)
    displayValue = ""
  } else {
    operand1 = operand1 * operand2
    operand2 = +displayValue
    operate(operand1, operand2, operator)
    displayValue = ""
  }
})

divideButton.addEventListener("click", () => {
  operator = "divide"
  if (operand1 === "") {
    operand1 = +displayValue
    displayValue = ""
  } else if (operand2 === "") {
    operand2 = +displayValue
    operate(operand1, operand2, operator)
    displayValue = ""
  } else {
    operand1 = operand1 / operand2
    operand2 = +displayValue
    operate(operand1, operand2, operator)
    displayValue = ""
  }
})

equalsButton.addEventListener("click", () => {
// the reason for the first if statement is solely to remove the bold class from the output number if equals is pressed when no value is set to operand1 this code is needed to make
// the first output bold as in 6 = outputs a bold 6 when = is pressed again it removes the bold and sets a 0
// i have to run the opertation to keep the number zero and not an empty string
  if (operand1 === "") {
    operand1 = +displayValue
    operate(operand1, operand2, "add")
    if (operand1 === 0) {
      displayOutput.classList.remove("bold")
    }
    displayValue = ""
    operand1 = ""
    operand2 = ""
  } else if (operand2 === "") {
    operand2 = +displayValue
    operate(operand1, operand2, operator)
    displayValue = ""
    operand1 = ""
    operand2 = ""
  } else if (operand2 !== "") {
    switch (operator) {
      case "add":
        operand1 = operand1 + operand2
        break
      case "subtract":
        operand1 = operand1 - operand2
        break
      case "multiply":
        operand1 = operand1 * operand2
        break
      case "divide":
        operand1 = operand1 / operand2
    }
    operand2 = +displayValue
    operate(operand1, operand2, operator)
    displayValue = ""
    operand1 = ""
    operand2 = ""
  }
})
