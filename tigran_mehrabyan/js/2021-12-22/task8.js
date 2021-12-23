// count of 0 in factorial end
 function countOfZero(n){
     let res = 0;
     while (n > 0) {
         n = Math.floor(n/5);
         res += n;
         
    }
    return res;
 }