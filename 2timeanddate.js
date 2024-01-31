// // 2. Print a date in a format

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

let currentDate = new Date()
let currentDay = currentDate.getDay()
let hours = currentDate.getHours()
let minute = currentDate.getMinutes()
let seconds = currentDate.getSeconds()

let time = hours >= 12 ? "PM" : "AM"

console.log("Today is: ", days[currentDay])
console.log("Current time is: " + hours + time + ":" + minute + ":" + seconds)

// 4. Date in a format

let date = new Date()

let dd = date.getDate()
let mm = date.getMonth() + 1
let yyyy = date.getFullYear()

if (dd < 10) {
    dd = "0" + dd
}

if (mm < 10) {
    mm = "0" + mm
}

let today = dd + "-" + mm + "-" + yyyy
console.log(today)
today = dd + "/" + mm + "/" + yyyy
console.log(today)

// 8. Checking of day from year to year

for (let year = 2014; year <= 2050; year++) {
    const startDate = new Date(year, 0, 1)
    let dayOfWeek = startDate.getDay()

    if (dayOfWeek === 0) {
        console.log(`1st January, ${year} is a Sunday.`)
    }
    else {
        console.log(`1st January, ${year} is not a Sunday.`)
    }
}