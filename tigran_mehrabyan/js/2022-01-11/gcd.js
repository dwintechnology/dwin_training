function getGCD(number1, number2){
    // debugger
    if(number1 % number2 == 0){
        return number2;
    }
    return getGCD(number2, (number1 % number2));
}