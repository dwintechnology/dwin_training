let p1 = new Promise ((res,rej)=>{
    res('A');
})
let p2 = new Promise ((res,rej)=>{
    res('B');
})
let p3 = new Promise ((res,rej)=>{
    res('C');
})

function promiseAll(array) {
    return new Promise((resolve, reject) => {
       let results = [];
       array.forEach((value, index) => {
            Promise.resolve(value).then(result => {
                results[index] = result;
                console.log(results[index])
                if (results.length == array.length) {
                    resolve(results);
                }
            }).catch(err => reject(err));
       });
    });
}

async function printResult(array){
    let results = await promiseAll(array)
    console.log('Fake Promis.all call result: ',results)
}
printResult([p1,p2,p3])