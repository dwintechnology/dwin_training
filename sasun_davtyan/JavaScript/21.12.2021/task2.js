function getIsPrime(number,print){
if (number === 1) {
    return 1;
} else if (number > 1) {
    let isPrime = true;
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            return false;
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
}
