function getFibonacci(n){
    if(n == 1 ){
        return [1]
    }
    if(n == 2){
        return [1,1]
    }
    let temp = getFibonacci(n - 1);

    temp.push(temp[temp.length - 2] + temp[temp.length - 1]);

    return temp;

}
