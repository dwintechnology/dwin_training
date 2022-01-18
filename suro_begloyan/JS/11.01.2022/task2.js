function gcd(x, y){
    if(y == 0){
        return x;
    }
    if(x % y == 0){
        return y;
    }
    return gcd(x, x%y);
}