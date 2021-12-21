let num =6;
var total = 1;

for (let i = 0; i < num; i++){
    console.log('i=',i)
    total = total * (num - i);


console.log(num + '! = ' + total);
}
console.log(total)