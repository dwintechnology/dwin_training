//task 1. Temperature Converter(celsius to fahrenheit, fahrenheit to celsius)

// function temperature() {
//     let cels = +prompt("write temperature celsius")
//     if (cels === 0) {
//         let fahre = +prompt("write temperature fahrenheit")
//         function fahrenheitConverter(num) {
//             let celsius = (num - 32) / 1.8
//             alert(celsius.toFixed(2))
//         }
//         fahrenheitConverter(fahre)
//     } else {
//         function celsiusConverter(num) {
//             let fahrenheit = (num * 1.8) + 32
//             alert(fahrenheit)
//         }
//         celsiusConverter(cels)
//     }


// }
// temperature()


// task 2. A function which randomly alerts a student name


// let studentName = ["Arman","Suro","Siranush","Varuj","Maria"]


// function randomName (arr){
//     let i = Math.floor(Math.random() * arr.length)
//     alert(arr[i])
// }
// randomName(studentName)

// task 3 Credit Card Validation

let userCardNumber = prompt("Write your card number 16 pieces")
let userName = prompt("Write your name")
let userCVC = +prompt("Write your CVC")
let cardData = prompt("Write your card data")

let obj = {
    Name:userName,
    Number: userCardNumber,
    CVC:userCVC,
    Data:cardData,
    valid: true,
}
function stringToNumber(str) {
    if (str.length === 16 || str.length === 19) {
        if (str.length === 16) {
            return numberCheck(str)
        } else if (str.length === 19) {
            return characterFiltering(str)
        }
    } else {
        return alert("Error");
    }

}
function numberCheck(str) {
    let arr = str.split("")
    for (let i = 0; i < arr.length; i++) {
        if (isNaN(arr[i])) {
            return false
        }
    }
    return isTheLasNumberAEven(str)
}
function characterFiltering(str) {
    let arr = str.split("-")
    let newStr = arr[0] + arr[1] + arr[2] + arr[3]
    return numberCheck(newStr)

}
function isTheLasNumberAEven(str) {
    if (str[str.length - 1] % 2 === 0) {
        return AreAllNumbersTheSame(str)
    }
    
    return false
}

function AreAllNumbersTheSame(str) {
    let arr = str.split("")
    let num = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== num) {
            return allCardNumberAmount(str)
        }

    }
    
    return false
}
function allCardNumberAmount(str){
    let sum = 0
    for(let i = 0;i < str.length;i ++){
        sum += str[i]
    }
    return (sum > 16 )
}


if (stringToNumber(userCardNumber)) {
    console.log(obj)
} else {
    obj.valid = false;
    obj.error = "error";
    console.log(obj)
}
