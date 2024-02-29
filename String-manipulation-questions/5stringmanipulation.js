// //6 .Program for right rotation of a string

// const words = ["NOTEBOOK", "TEXTBOOK", "TEACHER", "SCHOOL"];
// let word = words[Math.floor(Math.random() * words.length)]
// let rotatingAmount = Math.floor(Math.random() * 10) + 1

// const rotateString = (word, rotatingAmount) => {
//     rotatingAmount %= word.length
//     return word.slice(-rotatingAmount) + word.slice(0, -rotatingAmount)
// }

// let rotatedString = rotateString(word, rotatingAmount)

// console.log(`The string is : ${word}. The rotated string after ${rotatingAmount} position right rotation is: ${rotatedString}`)


// // String animation on webpage using slice and setInterval method

// const animation = document.getElementById("rotatingString")
// const userInput = document.getElementById("string")
// const btn = document.getElementById("btn")


// const changeString = (word) => {
//     return word.slice(-1) + word.slice(0, -1)
// }

// btn.addEventListener("click", () => {
//     const userValue = userInput.value.trim()
//     if(userValue){
//         animation.textContent = userValue
//     }
//     else{
//         alert("Please enter a string value before clicking on enter")
//     }
// })

// setInterval(() => {
//     animation.textContent = changeString(animation.textContent)
// }, 600)

// 13. To get the filename extension

// const file = "groot.js"

//  let filetype = file.split(".").pop()
// console.log(filetype)

// //14. Create a variable using user-defined name.

// const red = "number"
// const blue = 55

// this[red] = blue

// console.log(this[red])

//15. Palindrome or not 

// const strInput = document.getElementById("palindrome-checker")
// const btn = document.getElementById("palindrome-button")
// const result = document.getElementById("result-display")
// const display = document.getElementById("palindrome-string")

// btn.addEventListener("click", () => {

//     const userInput = strInput.value.toLowerCase();  

//    const reversedString = userInput.split('').reverse().join('')

//    display.textContent = `The string is: ${userInput}`;

//     if(userInput === reversedString) {
//         result.textContent = `${userInput} is a palindrome.`
//     }
//     else{
//         result.textContent = `${userInput} is not a palindrome.`
//     }
// })

// 22. Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string. 

// const userInput = document.getElementById("q-22-input")
// const btn = document.getElementById("q-22-btn")
// const inputValue = document.getElementById("q-22-user-input")
// const result = document.getElementById("q-22-result")

// btn.addEventListener("click", () => {
//     try {
//         const char = (userInput.value).trim().toLowerCase()

//         if (typeof char !== 'string' || !isNaN(parseFloat(char))) {
//             throw new Error("We only take string values.")
//         }
//         if (char === '') {
//             throw new Error("Please enter a value.")
//         }
//         inputValue.textContent = `Input: ${char}`
//         if (char.startsWith("py")) {
//             return result.textContent = `Result: ${char}`
//         } else {
//             return result.textContent = `Result: Py${char}`
//         }
//     }
//     catch (error) {
//         alert(error.message)
//     }
// })

// 23. Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.

const inputString = document.getElementById("q-23-userinput-string")
const stringBtn = document.getElementById("q-23-string-btn")
const stringValue = document.getElementById("q-23-string-display")
const inputPosition = document.getElementById("q-23-userinput-position")
const positionBtn = document.getElementById("q-23-position-btn")
const posiitonValue = document.getElementById("q-23-position-display")
const charAtPosition = document.getElementById("q-23-char-display")
const result = document.getElementById("q-23-result")

stringBtn.addEventListener("click", () => {
    let input = inputString.value.trim().toLowerCase()

    try {
        if (input === '') {
            throw new Error("Please enter a string.")
        }
        if (!isNaN(input)) {
            throw new Error("We only take string values.")
        }
        stringValue.textContent = `The entered string is: ${input}`
    }
    catch (error) {
        alert(error.message)
    }
})

positionBtn.addEventListener("click", () => {
    let positionForUpdate = parseFloat(inputPosition.value)
    let input = inputString.value.trim().toLowerCase()

    try {
        if (isNaN(positionForUpdate)) {
            throw new Error("Please enter a number here.")
        }
        if (positionForUpdate < 1 || positionForUpdate > input.length) {
            throw new Error("Position is out of range.")
        }
        posiitonValue.textContent = `Position given: ${positionForUpdate}`
        const removedChar = input.charAt(positionForUpdate - 1)
        charAtPosition.textContent = `Character at given position is: ${removedChar.toUpperCase()}`
        const updatedString = input.slice(0, positionForUpdate - 1) + input.slice(positionForUpdate)
        updatedString
        result.textContent = `Updated string is: ${updatedString.toUpperCase()}`
    }
    catch (error) {
        alert(error.message)
    }
})

