// task#1
function atLeastThree(array, cb) {
    let result = cb(array);
    if (result >= 3) {
      return true;
    }
    return false;
  }
  function isOdd(array) {
    let count = 0;
    array.forEach((element) => {
      if (element % 2 != 0) {
        count++;
      }
    });
    return count;
  }
  