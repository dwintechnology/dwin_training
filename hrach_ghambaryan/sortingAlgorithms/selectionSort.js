let arr = Array(100).fill(null)
for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.trunc(Math.random() * 100)
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let n = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[n]) n = j
        }
        let a = arr[n]
        arr[n] = arr[i]
        arr[i] = a

    }
    return arr
}
selectionSort(arr)