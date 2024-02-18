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

const strInput = document.getElementById("palindrome-checker")
const btn = document.getElementById("palindrome-button")
const result = document.getElementById("result-display")
const display = document.getElementById("palindrome-string")

btn.addEventListener("click", () => {

    const userInput = strInput.value.toLowerCase();  
    
   const reversedString = userInput.split('').reverse().join('')

   display.textContent = `The string is: ${userInput}`;

    if(userInput === reversedString) {
        result.textContent = `${userInput} is a palindrome.`
    }
    else{
        result.textContent = `${userInput} is not a palindrome.`
    }
})