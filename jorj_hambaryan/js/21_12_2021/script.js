"use strict";


// Task - 1
// Write a program which will print n -th Fibonacci number
// User should enter n number when program is starting
    

// function fib(n) {
//     let a = 1;
//     let b = 1;
//     for (let i = 3; i <= n; i++) {
//       let c = a + b;
//       a = b;
//       b = c;
//     }
//     return b;
//   }

// let FibNum = prompt("Вводите число", 2);
 
// console.log(fib(FibNum));










// TASK - 2
// Write a program which will print is a given number prime(պարզ) or not?


// let primeOrNo = prompt("Вводите число", '');


// for (let i = 2; i < primeOrNo; i++){
 
// if ((+primeOrNo % i) === 0){
//     alert('Число не простое');
//     break;
// }else if (i+1 === +primeOrNo) {
//     alert('Число простое');
// }

// }











// TASK - 3
// Write a program which will print sum of numbers which  are dividing 5 and 3 without remainder from 1-1000 interval.

// let a = 0;

// for (let i = 1; i <= 1000 ; i++){
//     if ((i % 5) == 0 && (i % 3) == 0){
//        a =a + i; 
//     }
// }
// console.log(a);










// TASK - 4
// Write a program which will check if a given n number symmetrical or not

let n = prompt('','');
let a = n.split("").reverse().join("");
if (a == n){
    alert('Число симетричное');
}else {
    alert('Число не симетричное');
}










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


// let n = prompt('','');
// n = n.split("").reverse().join("");
// alert(n);