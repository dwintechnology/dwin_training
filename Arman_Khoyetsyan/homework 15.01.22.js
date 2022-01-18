// Task 1 

// function atLeastThree(arr, cb) {
//     let oddNumber = 0
//     arr.forEach((num) => {
//         if (cb(num)) {
//             oddNumber++
//         }
//     });
//     return (oddNumber >= 3) 



// }

// function isOdd(number) {
//     if (number % 2 !== 0) return true


// }
// console.log(atLeastThree([2, 6,11, 7, 9, 6], isOdd))

// task 1 2 version

//  function atLeastThree2(arr) {

//     let promise = new Promise(function (resolve, reject) {
//         let resolveSum = 0
//         arr.forEach(num => {
//             if (num % 2 !== 0) {
//                 resolveSum++
//             }
//         });

//         if (resolveSum >= 3) {
//             resolve(true)
//         }
//         reject("Error")

//     })

//     promise.then(console.log)

//     promise.catch(console.log)

//  }

// atLeastThree2([2,4,6,4,5,9])

//Task 2 




// function repeat(str, num, cb) {
//     let resolve = cb(str)
//     num--
//     for (let i = num; i > 0; i--) {
//         resolve = cb(resolve)
//     }
//     return resolve
// }

// function reverse (string){
//     return string.split("").reverse().join("");
// }


// function repeat1(str, num) {
//     return new Promise(function (resolve) {
//         let reverseStr = str.split("").reverse().join("")
//         num--
//         for (let i = num; i > 0; i--) {
//             reverseStr = reverseStr.split("").reverse().join("")

//         }
//         resolve(reverseStr)
//     })

// }
// repeat1("Arman", 2).then(alert)

// console.log(repeat("Arman",1,reverse))
// console.log(repeat("Arman",3,reverse))

// function foo(num) {
//     return new Promise(function (resolve, rejacte) {
//         if (typeof num !== "number") {
//             rejacte(new Error("is not a Number"))
//         }
        
//         if (num % 2 === 0){
//            setTimeout(function(){
//                resolve("Even")
//            },2000)
//         }else{
//             setTimeout(function(){
//                 resolve("Odd")
//             },1000)
//         }

//     })
// }

// foo("ll").then(alert).catch(alert)