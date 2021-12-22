// TASK 8
// Write a function that returns the 0's count at the end of the number for the factorial of the given number FOR BIG NUMBERS(e.g. 10000).
// e.g. 8! = 40320. The function should return 1


let rev = 0;
let num = prompt('','');
let num2;
let jor = 0;
let f = 1;


while(num != 0){
	num2 = num % 10;
  rev = rev * 10 + num2;
  if(num2 == 0 ){
      jor++;
  }
  num = Math.floor(num/10);
  

}

function factorial(){
    for (let index = 1; index <= jor; index++) {
        f = index * f;
    }
    return f;
}
factorial();
console.log(f);