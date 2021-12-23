//Write a function to construct the (1) pattern, using a nested for loop. The height of the triangle should be passed to the function as an argument.
function pointer(num) {
    for(let i = 0; i < num; i++) {
        console.log('*'.repeat(i))
    }
}
console.log(pointer(10))