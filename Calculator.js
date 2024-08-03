const clearButton = document.querySelector(".clear-button")
const backspaceButton = document.querySelector(".backspace-button")
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
    result = +toOptionalFixed(result, 7)
    displayOutput.textContent = result
    isNumberToBig(result.toString())
  } else {
    operand2 = +displayValue
    displayValue = ""
    result = result + operand2
    result = +toOptionalFixed(result, 7)
    displayOutput.textContent = result
    isNumberToBig(result.toString())
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
    result = +toOptionalFixed(result, 7)
    displayOutput.textContent = result
    isNumberToBig(result.toString())
  } else {
    operand2 = +displayValue
    displayValue = ""
    result = result - operand2
    result = +toOptionalFixed(result, 7)
    displayOutput.textContent = result
    isNumberToBig(result.toString())
  }
}

function multiply() {
  if (!(displayValue === "")) { // this is needed so the user doesent break the function by setting operand2 to 0 by hitting the multiply button more than once -->
    if (operand1 === "") {      //  --> if operand2 is 0 result becomes 0 making every future calculation 0 because result (0) * operand 2 will always be 0
      operand1 = +displayValue
      displayValue = ""
  } else if (operand2 === "") {
    operand2 = +displayValue
    displayValue = ""
    if (operand2 === 0 || operand1 === 0) { // if user tries to multiply by 0 we reset operands so we dont have the same problem of every future output being 0
      reset()
    } else {
      result = operand1 * operand2
      result = +toOptionalFixed(result, 7)
      displayOutput.textContent = result
      isNumberToBig(result.toString())
    }
  } else {
      operand2 = +displayValue
      displayValue = ""
      if (operand2 === 0) {
        reset()
      } else {
        result = result * operand2
        result = +toOptionalFixed(result, 7)
        displayOutput.textContent = result
        isNumberToBig(result.toString())
      }
  }}
}

function divide() {
  if (!(displayValue === "")) {
    if (operand1 === "") {
      operand1 = +displayValue
      displayValue = ""
    } else if (operand2 === "") {
      operand2 = +displayValue
      displayValue = ""
      if (operand2 === 0 || operand1 === 0) { 
        operand1 = ""
        operand2 = ""
        displayOutput.textContent = "just why?"
      } else {
        result = operand1 / operand2
        result = +toOptionalFixed(result, 7)
        displayOutput.textContent = result
        isNumberToBig(result.toString())
      }
    } else {
      operand2 = +displayValue
      displayValue = ""
      if (operand2 === 0) {
        operand1 = ""
        operand2 = ""
        displayOutput.textContent = "just why?"
      } else {
        result = result / operand2
        result = +toOptionalFixed(result, 7)
        displayOutput.textContent = result
        isNumberToBig(result.toString())
      }
  }}
}

function exponent() {
  if (!(displayValue === "")) {
    if (operand1 === "") {
      operand1 = +displayValue
      displayValue = ""
    } else if (operand2 === "") {
      operand2 = +displayValue
      displayValue = ""
      if (operand2 === 0 || operand1 === 0) { 
        reset()
      } else {
        result = operand1 ** operand2
        result = +toOptionalFixed(result, 7)
        displayOutput.textContent = result
        isNumberToBig(result.toString())
      }
    } else {
      operand2 = +displayValue
      displayValue = ""
      if (operand2 === 0) {
        reset()
      } else {
        result = result ** operand2
        result = +toOptionalFixed(result, 7)
        displayOutput.textContent = result
        isNumberToBig(result.toString())
      }
  }}
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
  isNumberToBig(displayValue)
}

function reset() {
  operand1 = ""
  operand2 = ""
  displayValue = ""
  operator = ""
  displayOutput.textContent = 0
}

function isNumberToBig (num) {
  if (num.length > 10) {
    reset()
    displayOutput.textContent = "ERROR!"
  }
}

const toOptionalFixed = (num, digits) => 
  `${Number.parseFloat(num.toFixed(digits))}`


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

dotButton.addEventListener("click", () => {
  if (!(displayValue.includes("."))) {
    if (displayValue === "") {
      displayValue = "0."
      displayOutput.textContent = displayValue
    } else {
      displayValue += "."
      displayOutput.textContent = displayValue
    }
  }
})

equalsButton.addEventListener("click", () => {
  switch (operator) {
    case "add":
      if (displayValue === "") {reset()} else {add()}
      break
    case "multiply":
      if (displayValue === "") {reset()} else {multiply()}
      break
    case "divide":
      if (displayValue === "") {reset()} else {divide()}
      break
    case "subtract":
      if (displayValue === "") {reset()} else {subtract()}
      break
    case "exponent":
      if (displayValue === "") {reset()} else {exponent()}
  }
})


clearButton.addEventListener("click", reset)

backspaceButton.addEventListener("click", () => {
  if (displayValue.length > 1) {
    displayValue = displayValue.slice(0, -1)
    displayOutput.textContent = displayValue
  } else {
    if (!(displayValue === "")) {
      displayValue = ""
      displayOutput.textContent = 0
    }
  }
})