// // combination
// let number = prompt("enter number");
// let array = number.split("");
// let result = [];


// function permutation(arr, currentSize) {

//     if (currentSize == 1) { 
//         result.push(arr.join(""));
//         return;
//     }
    
//     for (let i = 0; i < currentSize; i++){
//         permutation(arr, currentSize - 1);
//         if (currentSize % 2 == 1) {
//             let temp = arr[0];
//             arr[0] = arr[currentSize - 1];
//             arr[currentSize - 1] = temp;
//         } else {
//             let temp = arr[i];
//             arr[i] = arr[currentSize - 1];
//             arr[currentSize - 1] = temp;
//         }
//     }
// }

// permutation(array, array.length);

// console.log(result);
