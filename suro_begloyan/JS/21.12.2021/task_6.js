let reverce = 0;
let num = 85746;
let num2
while (num != 0) {
    num2 = num % 10;
    reverce = reverce * 10 + num2;
    num = Math.floor(num / 10)
}
console.log("Reverce number : " + reverce);