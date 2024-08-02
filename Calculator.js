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

function add() {
  if (operand1 === "") {
    operand1 = +displayValue
    displayValue = ""
  } else if (operand2 === "") {
    operand2 = +displayValue
    displayValue = ""
    result = operand1 + operand2
    displayOutput.textContent = result
  } else {
    operand2 = +displayValue
    displayValue = ""
    result = result + operand2
    displayOutput.textContent = result
  }
}

function subtract() {
  if (operand1 === "") {
    operand1 = +displayValue
    displayValue = ""
  } else if (operand2 === "") {
    operand2 = +displayValue
    displayValue = ""
    result = operand1 - operand2
    displayOutput.textContent = result
  } else {
    operand2 = +displayValue
    displayValue = ""
    result = result - operand2
    displayOutput.textContent = result
  }
}

function multiply() {
  if (operand1 === "") {
    operand1 = +displayValue
    displayValue = ""
  } else if (operand2 === "") {
    operand2 = +displayValue
    displayValue = ""
    result = operand1 * operand2
    displayOutput.textContent = result
  } else {
    operand2 = +displayValue
    displayValue = ""
    result = result * operand2
    displayOutput.textContent = result
  }
}

function divide() {
  if (operand1 === "") {
    operand1 = +displayValue
    displayValue = ""
  } else if (operand2 === "") {
    operand2 = +displayValue
    displayValue = ""
    result = operand1 / operand2
    displayOutput.textContent = result
  } else {
    operand2 = +displayValue
    displayValue = ""
    result = result / operand2
    displayOutput.textContent = result
  }
}

function exponent() {
  if (operand1 === "") {
    operand1 = +displayValue
    displayValue = ""
  } else if (operand2 === "") {
    operand2 = +displayValue
    displayValue = ""
    result = operand1 ** operand2
    displayOutput.textContent = result
  } else {
    operand2 = +displayValue
    displayValue = ""
    result = result ** operand2
    displayOutput.textContent = result
  }
}

let displayValue = ""
let operand1 = ""
let operand2 = ""
let operator = ""
let result = ""


function updateDisplayOutput (num) {
  displayValue += num
  displayOutput.textContent = displayValue
  displayOutput.classList.remove("bold")
}

n1.addEventListener("click",updateDisplayOutput.bind(null, "1"))
n2.addEventListener("click",updateDisplayOutput.bind(null, "2"))
n3.addEventListener("click",updateDisplayOutput.bind(null, "3"))
n4.addEventListener("click",updateDisplayOutput.bind(null, "4"))
n5.addEventListener("click",updateDisplayOutput.bind(null, "5"))
n6.addEventListener("click",updateDisplayOutput.bind(null, "6"))
n7.addEventListener("click",updateDisplayOutput.bind(null, "7"))
n8.addEventListener("click",updateDisplayOutput.bind(null, "8"))
n9.addEventListener("click",updateDisplayOutput.bind(null, "9"))
n0.addEventListener("click",updateDisplayOutput.bind(null, "0"))

addButton.addEventListener("click", () => {
  switch (operator) {
    case "subtract":
      subtract()
      operator = "add"
      break
    case "multiply":
      multiply()
      operator = "add"
      break
    case "divide":
      divide()
      operator = "add"
      break
    case "exponent":
      exponent()
      operator = "add"
      break
    default:
      operator = "add"
      add()
  }
})

subtractButton.addEventListener("click", () => {
  switch (operator) {
    case "add":
      add()
      operator = "subtract"
      break
    case "multiply":
      multiply()
      operator = "subtract"
      break
    case "divide":
      divide()
      operator = "subtract"
      break
    case "exponent":
      exponent()
      operator = "subtract"
      break
    default:
      operator = "subtract"
      subtract()
  }
})

multiplyButton.addEventListener("click", () => {
  switch (operator) {
    case "add":
      add()
      operator = "multiply"
      break
    case "subtract":
      subtract()
      operator = "multiply"
      break
    case "divide":
      divide()
      operator = "multiply"
      break
    case "exponent":
      exponent()
      operator = "multiply"
      break
    default:
      operator = "multiply"
      multiply()
  }
})

divideButton.addEventListener("click", () => {
  switch (operator) {
    case "add":
      add()
      operator = "divide"
      break
    case "multiply":
      multiply()
      operator = "divide"
      break
    case "subtract":
      subtract()
      operator = "divide"
      break
    case "exponent":
      exponent()
      operator = "divide"
      break
    default:
      operator = "divide"
      divide()
  }
})

exponentButton.addEventListener("click", () => {
  switch (operator) {
    case "add":
      add()
      operator = "exponent"
      break
    case "multiply":
      multiply()
      operator = "exponent"
      break
    case "divide":
      divide()
      operator = "exponent"
      break
    case "subtract":
      subtract()
      operator = "exponent"
      break
    default:
      operator = "exponent"
      exponent()
  }
})
