const words = ["INVESTOR", "FOREST", "GROOT", "RONALDO"];
let word = words[Math.floor(Math.random() * words.length)]
let rotatingAmount = Math.floor(Math.random() * 10) + 1

function rotateString(word, rotatingAmount){
    rotatingAmount = rotatingAmount % word.length
    let rotatedString = word.slice(-rotatingAmount) + word.slice(0, -rotatingAmount)
    return rotatedString
}

let red = rotateString(word, 7)

console.log(`The string is : ${word}. The rotated string after ${rotatingAmount} position right rotation is: ${red}`)