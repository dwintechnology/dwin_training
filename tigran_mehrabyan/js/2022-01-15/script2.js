// task#2
function repeat(string, number, cb){
  let result = cb(string);
  number--;
  while(number > 0){
    result = cb(result);
    number--;
  }
  return result;
}
function reverse(str){
  return str.split("").reverse().join("");
}

repeat("abc", 1, reverse) // expected output "cba"
repeat("abc", 2, reverse) // expected output "abc"
repeat("abc", 3, reverse) // expected output "cba"