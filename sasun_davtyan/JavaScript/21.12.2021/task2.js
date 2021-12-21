let number = 20;
if (number === 1) {
    console.log("x=x=x=x=x=x");
} else if (number > 1) {
    let isPrime = true;
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log("this is a prime number");
    } else {
        console.log("this is not a prime number");
    }
} else {
    console.log("this is a negative number");
}