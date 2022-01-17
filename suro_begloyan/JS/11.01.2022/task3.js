function integerNums(x,y){
    if(x  - 1== y) return x
    if(x > y){
        let z = y;
        y = x;
        x = z;
    }
    x=Math.ceil(x);
    y=Math.trunc(y);
    console.log(x)
    integerNums(x +1 ,y)
  
}
integerNums(58.6, 13.8)