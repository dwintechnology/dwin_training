https://www.codewars.com/kata/596f72bbe7cd7296d1000029/train/javascript?collection=akvelon-basic-test

function deepCount(a){
    return a.reduce((acc,val)=>{
    if(Array.isArray(val)){
        acc+=1
        return acc+deepCount(val)
    }
        return acc+1
    },0)
    }