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

//     try {
//         const x = parseFloat(userInput.value)
//         const first = Math.abs(x - 200)
//         const second = Math.abs(x - 400)

//         if (isNaN(first) || isNaN(second)) {
//             throw new Error("Please enter a value.")
//         }
//         if (!isNaN(first) && !isNaN(first)) {
//             if (first <= 20 || second <= 20) {
//                 userInputValue.textContent = `User Input = ${x}`
//                 result.textContent = `It is true.`
//             }
//             else {
//                 userInputValue.textContent = `User Input = ${x}`
//                 result.textContent = `It is not true.`
//             }
//         }
//     }
//     catch (error) {
//         alert(error.message)
//     }
// })

// 21. Write a JavaScript program to check two given integers whether one is positive and another one is
// negative.

// const userInputA = document.getElementById("q-21-input1")
// const userInputB = document.getElementById("q-21-input2")
// const btn = document.getElementById("q-21-btn")
// const x = document.getElementById("q-21-valuea")
// const y = document.getElementById("q-21-valueb")
// const result = document.getElementById("q-21-result")

// btn.addEventListener("click", () => {
//     try {
//         const inputA = parseFloat(userInputA.value)
//         const inputB = parseFloat(userInputB.value)

//         if (!isNaN(inputA) && !isNaN(inputB)) {
//             x.textContent = `X = ${inputA}`
//             y.textContent = `Y = ${inputB}`
//         }
//         if (isNaN(inputA) || isNaN(inputB)) {
//             throw new Error("Please enter a value.")
//         }
//         if ((inputA < 0 && inputB > 0) || (inputA > 0 && inputB < 0)) {
//             result.textContent = `It is true.`
//         }
//         else {
//             result.textContent = `It is false.`
//         }
//     }
//     catch (error) {
//         alert(error.message)
//     }
// })

// 26. Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7. 

// const userInput = document.getElementById("q-26-input")
// const btn = document.getElementById("q-26-btn")
// const num = document.getElementById("q-26-display")
// const result = document.getElementById("q-26-result")

// btn.addEventListener("click", () => {

//     try {
//         const input = parseFloat(userInput.value)
//         if (isNaN(input)) {
//             throw new Error("Please enter a number.")
//         }
//         if (input < 0) {
//             throw new Error("Only positive integer values allowed.")
//         }
//         if (input >= 0) {
//             if (input % 3 === 0 || input % 7 === 0) {
//                 num.textContent = `The input value is: ${input}`
//                 result.textContent = `True. ${input % 3 === 0 ? input+' is a multiple of 3.' : input+' is a multiple of 7.'}`
//             }else{
//                 num.textContent = ``
//                 result.textContent = `${input} is not a multiple of 3 or 7.`
//             }
//         }
//     }
//     catch (error) {
//         alert(error.message)
//     }
// })

// 29. Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them falls within the range.  

// const userInputA = document.getElementById("q-29-input-1")
// const userInputB = document.getElementById("q-29-input-2")
// const btn = document.getElementById("q-29-btn")
// const inputADisplay = document.getElementById("q-29-userinput1")
// const inputBDisplay = document.getElementById("q-29-userinput2")
// const result = document.getElementById("q-29-result")

// btn.addEventListener("click", () => {
//     const inputA = parseFloat(userInputA.value)
//     const inputB = parseFloat(userInputB.value)
//     try {
//         if (isNaN(inputA) || isNaN(inputB)) {
//             throw new Error("Please enter the values to check the condition.")
//         }
//         inputADisplay.textContent = `First Input value is: ${inputA}`
//         inputBDisplay.textContent = `Second Input value is: ${inputB}`
//         const min = 50
//         const max = 99
//         if ((inputA >= min && inputA <= max) && (inputB >= min && inputB <= max)) {
//             result.textContent = `Yes, both ${inputA} and ${inputB} fall between 50-99.`
//         } else if ((inputA >= min && inputA <= max) || (inputB >= min && inputB <= max)) {
//             result.textContent = `Yes, ${inputA >= min && inputA <= max ? inputA : inputB} falls between 50-99.`
//         } else {
//             result.textContent = `No, neither ${inputA} nor ${inputB} fall between 50-99.`
//         }
//     } catch (e) {
//         alert(e.message)
//     }
// })

// 30. Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the specified range.

// const inputs = document.querySelectorAll(".q-30-input-class")
// const btn = document.getElementById("q-30-btn")
// const displays = document.querySelectorAll(".q-30-display-class")
// const result = document.getElementById("q-30-result")

// btn.addEventListener("click", () => {

//     try {
//         const values = Array.from(inputs).map(input => parseFloat(input.value))

//         if (values.some(isNaN)) {
//             throw new Error("Please enter all the values.")
//         }
//         values.forEach((value, index) => {
//             const display = displays[index]
//             if (display) {
//                 display.textContent = `Input ${index + 1} is: ${value}`
//             } else {
//                 throw new Error(`Display element for index ${index + 1} is undefined.`)
//             }
//         })
//         const passes = values.map(value => value >= 50 && value <= 99)

//         if (passes.some(Boolean)) {
//             const index = passes.findIndex(Boolean)
//             result.textContent = `True, ${values[index]} lies between 50-99.`
//         } else {
//             result.textContent = `False, none of these values fall between 50-99.`
//         }
//         if (passes.every(Boolean)) {
//             result.textContent = `True, all the values ${values.join(", ")} lie between 50-99.`
//         }
//     } catch (e) {
//         alert(e.message)
//     }
// })

// 32. Write a JavaScript program to find the largest of three given integers. 

// const inputs = document.querySelectorAll(".q-32-input")
// const btn = document.getElementById("q-32-btn")
// const displays = document.querySelectorAll(".q-32-display")
// const result = document.getElementById("q-32-result")

// btn.addEventListener("click", () => {
//     try {
//         const userInputs = Array.from(inputs).map((input) => parseFloat(input.value))

//         if (userInputs.some(isNaN)) {
//             throw new Error("Please enter all the values.")
//         }
//         userInputs.forEach((userInput, index) => {
//             const display = displays[index]
//             if (display) {
//                 display.textContent = `Input ${index + 1} is: ${userInput}`
//             } else {
//                 throw new Error(`Display element for index ${index + 1} is undefined.`)
//             }
//         })
//         let largestNumber = userInputs[0]
//         for (let i = 0; i < userInputs.length; i++) {
//             if (userInputs[i] > largestNumber) {
//                largestNumber = numbers[i]
//             }
//         }
//         result.textContent = `The largest number is: ${largestNumber}`
//     } catch (e) {
//         alert(e.message)
//     }
// })

// 33. Write a JavaScript program to find the closest value to 100 from two numerical values.  

// const inputs = document.querySelectorAll(".q-33-input")
// const displays = document.querySelectorAll(".q-33-display")
// const btn = document.getElementById("q-33-btn")
// const result = document.getElementById("q-33-result")

// function findClosestTo100(numbers) {
//     return numbers.reduce((closest, current) => (
//         Math.abs(current - 100) < Math.abs(closest - 100) ? current : closest
//     ))
// }

// btn.addEventListener("click", () => {
//     try {
//         const userInputs = Array.from(inputs).map((input) => parseFloat(input.value))

//         if (userInputs.some(isNaN)) {
//             throw new Error("Please enter all the values.")
//         }
//         userInputs.forEach((userInput, index) => {
//             const display = displays[index]
//             if (display) {
//                 display.textContent = `Input ${index + 1} is: ${userInput}`
//             } else {
//                 throw new Error(`Display element for index ${index + 1} is undefined.`)
//             }
//         })
//         if (userInputs.length === 2) {
//             const closestTo100 = findClosestTo100(userInputs)
//             result.textContent = `The value closest to 100 is: ${closestTo100}`
//         } else {
//             throw new Error("Please enter exactly two numerical values.")
//         }
//     } catch (e) {
//         alert(e.message)
//     }
// })

// 34.  Write a JavaScript program to check whether two numbers are in the range 40..60 or 70..100 inclusive. 

// const inputs = document.querySelectorAll(".q-34-input")
// const displays = document.querySelectorAll(".q-34-display")
// const btn = document.getElementById("q-34-btn")
// const result = document.getElementById("q-34-result")

// btn.addEventListener("click", () => {
//     try {
//         const numbers = Array.from(inputs).map((input) => parseFloat(input.value))
//         if (numbers.some(isNaN)) {
//             throw new Error("Please enter all the values.")
//         }
//         numbers.forEach((number, index) => {
//             const display = displays[index]
//             if (display) {
//                 display.textContent = `Input ${index + 1} is: ${number}`
//             } else {
//                 throw new Error(`Display element for index ${index + 1} is undefined.`)
//             }
//         })
//         const condition1 = numbers.some(number => number >= 40 && number <= 60)
//         const condition2 = numbers.some(number => number >= 70 && number <= 100)
//         if (condition1) {
//             result.textContent = `It is true, at least one number lies between 40-60.`
//         } else if (condition2) {
//             result.textContent = `It is true, at least one number lies between 70-100.`
//         }
//         else {
//             result.textContent = `No, none of the numbers lie between either of the ranges.`
//         }
//     } catch (e) {
//         alert(e.message)
//     }
// })

// 35. Write a JavaScript program to find the largest number from the two given positive integers. The two numbers are in the range 40..60 inclusive.  

// const inputs = document.querySelectorAll(".q-35-input")
// const displays = document.querySelectorAll(".q-35-display")
// const btn = document.getElementById("q-35-btn")
// const result = document.getElementById("q-35-result")

// btn.addEventListener("click", () => {
//     try {
//         const inputValues = Array.from(inputs).map((input) => parseFloat(input.value))
//         if (inputValues.some(isNaN)) {
//             throw new Error("Please enter all the values.")
//         }
//         inputValues.forEach((inputValue, index) => {
//             const display = displays[index]
//             if (display) {
//                 display.textContent = `Input ${index + 1} is: ${inputValue}`
//             } else {
//                 throw new Error(`Display element for index ${index + 1} is undefined.`)
//             }
//         })
//         const validRange = inputValues.every((inputValue) => inputValue >= 40 && inputValue <= 60)
//         if (validRange) {
//             const largestNumber = Math.max(...inputValues)
//             result.textContent = `The largest number is: ${largestNumber}`
//         } else {
//             result.textContent = `Please enter numbers in the range of 40-60 inclusive.`
//         }
//     } catch (e) {
//         alert(e.message)
//     }
// })

// 37. Write a JavaScript program that checks whether the last digit of three positive integers is the same. 

// document.addEventListener("DOMContentLoaded", function () {
//     const inputs = document.querySelectorAll(".q-37-input")
//     const btn = document.getElementById("q-37-btn")
//     const displayedNumbers = document.querySelectorAll(".q-37-display")
//     const result = document.getElementById("q-37-result")

//     function handleButtonClick() {
//         try {
//             const numbersToCheck = Array.from(inputs).map((number) => parseFloat(number.value))
//             if (numbersToCheck.some(isNaN)) {
//                 throw new Error("Please enter all the values to check.")
//             }
//             const positiveNumbers = numbersToCheck.filter(number => number > 0)
//             if (positiveNumbers.length !== numbersToCheck.length) {
//                 throw new Error("Please enter positive values only.")
//             }
//             displayedNumbers.forEach((displayedNumber, index) => {
//                 const value = inputs[index].value
//                 displayedNumber.textContent = `The ${index + 1} input is: ${value}`
//             })
//             const lastDigits = positiveNumbers.map((number) => number % 10)
//             const firstNumber = lastDigits[0]
//             const areLastDigitsSame = lastDigits.every(digit => digit === firstNumber)
//             if (areLastDigitsSame) {
//                 result.textContent = `Yes, the last digit of the inputs are the same.`
//             } else {
//                 result.textContent = `No, the last digit of the inputs are not the same.`
//             }
//         } catch (e) {
//             alert(e.message)
//         }
//     }
//     btn.addEventListener("click", handleButtonClick)
//     document.addEventListener("keydown", (e) => {
//         if (e.key === 'Enter') {
//             handleButtonClick()
//         }
//     })
// })

// 39. Write a JavaScript program to compute the sum of the two given integers. If the sum is in the range 50..80 return 65 otherwise return 80.

// const inputs = document.querySelectorAll(".q-39-input")
// const btn = document.getElementById("q-39-btn")
// const displays = document.querySelectorAll(".q-39-display")
// const sumDisplay = document.getElementById("q-39-sum")
// const result = document.getElementById("q-39-result")

// btn.addEventListener("click", () => {
//     try {
//         const numbers = Array.from(inputs).map((number) => parseFloat(number.value))
//         if (numbers.some(isNaN)) {
//             throw new Error("Please enter all the values.")
//         }
//         displays.forEach((display, index) => {
//             const content = inputs[index].value
//             if(display){
//                 display.textContent = `The ${index + 1} input is: ${content}`
//             }
//         })
//         const sumOfTheInputs = numbers.reduce((accumulator, currentValue) => {
//             return accumulator + currentValue
//         }, 0)
//         sumDisplay.textContent = `The sum of the inputs : ${sumOfTheInputs}.`
//         if(sumOfTheInputs >= 50 && sumOfTheInputs <= 80){
//             result.textContent = `The result for the sum being in the range of 50-80 is: 65.`
//         }else{
//             result.textContent = `The result for the sum not being in the range of 50-80 is: 80.`
//         }
//     } catch (e) {
//         alert(e.message)
//     }
// })

// 40. Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.  

// const inputs = document.querySelectorAll(".q-40-input")
// const btn = document.getElementById("q-40-btn")
// const displays = document.querySelectorAll(".q-40-display")
// const equalDisplay = document.getElementById("q-40-equal")
// const diffDisplay = document.getElementById("q-40-diff")
// const sumDisplay = document.getElementById("q-40-sum")

// btn.addEventListener("click", () => {
//     try {
//         const enteredValues = Array.from(inputs).map((values) => parseFloat(values.value))
//         if (enteredValues.some(isNaN)) {
//             throw new Error("Please enter all the values.")
//         }

//         // Iterator to display the inputs values on to the browser screen 
//         displays.forEach((element, index) => {
//             const display = inputs[index].value
//             element.textContent = `The ${index + 1} input is: ${display}`
//         })

//         // Sum displayer
//         const sum = enteredValues.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
//         sumDisplay.textContent = `The sum of the numbers is: ${sum}`

//         // equality checker
//         const equalChecker = enteredValues.every(value => value === enteredValues[0])
//         equalDisplay.textContent = `All values are ${equalChecker ? 'equal.' : 'not equal.'}`

//         // Diffrence between numbers
//         const max = Math.max(...enteredValues)
//         const min = Math.min(...enteredValues)
//         const diff = max - min
//         diffDisplay.textContent = `The difference between maximum and minimum values is: ${diff}`

//     } catch (e) {
//         alert(e.message)
//     }
// })

// 41. Write a JavaScript program to check a set of three numbers; if the three numbers are the same return 30; otherwise return 20; and if two numbers are the same return 40. 

const userInputs = document.querySelectorAll(".q-41-input")
const btn = document.getElementById("q-41-btn")
const inputs = document.querySelectorAll(".q-41-display")
const rslt = document.getElementById("q-41-result")

btn.addEventListener("click", () => {
    try {
        const numbers = Array.from(userInputs).map((inputs) => parseFloat(inputs.value))
        if (numbers.some(isNaN)) {
            throw new Error("Please enter all the values.")
        }
        inputs.forEach((number, index) => {
            const display = userInputs[index].value
            number.textContent = `The ${index + 1} input is: ${display}`
        })

        numbers.sort((a, b) => a - b)

        let result = 20

        if (numbers[0] === numbers[1] && numbers[1] === numbers[2]) {
            result = 30
        }
        else if (numbers[0] === numbers[1] || numbers[1] === numbers[2]) {
            result = 40
        }
        rslt.textContent = `The result is: ${result}.`
    } catch (error) {
        alert(error.message)
    }
})