// Task1:Write a program which will print n -th Fibonacci number
//User should enter n number when program is starting

let number = prompt("select number")
let fibNum=1;
let next=1;
if(number <=1){
alert(number)
}else{
    for(let i = 2;i<number;i++){
        let a = fibNum+next;
        fibNum = next;
        next = a;
    }}
    alert(fibNum)
