// task#1
/*let n = prompt("enter number");
if(n == 1 || n == 2) {
    alert("1");
}else if(n > 2){
    let i = 3;
    let a = 1;
    let b = 1;
    sum = a+ b;
    while(n != i){
       a = b;
       b = sum;
       sum = a+b;
       i++;
    }
    alert(sum);
    

}else alert("something is wrong"); */

//task#2

/*let number = prompt("enter number")
if(number > 1){
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }
    alert(`${isPrime}`)
}else alert("something wrong")*/

//task#3
/*let sum = 0;
let i = 15;
while (i < 1001 ) {
    sum +=i;
    i+=15;
}
alert(`${sum}`)*/

// task#4

/*let number = prompt("enter number");
if(isNaN(number)) {
    alert("something wrong")
}else{
    let temp = number;

    let str = temp.split("");
    let reverse = str.reverse(); 
    let res = reverse.join(""); 

   alert(number == res ? "symmetrical" : "non")
}*/

// task#5

/*let number = prompt("enter number");
if(number > 0){
    let res = 1
    for (let index = 1; index <= number; index++) {
    res *= index;  
    }
    alert(`${res}`);
}else alert("something wrong")*/

// task#6
/*let number = prompt("enter number");
if(isNaN(number)) {
    alert("something wrong")
}else{
    let temp = number;

    let str = temp.split("");
    let reverse = str.reverse(); 
    let res = reverse.join(""); 

    alert(`${res}`)
}*/

// task#7 for 2D

let x1 = prompt("enter first coordinate for a");
let y1 = prompt("enter second coordinate for a");
let x2 = prompt("enter first coordinate for b");
let y2 = prompt("enter second coordinate for b");
let x3 = prompt("enter first coordinate for c");
let y3 = prompt("enter second coordinate for c");

let area;

if(isNaN(x1) || isNaN(x2) || isNaN(x3) || isNaN(y1) || isNaN(y2) || isNaN(y3)){
    alert("something wrong")
}else{
    area = 1/2*(x1* Math.abs(y2 - y3) + x2* Math.abs(y3 - y1) + x3* Math.abs(y1 - y2));
    alert(`${area}`)
}