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

document.addEventListener("DOMContentLoaded", function(){
    const number1Element = document.getElementById("number1")
    const number2Element = document.getElementById("number2")
    const multiplyButton = document.querySelector(".multiply")
    const divideButton = document.querySelector(".divide")
    const result = document.getElementById("result")

    function multiply() {
        const number1 = parseFloat(number1Element.value)
        const number2 = parseFloat(number2Element.value)

        const multipliedValue = number1 * number2
        return multipliedValue
    }

    function divide() {
        const number1 = parseFloat(number1Element.value)
        const number2 = parseFloat(number2Element.value)

        if (number2 ===   0) {
            alert("Cannot divide by zero!");
            return;
        }

        const dividedValue = number1 / number2;
        console.log(dividedValue)
        return dividedValue
    }

    multiplyButton.addEventListener("click", () => {
        const multipliedValue = multiply()

        result.textContent = `The result is: ${multipliedValue}`
    })

    divideButton.addEventListener("click", () => {
        const dividedValue = divide()

        result.textContent = `The result is: ${dividedValue}`
    })
})
