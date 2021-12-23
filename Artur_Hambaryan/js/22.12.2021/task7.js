//Write a function that returns another function that print the following text: "Wow! It's nested function!".
function showMessage() {
    return function(argument) {
        console.log(argument);
    }
}
showMessage()