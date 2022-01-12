function whetherEven(number){
    if(number == 0){
        return true;
    }
    if(number == 1){
        return false
    }
    return whetherEven(number % 2 )
}