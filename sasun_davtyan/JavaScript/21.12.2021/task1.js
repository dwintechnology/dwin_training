const num =6;
let fib1 = 1;
let fib2 = 1;
if(num<=1) {
     fib = num;   
} else {
    for(let i = 2; i < num; i++){
	        let fib3 = fib1 + fib2;
            fib1 = fib2;
            fib2 = fib3;
        
    }
}
console.log(fib)
    