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

function multiply(num1, num2) {

}

function divide(num1, num2) {

}

function exponent(num1, num2) {

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

