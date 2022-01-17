let arr = [1, 2, 3, 4, 5, 6, 7];
function isOdd(arr) {
    let arr1 = [];
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] % 2 === 0) {
            arr1.push(arr[i])
        };
        if (arr1.length >= 3) {
            return true;
        };  
    }
    return false;
};
function atLeastThree(arr, func) {
    return func(arr);
};
console.log(atLeastThree(arr, isOdd));