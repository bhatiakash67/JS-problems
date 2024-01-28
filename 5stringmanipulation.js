//Program for right rotation of a string from 1-10

const words = ["NOTEBOOK", "TEXTBOOK", "TEACHER", "SCHOOL"];
let word = words[Math.floor(Math.random() * words.length)]
let rotatingAmount = Math.floor(Math.random() * 10) + 1

const rotateString = (word, rotatingAmount) => {
    rotatingAmount %= word.length
    return word.slice(-rotatingAmount) + word.slice(0, -rotatingAmount)
}

let rotatedString = rotateString(word, rotatingAmount)

console.log(`The string is : ${word}. The rotated string after ${rotatingAmount} position right rotation is: ${rotatedString}`)


// string animation using slice and setInterval method

const animation = document.getElementById("rotatingString")

const changeString = (word) => {
    return word.slice(-1) + word.slice(0, -1)
}

setInterval(() => {
    animation.textContent = changeString(animation.textContent)
}, 500)