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

// const inputString = document.getElementById("q-23-userinput-string")
// const stringBtn = document.getElementById("q-23-string-btn")
// const stringValue = document.getElementById("q-23-string-display")
// const inputPosition = document.getElementById("q-23-userinput-position")
// const positionBtn = document.getElementById("q-23-position-btn")
// const posiitonValue = document.getElementById("q-23-position-display")
// const charAtPosition = document.getElementById("q-23-char-display")
// const result = document.getElementById("q-23-result")

// stringBtn.addEventListener("click", () => {
//     let input = inputString.value.trim().toLowerCase()
//     try {
//         if (input === '') {
//             throw new Error("Please enter a string.")
//         }
//         if (!isNaN(input)) {
//             throw new Error("We only take string values.")
//         }
//         stringValue.textContent = `The entered string is: ${input}`
//     }
//     catch (error) {
//         alert(error.message)
//     }
// })

// positionBtn.addEventListener("click", () => {
//     let positionForUpdate = parseFloat(inputPosition.value)
//     let input = inputString.value.trim().toLowerCase()
//     try {
//         if (isNaN(positionForUpdate)) {
//             throw new Error("Please enter a number here.")
//         }
//         if (positionForUpdate < 1 || positionForUpdate > input.length) {
//             throw new Error("Position is out of range.")
//         }
//         posiitonValue.textContent = `Position given: ${positionForUpdate}`
//         const removedChar = input.charAt(positionForUpdate - 1)
//         charAtPosition.textContent = `Character at given position is: ${removedChar.toUpperCase()}`
//         const updatedString = input.slice(0, positionForUpdate - 1) + input.slice(positionForUpdate)
//         updatedString
//         result.textContent = `Updated string is: ${updatedString.toUpperCase()}`
//     }
//     catch (error) {
//         alert(error.message)
//     }
// })

// 24. Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. The string length must be broader than or equal to 1.

// const inputValue = document.getElementById("q-24-input")
// const btn = document.getElementById("q-24-btn")
// const userInput = document.getElementById("q-24-userinput")
// const firstChar = document.getElementById("q-24-char1")
// const lastChar = document.getElementById("q-24-char2")
// const result = document.getElementById("q-24-result")

// btn.addEventListener("click", () => {
//     const input = inputValue.value.trim().toLowerCase()

//     try {
//         // Errors 
//         if (input === '') {
//             throw new Error("Please enter a string.")
//         }
//         // To check if input is not any aspecial character or number
//         if (/[^\w\s]/.test(input) || /\d/.test(input)) {
//             throw new Error("We only take non-null string values.")
//         }

//         userInput.textContent = `The entered string is: ${input}`

//         if (input.length <= 1) {
//             result.textContent = `The updated string is: ${input}`
//         } else {
//             // Logic block to replace the first and the last characters in a string
//             const firstCharacter = input[0]
//             firstChar.textContent = `The first character is: ${firstCharacter}`
//             const lastCharacter = input[input.length - 1]
//             lastChar.textContent = `The last character is: ${lastCharacter}`
//             const leftoverCharacters = input.substring(1, input.length - 1)
//             const changedString = lastCharacter + leftoverCharacters + firstCharacter
//             result.textContent = `Updated string is: ${changedString}`
//         }
//     }
//     catch (error) {
//         alert(error.message)
//     }
// })

// 25. Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back.  

// const userInput = document.getElementById("q-25-input")
// const btn = document.getElementById("q-25-btn")
// const char = document.getElementById("q-25-firstchr")
// const result = document.getElementById("q-25-result")

// btn.addEventListener("click", () => {
//     input = userInput.value.trim().toLowerCase();
//     try {
//         if (!input) {
//             throw new Error("Please enter a value.")
//         }
//         if (/\d/.test(input) || (/[^\w\s]/.test(input))) {
//             throw new Error("We only take string values.")
//         }
//         if (input.length === 1) {
//             char.textContent = `The first character of the string is: ${input}`
//             result.textContent = `Updated string is: ${input}. Go find a job.`
//         }
//         if (input.length > 1) {
//             const firstChar = input.charAt(0)
//             char.textContent = `The first character of the string is: ${firstChar}`
//             result.textContent = `Updated string is: ${firstChar + input + firstChar}`
//         }
//     } catch (error) {
//         alert(error.message)
//     }
// })

// 27. Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more.  

// const inputValue = document.getElementById("q-27-input")
// const btn = document.getElementById("q-27-btn")
// const userInput = document.getElementById("q-27-display")
// const stringToAdd = document.getElementById("q-27-stringpart")
// const result = document.getElementById("q-27-result")

// btn.addEventListener("click", () => {

//     const input = inputValue.value.trim().toLowerCase()
//     try {
//         if (!input) {
//             throw new Error("Please enter a value.")
//         }
//         if (/\d/.test(input) || /[^\w\s]/.test(input)) {
//             throw new Error("We only take string values.")
//         }
//         if(input.length < 3) {
//             throw new Error("Please enter a string of length 3 or more.")
//         }
//         if(input.length >= 3){
//             userInput.textContent = `Your input: ${input}`
//             const noOfChars = 3
//             const chars = input.slice(-noOfChars)
//             stringToAdd.textContent = `The last 3 characters of the given string are: ${chars}`
//             result.textContent = `The updated string is: ${chars.toUpperCase() + input + chars.toUpperCase()}`
//         }
//     }
//     catch (error) {
//         alert(error.message)
//     }
// })

// 28. Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise.  

// const inputValue = document.getElementById("q-28-input")
// const btn = document.getElementById("q-28-btn")
// const userInput = document.getElementById("q-28-display")
// const result = document.getElementById("q-28-result")

// btn.addEventListener("click", () => {
//     let input = inputValue.value.trim().toLowerCase()
//     try {
//         if (!input) {
//             throw new Error("Please enter a value.")
//         }
//         if(/[^\w\s]/.test(input) || /\d/.test(input)){
//             throw new Error("We only take string values.")
//         }
//         if(input.length < 4){
//             throw new Error("Please enter a string that is 5 characters or more.")
//         }
//         userInput.textContent = `Your input value is: ${input}`
//         if(input.startsWith('java')){
//             userInput.textContent = `Your input value is: ${input}`
//             result.textContent = `It is true. ${input.toUpperCase()} starts with 'JAVA'`
//         }else{
//             result.textContent = `It is false.`
//         }
//     } catch (error) {
//         alert(error.message)
//     }
// })

// 31. Write a JavaScript program to check whether a string "Script" appears at the 5th(index 4) position in a given string. If "Script" appears in the string, return the string without "Script" otherwise return the original one.  

// const inputValue = document.getElementById("q-31-input")
// const btn = document.getElementById("q-31-btn")
// const userInput = document.getElementById("q-31-display")
// const result = document.getElementById("q-31-result")

// btn.addEventListener("click", () => {
//     let input = inputValue.value.trim().toLowerCase()
//     try {
//         if (!input) {
//             throw new Error("Please enter a value.")
//         }
//         if (/\d/.test(input) || /[^\w\s]/.test(input)) {
//             throw new Error("We only take string values.")
//         }
//         userInput.textContent = `Input value is: ${input}.`

//         let placeToLookAtFrom = input.indexOf("script", 4)
//         if (placeToLookAtFrom === 4) {
//             result.textContent = `True. New updated string is: ${input.replace("script", '').toUpperCase()}.`
//         } else {
//             result.textContent = `False, ${input.toUpperCase()}.`
//         }
//     } catch (e) {
//         alert(e.message)
//     }
// })

// 36. Write a program to check whether a specified character exists between the 2nd and 4th positions in a given string. 

const inputOne = document.getElementById("q-36-input1")
const btnOne = document.getElementById("q-36-btn1")
const displayOne = document.getElementById("q-36-display1")
const inputTwo = document.getElementById("q-36-input2")
const btnTwo = document.getElementById("q-36-btn2")
const displayTwo = document.getElementById("q-36-display2")
const result = document.getElementById("q-36-result")

btnOne.addEventListener("click", () => {
    try {
        const input = inputOne.value.trim().toLowerCase()
        if (!input) {
            throw new Error("Please enter a value to continue.")
        }
        if (/\d/.test(input) || /[^\w\s]/.test(input)) {
            throw new Error("We take only string values")
        }
        if (input.length < 4) {
            throw new Error("Please enter a bigger word to check.")
        }
        displayOne.textContent = `The entered string is: ${input}`
        alert("Now enter the character you want to check at 2nd-4th position in the entered string below.")
    } catch (e) {
        alert(e.message)
    }
})
btnTwo.addEventListener("click", () => {
    try {
        const userInput = inputOne.value.trim().toLowerCase()
        const charToCheck = inputTwo.value.trim().toLowerCase()
        if (!userInput) {
            throw new Error("Please enter a string first to check the condition.")
        }
        if (!charToCheck) {
            throw new Error("Please enter a character to continue.")
        }
        if (/\d/.test(charToCheck) || /[^\w\s]/.test(charToCheck)) {
            throw new Error("We  take only string values.")
        }
        if (charToCheck.length !== 1) {
            throw new Error("Please enter a single character to check.")
        }
        let charAtIndex2To4 = userInput.slice(1, 3)
        let charCondition = charAtIndex2To4.includes(charToCheck)
        if (charCondition) {
            result.textContent = `The character '${charToCheck.toUpperCase()}' exists between the 2nd and 4th positions in the entered string.`
        } else {
            result.textContent = `The character '${charToCheck}' does not exist between the 2nd and 4th positions in the entered string.`
        }
    } catch (e) {
        alert(e.message)
    }
})