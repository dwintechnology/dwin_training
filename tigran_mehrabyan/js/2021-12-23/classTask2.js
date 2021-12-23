function hasProperty(obj, prop){
    for(let key in obj){
        if( obj[key] == prop){
            return true;
        }
    }
    return false
}
let a = {
    name: "valod"
}
// console.log(hasProperty(a, "valod")) 
// console.log(hasProperty(a, "bgh")) 