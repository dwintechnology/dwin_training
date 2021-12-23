//Write a function to compute the greatest common divisor (GCD) of two positive integers.
function nod(a,b){
  while (a!== 0 && b!== 0){
      if (a > b){
          a = a % b
       } else{
          b = b % a
   }
   
  } 
  console.log(a + b)
  }
  nod(24,36)