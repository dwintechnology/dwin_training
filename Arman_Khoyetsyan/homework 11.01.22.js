// Task 1 Write a JavaScript program to calculate the factorial of a number.
//     debugger
// function myFactorial(number) {
//     if (number === 1) {
//         return 1
//     }
//     return number * myFactorial(number - 1)

// }
// console.log(myFactorial(4))


// Task 2 Write a JavaScript program to find the greatest common divisor(gcd) of two positive numbers

// function largestCommonDivisor(number1, number2) {
//     if (number1 >= number2) {
//         let number3 = number1 % number2
//         if (number3 === 0) {
//             return number2
//         }
//         return largestCommonDivisor(number2, number3)
//     } else if (number1 < number2) {
//         let number3 = number2 % number1
//         if (number3 === 0) {
//             return number1
//         }
//         return largestCommonDivisor(number1, number3)
//     }
//     return false
// }

// console.log(largestCommonDivisor(140, 96))

// Task 3 Write a JavaScript program to get the integers in range(x, y).

// function integersInTheRange(num1, num2) {
//     if (num1 === num2) {
//         return num1
//     } else if (num1 > num2) {
//         console.log(num1)
//         return integersInTheRange(num1 - 1, num2)
//     } else if (num1 < num2) {
//         console.log(num1)
//         return integersInTheRange(num1 + 1, num2)
//     }
// }

// console.log(integersInTheRange(10, 20))


// Task 4 Write a JavaScript program to compute the sum of an array of integers

// function theSumOfTheArr(arr, arr_lenght) {
//     if (arr_lenght === 0) {
//         return 0
//     }
//     return theSumOfTheArr(arr, arr_lenght - 1) + arr[arr_lenght - 1]

// }

// let a = [10, 20, 30]
// console.log(theSumOfTheArr(a, a.length))


// Task 5 Write a JavaScript program to compute the exponent of a number

// function thePowersOfANumber(num, power) {
//     if (power === 1) {
//         return num
//     }
//     return (num * thePowersOfANumber(num, power - 1))
// }

// console.log(thePowersOfANumber(2, 3))

// Task 6 Write a JavaScript program to get the first n Fibonacci numbers

// function myFibonacci(num) {
//     if (num <= 1) {
//         return 1
//     }
//     return myFibonacci(num - 1) + myFibonacci(num - 2)
// }
// console.log(myFibonacci(10))

// Task 7

