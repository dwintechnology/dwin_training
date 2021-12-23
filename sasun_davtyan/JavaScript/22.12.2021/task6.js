function sum() {
  let sum = 0;
  for(let i = 15; i < 1000; i+=15){
      sum = sum+i;
  }
  return sum;
}
console.log(sum())