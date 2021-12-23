//Write a function that returns the 0's count at the end of the number for the factorial of the given number FOR BIG NUMBERS(e.g. 10000).
//e.g. 8! = 40320. The function should return 1
function zeros(n) {
    var counter = 0;
    for (var i = 5; n/i >= 1; i *= 5)
      counter += Math.floor(n/i);
    return counter;
  }
  zeros(8)
