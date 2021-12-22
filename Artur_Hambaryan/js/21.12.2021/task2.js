//Write a program which will print is a given number prime(պարզ) or not?

let number = +prompt("select number")
if (number === 1) {
    alert(`${number}_@ voch parz e vochel bard`);
} else if (number > 1) {
    let isPrime = true;
    for (let i = 2; i < number; i++) {
        alert(`${number}%${i}=${number % i}`);
        if (number % i == 0) {
            alert(`if ${i}`);
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        alert(`${number}_@ parz e`);
    } else {
        alert(`${number}_@ parz che`);
    }
} else {
    alert(`${number}_@ bacasakan tiv e`);
}
