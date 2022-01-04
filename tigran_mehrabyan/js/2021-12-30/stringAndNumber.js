// #1
function isFloat(string){
    
    if(string.includes(".") && (string.indexOf(".") !== (string.length - 1)) ){
        if(string == +string){
            return true;
        }
    }return false;
}
// #2
function isIntOrFloat(string){
    if(string == Math.floor(+string)){
        console.log(`${string} is integer`)
    }else if(string.includes(".") && string == +string) {
        console.log(`${string} is floating number`)
    }else{
        console.log(`${string} not a number`)

    }
}
// #3

function $ToAmd(number){
    return (number * 483 ).toFixed(2);
}
// #4

function trianglePerimeter(radius){
    if(typeof radius == "number" && radius > 0 || radius == 0 ){
        return (radius * Math.PI * 2).toFixed(2);

    }else {
        return "something wrong"
    }
}
// #5

function randomBinary(){
    return Math.floor(Math.random() *2);
}
// #6

function comparingMaxMinWithDegrees(number1, number2, number3, number4, number5){
    let max = Math.max(number1, number2, number3, number4, number5);
    let min = Math.min(number1, number2, number3, number4, number5);
    if(Math.pow(max, 3) > Math.pow(min, 4)){
        return true;
    }else{
        return false;
    }
}
// #7 

function decimalComparing(number1, number2){
    if((number1 - Math.floor(number1)) > (number2 - Math.floor(number2))){
        return `decimal part of ${number1} more then dicimal part of ${number2}`;
    } else if((number1 - Math.floor(number1)) < (number2 - Math.floor(number2))){
        return `decimal part of ${number1} less then dicimal part of ${number2}`;
    }else{
        return `decimal part of ${number1} equal to dicimal part of ${number2}`;

    }
}
// #8

function percentWithoutDecimal(number, percent){
    return Math.floor((number * percent / 100));
}
