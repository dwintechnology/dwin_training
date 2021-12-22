function number(num,print){
  let rev = 0;
  let num2;
  while(num != 0){
    num2 = num % 10;
    rev = rev * 10 + num2;
    num = Math.floor(num/10);
  }
  print(rev)
  }
  number(12345,console.log)