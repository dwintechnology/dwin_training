//Write a program which will print reverse of given n number.e.g 12345 -> 54321
let rev = 0;
let num = 12345;
let num2;

while(num != 0){
  num2 = num % 10;
  rev = rev * 10 + num2;
  num = Math.floor(num/10);
}

alert("Reverse number : "+rev);