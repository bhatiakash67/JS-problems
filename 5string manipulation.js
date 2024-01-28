const words = ["INVESTOR", "FOREST", "GROOT", "RONALDO"];
let word = words[Math.floor(Math.random() * words.length)]
let rotatingAmount = Math.floor(Math.random() * 10) + 1

const rotateString = (word, rotatingAmount) => {
    rotatingAmount %= word.length
    return word.slice(-rotatingAmount) + word.slice(0, -rotatingAmount)
}

let rotatedString = rotateString(word, rotatingAmount)

console.log(`The string is : ${word}. The rotated string after ${rotatingAmount} position right rotation is: ${rotatedString}`)