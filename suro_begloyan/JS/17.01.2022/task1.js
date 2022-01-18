function wait(i) {
    return new Promise((resolve, reject) => {
        if (!isNaN(i)) {
            setTimeout(resolve, i * 1000, `The action happened after ${i * 1000} miliseconds`)
        } else {
            reject(new Error("ERROR"))
        }
    })
}
let a = wait(2);
a
    .then((data) => {
        console.log(data);
    })
    .catch((data) => {
        console.error(data)
    })