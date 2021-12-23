"use strict"; 
// TASK 5


let  a = +prompt('Введите 1-ую цыфру',''),
     b = +prompt('Введите 2-ую цыфру',''),
     f = 0;


if (a < b){
    f = a;
    a = b;
    b = f;
}

// let  a = 100,
//      b = 50;

function gcd() {
    if (a == 0 || b == 0 ){
        alert("Цыфру ноль нельзя использовать"); 
    }else if (a > b){
        let c = a / b;
            while (c != 0) {
                 c = a % b;
                 
                 if (c != 0){
                    a = b;
                    b = c;
                 } 
                 
                 
                //  c = a % b;
            }alert(`GCD = ${b}`);

    }
}

gcd();