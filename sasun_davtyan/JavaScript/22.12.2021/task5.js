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
  nod(50,130)