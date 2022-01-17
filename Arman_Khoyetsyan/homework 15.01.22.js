// Task 1 

function atLeastThree(arr, cb) {
    let oddNumber = 0
    arr.forEach((num) => {
        if (cb(num)) {
            oddNumber++
        }
    });
    return (oddNumber >= 3) 

    

}

function isOdd(number) {
    if (number % 2 !== 0) return true


}
console.log(atLeastThree([2, 6,11, 7, 9, 6], isOdd))

// task 1 2 version

// function atLeastThree2(arr) {

//     let promis = new Promise(function (resolve, reject) {
//         let resolveSum = 0
//         arr.forEach(num => {
//             if (num % 2 === 0) {
//                 resolveSum++
//             }
//         });

//         if (resolveSum >= 3) {
//             resolve(true)
//         }
//         reject("Error")

//     })

//     promis.then(function (resolve) {
//         console.log(resolve)
//     })

//     promis.catch(function (reject) {
//         console.log(reject)
//     })

// }

// atLeastThree2([2,4,6,7,5,9])

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

// console.log(repeat("Arman",1,reverse))
// console.log(repeat("Arman",3,reverse))