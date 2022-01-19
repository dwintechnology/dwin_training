// Task 1

// function whit(time) {

//     return new Promise(function (resolve, reject) {
//         if (time < 5000) {
//             setTimeout(() => { resolve("Hi") }, time);
//         } else {
//             setTimeout(() => { reject("Bay") }, time);
//         }
//     }).then(alert).catch(alert)
// }

// whit(10 * 200)

// Task 2

// doSomething().then(function (result) {
//     return doSomethingElse(result)
//         .then(newResult => doThirdThing(newResult));
// }).then(() => doFourthThing());

// Task 3

// function numberSum(num1, num2) {
//     return (new Promise(function (resolve, reject) {
//         if (typeof (num1) !== "number" || typeof (num2) !== "number") {
//             reject(new Error("a or/and b aren't numbers"))
//         }
//         resolve(num1 + num2)
//     })
//     ).then(console.log).catch(console.log)
// }

// numberSum(2, true)

// Task 4
// let arrEmail = ["a@gmail.com", "b@gmail.com", "c@gmail.com"]


// function sendEmails(arr) {
//     function sendEmail(mail) {
//         return ("Hi" + " " + mail)
//     }

//     return new Promise(function (resolve, reject) {
//         let newArr = arr.map(email => {
//             if (typeof email !== "string") {
//                 reject(new Error("is not a string"))
//             }
//             return sendEmail(email)

//         });
//         setTimeout(() => { resolve(newArr) }, 2000)
//     }).then(console.log).catch(console.log)
// }
// sendEmails(arrEmail)

// Task 5

// ////////ClassWork

// function all(...args) {
//     return new Promise(function (resolve, reject) {

//         let arr = []
//         let errorArr = []
//         args.forEach(argument => {
//             argument.catch(errorArg => { errorArr.push(errorArg) })
//             argument.then(arg => { arr.push(arg) })
//         })
//         if (errorArr.length > 0) {
//             arr.length = 0
//             reject(new Error(`${errorArr[0]}`))

//         }
//         resolve(arr)

//     })
// }
// let promise1 = new Promise((resolve, reject) => {
//     resolve("A")
// })
// let promise2 = new Promise((resolve, reject) => {
//     reject("C")

// })
// let promise3 = new Promise((resolve, reject) => {
//     resolve("B")
// })
// all(promise1, promise2, promise3, promise1).then(console.log).catch(console.log)

