function getFib(n){
    if(n==1){
        return [1];
    }
    if(n==2){
        return[1, 1];
    }
    let temp1 = getFib(n-1);
    const l = temp1.length;
    temp1.push(temp1[l-2] + temp1[l-1]);
    return temp1;
}
getFib(7);