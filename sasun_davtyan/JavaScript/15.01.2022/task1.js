let arr = [1, 2, 3, 4, 5];
function isOdd(arr) {
    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            arr1.push(arr[i])
        };
        if (arr1.length >= 3) {
            return true;
        };
    }
    return false;
}
function atLeastThree(arr, foo) {
    return foo(arr);
}
console.log(atLeastThree(arr, isOdd));


//promise
let arr = [1, 2, 3, 4, 5];
let prom = new Promise((resolve, reject) => {
    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            arr1.push(arr[i])
        };
        if (arr1.length >= 3) {
            return resolve(true)
        }
    }
    return reject(false);
});

prom
    .then((data) => {
        console.log(data);
    })
    .catch((data) => {
        console.log(data);
    })