// Task 1 Create a date object with today's date
// let today = new Date
// console.log(today)

//Task 2 Create a date object with the date of 1 January 2017

// let Jan_1_2017=new Date(2017,0,1)
// console.log(Jan_1_2017)

// Task 3 Find the number of weeks between today and 1 Jan 2017
//  let numberOfWeeks = new Date()
//  console.log(numberOfWeeks.getDay())
//  console.log(new Date(0).getDay())
//Task 4 Create an array of date objects from 2021-Dec-01 to 2022-Jan-12
// let date = new Date(2021, 11, 01)
// let arr = []
// for (let i = 0; i < 43; i++) {
//     console.log(date)
//     arr.push(date)
//     date.setDate(date.getDate() + 1)

// }
// console.log(arr)

// Task 5 Check if the inserted date(e.g. 2021-01-01) was in last 5 days.
// function checkiDay(date) {
//     a = new Date(date)
//     // let a = new Date(year, month, day)
//     a = a.getTime()
//     let newDate = new Date().getTime()
//     let fiveDay = new Date()
//     fiveDay.setDate(fiveDay.getDate() - 5)
//     fiveDay = fiveDay.getTime()

//     if (newDate > a && fiveDay < a) {
//         return true
//     }
//     return false
// }
// console.log(checkiDay("2022-01-5"))
