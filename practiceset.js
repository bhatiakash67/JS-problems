const arr = [1, 2, 3, 4, 5]
const arr2 = [20, 30, 50, 60]
const arr3 = ["red", "blue", "green", "yellow", "purple", "black"]
// if()
const newarr = arr.map((num) => num * 5)
console.log('The updated array is: ' + newarr);
console.log('The concatenated array is: ' + arr.concat(arr2));
console.log(arr3.join(". ").toUpperCase());

const names = ["Ram", "Sita", "Laxman", "Raavan", "Sita"]
const arr4 = [1, 2, 3, 4, 5]
arr4.forEach((number) => {
    console.log(`The new array value is: ${number * 2}`);
})

function round() {
    const sum = arr4.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }, 0)
    console.log(sum);
}
round()

const arr5 = ["Round", 25, 4, "55", "6"]
if(arr5.some(element => typeof element === 'number')){
    console.log("This array has some numberic values.");
}else{
    console.log("This array only has string values.");
}

const arr6 = ["Ram", "Items", "Shopping", "MousePad", "Bootle", "Groot", "Ronald", "Ranjan"] 
arr6.forEach((word) => {
const newword = [word.slice(0, 4), word.slice(4)]
    console.log(newword);
})