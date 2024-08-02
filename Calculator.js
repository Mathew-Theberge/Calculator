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

}

function subtract(num1, num2) {

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

function operate(num1, num2, operator) {

}

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



