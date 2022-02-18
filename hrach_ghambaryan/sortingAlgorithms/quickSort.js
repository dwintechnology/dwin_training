let arr = Array(100).fill(null)
for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.trunc(Math.random() * 100)
}
function quicksort(arr) {
    if (arr.length === 0) return arr
    let less = []
    let more = []
    let middle = Math.floor(arr.length / 2)
    for (let i = 0; i < arr.length; i++) {
        if (arr[middle] > arr[i]) less.push(arr[i])
        if (arr[middle] < arr[i]) more.push(arr[i])
    }
    return [...quicksort(less), arr[middle], ...quicksort(more)]
}
quicksort(arr)