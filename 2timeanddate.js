let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

let currentDate = new Date()
let currentDay = currentDate.getDay()
let hours = currentDate.getHours()
let minute = currentDate.getMinutes()
let seconds = currentDate.getSeconds()

let time = hours >= 12 ? "PM" : "AM" 

console.log("Today is: ", days[currentDay])
console.log("Current time is: " + hours + time + ":" + minute + ":" + seconds)

