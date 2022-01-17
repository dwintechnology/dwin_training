// task#1
function atLeastThree(array, cb) {
  let count = 0;
    array.forEach((element) => {
      (isOdd(element)) ? count++ : count +=0
    });
  return (count >= 3)
}
function isOdd(number) {
  return (number % 2 != 0);
}
