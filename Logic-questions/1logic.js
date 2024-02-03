// 1. Program to check for multiples of numbers

let userInput = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "))

function fizzOrBuzz(){
    for (let i = 1; i <= userInput; i++) {
         if(i % 3 === 0 && i % 5 === 0 ){
            console.log("FizzBuzz")
        }
        else if(i % 3 === 0){
            console.log("Fizz")
        }
        else if(i % 5 === 0){
            console.log("Buzz")
        }
        else {
            console.log(i)
        }
    }
}

fizzOrBuzz()

// 9. Guess the number

const questionForTheUser = document.getElementById("question")
const userInput = document.getElementById("user-input")
const button = document.getElementById("btn")
const output = document.getElementById("text")

button.addEventListener("click", function () {

    let userValue = userInput.value.trim()
    userValue = parseInt(userValue)

    let randomInteger = Math.floor(Math.random() * 100) + 1

    questionForTheUser.textContent = "Enter a number between 1-100"

    if (userValue === randomInteger) {
        output.textContent = `You entered ${userValue} and the random number is: ${randomInteger}. Good Work.`
    }
    else {
        output.textContent = `You entered ${userValue} and the random number is: ${randomInteger}. Not matched.`
    }
})