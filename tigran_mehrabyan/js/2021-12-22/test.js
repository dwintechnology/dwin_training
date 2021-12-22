// let num = prompt("enter number");
// let rev = 0;
// let lastDigit;
// num = Number(num)


// while(num != 0){
// 	lastDigit = num % 10;
//     rev = rev * 10 + lastDigit;
//     num = Math.floor(num/10);
// }
// alert(`${rev}`)

// let num = prompt("enter number");
// if(num < 1){
//     alert("something wrong")
// }else{
//     isPrime(num, alert)
// }

// PRIME

// function isPrime(n, print) {
//     let primity = true;
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i == 0) {
//             primity = false;
//             break;
//         }  
//     }  
//     print(`${primity}`);

// }

// FIBONACCI in array

// function fibonacciMember(n){
//     if (n===1) 
//   {
//     return [0, 1];
//   } 
//   else 
//   {
//     let s = fibonacciMember(n - 1);
//     s.push(s[s.length - 1] + s[s.length - 2]);
//     return s;
//   }

// }

// 1-1000(/15)

// function sumOfNum(){
//     let sum = 0;
//     let i = 15;
//     while (i < 1001 ) {
//         sum +=i;
//         i+=15;
//     }
// }

// symetriccal number

// function isSymetric(num){
//     let rev = 0;
//     let lastDigit;
//     while(num != 0){
//     	lastDigit = num % 10;
//         rev = rev * 10 + lastDigit;
//         num = Math.floor(num/10);
//     }
//     return (num == rev ? true:false)
// }

// Factorial

// function factorialOfNumber(n){
//     let res = 1
//     for (let index = 1; index <= number; index++) {
//         res *= index;  
//     }
// }

// REVERSE NUMBER

// function isSymetric(num){
//     let rev = 0;
//     let lastDigit;
//     while(num != 0){
//     	lastDigit = num % 10;
//         rev = rev * 10 + lastDigit;
//         num = Math.floor(num/10);
//     }
//      return rev;
// }

// AREA OF TRiANGLE

// function areaOfTriangle(x1, x2, x3, y1, y2, y3){

//     if(isNaN(x1) || isNaN(x2) || isNaN(x3) || isNaN(y1) || isNaN(y2) || isNaN(y3)){
//         alert("something wrong")
//     }else{
//         area = 1/2*(x1* Math.abs(y2 - y3) + x2* Math.abs(y3 - y1) + x3* Math.abs(y1 - y2));
//         alert(`${area}`)
//     }
//     return area;
// }