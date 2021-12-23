function isEmpty(obj){
    for(let key in obj){
        return true;
    }return false;
}
let b ={
    // age: 18
}
console.log(isEmpty(b))