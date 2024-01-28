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


// string animation on webpage using slice and setInterval method

const animation = document.getElementById("rotatingString")
const userInput = document.getElementById("string")
const btn = document.getElementById("btn")


const changeString = (word) => {
    return word.slice(-1) + word.slice(0, -1)
}

btn.addEventListener("click", () => {
    const userValue = userInput.value.trim()
    if(userValue){
        animation.textContent = userValue
    }
    else{
        alert("Please enter a string value before clicking on enter")
    }
})

setInterval(() => {
    animation.textContent = changeString(animation.textContent)
}, 600)