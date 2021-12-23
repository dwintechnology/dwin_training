let result = []
let maxPrimeNumber = 0;
function isPrime(num) {
    for(var i = 2; i < num; i++) {
        if(num % i === 0) return false;
    }
  return num > 1;
}
function permutation(arr, size) {
    if (size == 1) {
        let permutationNumber = arr.join("");
        result.push(permutationNumber);
        if(isPrime(+permutationNumber) && +permutationNumber > maxPrimeNumber){
            maxPrimeNumber = +permutationNumber
        }
        return;
    }
    for (let i = 0; i < size; i++){
        permutation(arr, size - 1);
        if (size % 2 == 1) {
            let temp = arr[0];
            arr[0] = arr[size - 1];
            arr[size - 1] = temp;
        } else {
            let temp = arr[i];
            arr[i] = arr[size - 1];
            arr[size - 1] = temp;
        }
    }
}

let array = `${125624}`.split('');
permutation(array, array.length);
console.log(result);
console.log(maxPrimeNumber);