// // 5. Area of a triangle with fixed values.

// const a = 5, b = 6, c = 7;

// function semiPerimeter() {
//     return (a + b + c) / 2
// }

// let s = semiPerimeter();

// function triangleArea() {
//     return Math.sqrt(s * (s - a) * (s - b) * (s - c))
// }
// console.log("Area of the triangle is: " + triangleArea().toFixed(5))

// //Area of a triangle with random sides 1-10

// let sideA = Math.floor(Math.random() * 10) + 1
// let sideB = Math.floor(Math.random() * 10) + 1
// let sideC = Math.floor(Math.random() * 10) + 1

// function isValidTriangle() {
//     return sideA + sideB > sideC && sideB + sideC > sideA &&
//         sideC + sideA > sideB
// }

// if (isValidTriangle()) {
//     function semiPerimeter() {
//         return (sideA + sideB + sideC) / 2
//     }
//     let s = semiPerimeter()

//     function triangleArea() {
//         return Math.sqrt(s * ((s - sideA) * (s - sideB) * (s - sideC)))
//     }
//     console.log(`The sides of the triangle are ${sideA}, ${sideB}, ${sideC}`)
//     console.log(`Area of the triangle is : ${triangleArea().toFixed(5)}`)
// } else {
//     console.log(`The sides: ${sideA}, ${sideB}, ${sideC} are invalid as per the triangle inequality rule. Hence this triangle is not formed.`)
// }

//7. Leap year or not 

// function getRandomYear() {
//     const startYear = 1900;
//     const currentYear = new Date().getFullYear()
//     let randomYear = Math.floor(Math.random() * (currentYear - startYear) + 1) + startYear
//     return randomYear
//   }

//   let year = getRandomYear()

// function leapYearOrNot() {
//     if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
//         console.log(`${year} is a leap year.`)
//     } else {
//         console.log(`${year} is not a leap year.`)
//     }
// }
// leapYearOrNot()

// 11. Multiplication and division

// document.addEventListener("DOMContentLoaded", function(){
//     const number1Element = document.getElementById("number1")
//     const number2Element = document.getElementById("number2")
//     const multiplyButton = document.querySelector(".multiply")
//     const divideButton = document.querySelector(".divide")
//     const result = document.getElementById("result")

//     function multiply() {
//         const number1 = parseFloat(number1Element.value)
//         const number2 = parseFloat(number2Element.value)

//         const multipliedValue = number1 * number2
//         return multipliedValue
//     }

//     function divide() {
//         const number1 = parseFloat(number1Element.value)
//         const number2 = parseFloat(number2Element.value)

//         if (number2 ===   0) {
//             alert("Cannot divide by zero!");
//             return;
//         }

//         const dividedValue = number1 / number2;
//         console.log(dividedValue)
//         return dividedValue
//     }

//     multiplyButton.addEventListener("click", () => {
//         const multipliedValue = multiply()

//         result.textContent = `The result is: ${multipliedValue}`
//     })

//     divideButton.addEventListener("click", () => {
//         const dividedValue = divide()

//         result.textContent = `The result is: ${dividedValue}`
//     })
// })

// 16. To get the difference between a given number and 13, if the number is broader than 13 return double the absolute difference.

// function calculator(num) {
//     let diff = Math.abs(num - 13)

//     if(diff > 13){
//        return newNumber = diff ** 2
//     }
//     else {
//         return diff
//     }
// }

// console.log(calculator(550))
// console.log(calculator(50))
// console.log(calculator(5))

// 17. Compute the sum of the two given integers. If the two values are the same, then return triple their sum.

// const firstInput = document.getElementById("17first-num")
// const secondInput = document.getElementById("17second-num")
// const btnOne = document.getElementById("17first-btn")
// const btnTwo = document.getElementById("17second-btn")
// const result = document.getElementById("17-question-result")

// function sumCondition(x, y) {
//     if(x === y){
//         return (x + y) * 3
//     }
//     else{
//         return x + y
//     }
// }

// btnOne.addEventListener("click", () => {
//     const x = parseFloat(firstInput.value)
//     result.textContent = `The result is: ${isNaN(x) ? "Invalid Input" : sumCondition(x, x) }`
// })

// btnTwo.addEventListener("click", () => {
//     const x = parseFloat(firstInput.value)
//     const y = parseFloat(secondInput.value)
//     result.textContent = `The result is: ${isNaN(x) || isNaN(y) ? "Invalid Input" : sumCondition(x, y)}`
// })

// 18. Compute the absolute difference between a specified number and 19. Returns triple the absolute difference if the specified number is greater than 19.  

// const inputValue = document.getElementById("q18-input")
// const btn = document.getElementById("q18-btn")
// const userInput = document.getElementById("q18-num-entered")
// const result = document.getElementById("q18-result")

// function Mathproblem(x) {
//     ans = Math.abs( x - 19)
//     return x > 19 ? ans * 3 : ans ;
// }

// btn.addEventListener("click", () => {

// const x = parseFloat(inputValue.value)
// userInput.textContent = `The number entered is: ${ x }`
// result.textContent = `The result is: ${isNaN(x) ? "Invalid Input" : Mathproblem(x)}`
// })

// 19. Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50. 

// const userInputA = document.getElementById('q-19x')
// const userInputB = document.getElementById("q-19y")
// const btn = document.getElementById("q-19btn")
// const xValue = document.getElementById("q-19input1display")
// const yValue = document.getElementById("q-19input2display")
// const result = document.getElementById("q19-result")

// btn.addEventListener("click", () => {

// const x = parseFloat(userInputA.value)
// const y = parseFloat(userInputB.value)

//  xValue.textContent = `X = ${x}`
// yValue.textContent = `Y = ${y}`

// if(x === 50 || y === 50) {
//     result.textContent = `It is true because ${x === 50 ? 'x = 50' : 'y = 50'}`
// }
// else if(x + y === 50) {
//     result.textContent = `It is true because ${x} + ${y} = ${x+y}`
// }
// else {
//    result.textContent =  ` ${!isNaN(x + y) ? `It is not true because ${x} + ${y} is not equal to 50` : 'Enter valid numbers.'}`
// }
// })


// 20. Write a JavaScript program to check whether a given integer is within 20 of 100 or 400. 

// const userInput = document.getElementById("q20-input")
// const btn = document.getElementById("q20-btn")
// const userInputValue = document.getElementById("userinputvalue")
// const result = document.getElementById("rst")

// btn.addEventListener("click", () => {

//     const x = parseFloat(userInput.value)
//     const first = Math.abs(x - 200)
//     const second = Math.abs(x - 400)

//     if (first <= 20 || second <= 20) {
//         userInputValue.textContent = `User Input = ${!isNaN(x) ? x : "Enter a valid number."}`
//         result.textContent = `It is true.`
//     }
//     else {

//             userInputValue.textContent = `User Input = ${!isNaN(x) ? x : "Enter a valid number."}`
//             result.textContent = `It is not true.`

//     }
// })

// 21. Write a JavaScript program to check two given integers whether one is positive and another one is negative.

const userInputA = document.getElementById("q-21-input1")
const userInputB = document.getElementById("q-21-input2")
const btn = document.getElementById("q-21-btn")
const x = document.getElementById("q-21-valuea")
const y = document.getElementById("q-21-valueb")
const result = document.getElementById("q-21-result")

btn.addEventListener("click", () => {

    const inputA = parseFloat(userInputA.value)
    const inputB = parseFloat(userInputB.value)

    if (!isNaN(inputA) && !isNaN(inputB)) {
        x.textContent = `X = ${inputA}`
        y.textContent = `Y = ${inputB}`

        if ((inputA < 0 && inputB > 0) || (inputA > 0 && inputB < 0)) {
            result.textContent = `It is true.`
        }
        else {
            result.textContent = `It is false.`
        }

    } else {
        result.textContent = `Enter a valid number.`
    }

    
})