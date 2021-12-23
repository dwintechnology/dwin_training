// TASK 8
// Write a function to construct the (1) pattern, using a nested for loop. The height of the triangle should be passed to the function as an argument.


var i = 0,
  j = 0;

var max = 4;
var space = "",
  star = "";

while (i < max) {
  space = "";
  star = "";
  for (j = 0; j < i +1; j++) {
      star += "*";
  }
  console.log(space + star);
  i++;
}