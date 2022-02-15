function test(text){
    if(typeof(text)=="number"){
    if(Number.isInteger(text)){
        console.log("n is integer number")
    }else {
        console.log("n is floating number")
    }
}else {
    console.log("Not A Number")
}
}
let count = test("apsjflkas")
console.log(count);