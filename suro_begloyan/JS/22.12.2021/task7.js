function showMessage() {
    return function(argument) {
        console.log(argument);
    }
}
showMessage()(`Wow! It's nested function!"`);