//Area of a triangle with fixed values.

const a = 5, b = 6, c = 7;

function semiPerimeter() {
    return (a + b + c) / 2
}

let s = semiPerimeter();

function triangleArea() {
    return Math.sqrt(s * (s - a) * (s - b) * (s - c))
}
console.log("Area of the triangle is: " + triangleArea().toFixed(5))

//Area of a triangle with random sides

let sideA = Math.floor(Math.random() * 10) + 1
let sideB = Math.floor(Math.random() * 10) + 1
let sideC = Math.floor(Math.random() * 10) + 1

function isValidTriangle() {
    return sideA + sideB > sideC && sideB + sideC > sideA &&
        sideC + sideA > sideB
}

if (isValidTriangle()) {
    function semiPerimeter() {
        return (sideA + sideB + sideC) / 2
    }
    let s = semiPerimeter()

    function triangleArea() {
        return Math.sqrt(s *( (s - sideA) * (s - sideB) * (s - sideC)))
    }
    console.log(`The sides of the triangle are ${sideA}, ${sideB}, ${sideC}`)
    console.log(`Area of the triangle is : ${triangleArea().toFixed(5)}`)
} else {
    console.log(`The sides: ${sideA}, ${sideB}, ${sideC} are invalid as per the triangle inequality rule. Hence this triangle is not formed.`)
}

//Leap year or not 

document.addEventListener("DOMContentLoaded", function () {

    let yearValue = 2000;
    let yearText = document.getElementById("year")

    function leapYearOrNot() {
        if (yearValue % 4 === 0 && (yearValue % 100 !== 0 || yearValue % 400 === 0)) {
            yearText.textContent = `${yearValue} is a leap year.`
        } else {
            yearText.textContent = `${yearValue} is not a leap year.`
        }
    }
    leapYearOrNot()
})