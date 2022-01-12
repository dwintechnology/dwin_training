// task 1 Write a function to get a copy of the object where the 
//  keys have become the values and the values the keys

//  debugger
// let a = {
//     name: "Arman",
//     lastName: "Khoyetsyan",
//     age: 20,
//     boy:20,
//     caper:{
//         hhh:20
//     }
// }

// function objExpand(obj) {
//     let newObj = {}
//     let arrForKey = Object.values(obj)
//     let arrForVal = Object.keys(obj)
//     for (let i = 0; i < arrForVal.length; i++) {
//         newObj[arrForKey[i]] = String([arrForVal[i]])
//     }
//     return newObj
// }

// console.log(copyObj(a))


// Task 2 Write a function to convert an object into a list of '[key, value]' pairs

// function educationInPairs (object){
//     let newPairs = Object.entries(object)
//     return newPairs
// }

// console.log(educationInPairs(a))

//Task 3 Write a function to calculate sum of all number values even if there is nested object:


// function allSumIsNumbersInObject(obj,sum) {
//     let objVal = Object.values(obj)
//     for (let i = 0; i < objVal.length; i++) {
//         if (typeof objVal[i] === "number") {
//             sum += objVal[i]
//         } else if (typeof objVal[i] === "object") {

//            return allSumIsNumbersInObject(objVal[i],sum)
//         }
//     }
//     return sum
// }

//  console.log(allSumIsNumbersInObject(a,0))

// Task 4 
    // let array = new Array(6000);
    // array.fill(false);
    // array[1234] = true
