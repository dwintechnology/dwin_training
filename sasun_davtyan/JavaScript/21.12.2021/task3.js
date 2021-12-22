function number(n, print) {
    let sum = 0;
    for (let i = 15; i < n; i += 15) {
        sum += i;
    }
    print(sum)
}
number(1000, console.log)