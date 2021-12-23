"use strict"; 
// TASK 3
// Write a function to find the largest of 5 given integers.

let  a = +prompt('Введите 1-ую цыфру',''),
     b = +prompt('Введите 2-ую цыфру',''),
     c = +prompt('Введите 3-ую цыфру',''),
     d = +prompt('Введите 4-ую цыфру',''),
     f = +prompt('Введите 5-ую цыфру',''),
     result = 0;



function mostNumbers() {
    return Array.from(arguments);
    }

let arr = mostNumbers(a,b,c,d,f);

    arr.forEach(function(item, i, arr) {
        if (item > a){
            result = item;
            a = result;
        }

      });

      alert(`Самая большая цыфра это ${result}`);
