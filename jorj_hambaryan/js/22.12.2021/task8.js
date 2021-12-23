// TASK 8
// Write a function that returns the 0's count at the end of the number for the factorial of the given number FOR BIG NUMBERS(e.g. 10000).
// e.g. 8! = 40320. The function should return 1

let a = prompt('','');

function factoial0 (n){
   let j = 0;
    for (let index = 1; n >= Math.pow(5,index); index++) {
       let result = n / Math.pow(5,index);
       result = Math.floor(result);
       j = result + j;
    }
    alert(j);
}
factoial0(a);
