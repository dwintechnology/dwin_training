//Write a program which will print factorial of given n number.Write a program which will print factorial of given n number.
let num = prompt("select number");
var total = 1;

for (let i = 0; i < num; i++){
    alert('i=',i)
    total = total * (num - i);


alert(num + '! = ' + total);
}
alert(total)