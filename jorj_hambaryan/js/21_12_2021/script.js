"use strict";


// Task - 1
// Write a program which will print n -th Fibonacci number
// User should enter n number when program is starting


// function fib(n, print) {
//     let a = 1;
//     let b = 1;
//     for (let i = 3; i <= n; i++) {
//       let c = a + b;
//       a = b;
//       b = c;
//     }
//     print(b);
//   }

// let FibNum = prompt("Вводите число", 2);


// fib(FibNum, console.log);








// TASK - 2
// Write a program which will print is a given number prime(պարզ) or not?


// let primeOrNo = prompt("Вводите число", '');

// function primeNumber (print) {
//     for (let i = 2; i < primeOrNo; i++){

//         if ((+primeOrNo % i) === 0){
//             print('Число не простое');
//             break;
//         }else if (i+1 === +primeOrNo) {
//             print('Число простое');
//         }

//         }
// }
// primeNumber(console.log);




// TASK - 3
// Write a program which will print sum of numbers which  are dividing 5 and 3 without remainder from 1-1000 interval.

// function numbersOfSum(print) {
//     let a = 0;

//     for (let i = 15; i <= 1000 ; i+=15){
//     a += i;
//     }
//     print(a);
// }

// numbersOfSum(console.log);






// TASK - 4
// Write a program which will check if a given n number symmetrical or not

// let n = prompt('','');

// function simetrickOrNo(print) {
//     let a = n.split("").reverse().join("");
// if (a == n){
//     print('Число симетричное');
// }else {
//     print('Число не симетричное');
// }
// }

// simetrickOrNo(console.log);











// TASK - 5
// Write a program which will print factorial of given n number.

// let Factor = prompt('factorial','');

// let sum = 1;

// for (let i = 1; i <= Factor; i++){
//     sum = sum * i;
// }

// console.log(sum);


// TASK - 6
// Write a program which will print reverse of given n number.
// e.g 12345 -> 54321



// let num = prompt('', '');


// function RevNum(print) {
//     let rev = 0;
//     let num2;
//     while (num != 0) {
//         num2 = num % 10;
//         rev = rev * 10 + num2;
//         num = Math.floor(num / 10);
//     }
//     print(rev);
// }
// RevNum(console.log);
