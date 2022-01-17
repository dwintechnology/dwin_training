function evenOrNot(n){
    if(n == 0) return true;
    if(n == 1) return false;
    let x = evenOrNot(n - 2);
    return x;
}