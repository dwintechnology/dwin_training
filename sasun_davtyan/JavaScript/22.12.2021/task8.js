function getZeros(n) {
  let temp = 0;
  for (let i = 5; n/i >= 1; i *= 5)
    temp += Math.floor(n/i);
    return temp;
}
console.log(getZeros(13))