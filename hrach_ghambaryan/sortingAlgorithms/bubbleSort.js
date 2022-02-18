let arr = Array(100).fill(null)
for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.trunc(Math.random() * 100)
}

function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let n = i
        for (let i = 0; i < arr.length - 1 - n; i++) {
            if (arr[i] > arr[i + 1]) {
                let a = arr[i + 1]
                arr[i + 1] = arr[i]
                arr[i] = a
            }
        }
    }
    return arr
}
bubbleSort(arr)