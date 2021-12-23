function deepClone(objForClone){
    let resultObj = {};
    for(let key in objForClone ){
        if(typeof(objForClone[key]) == "object"){
            deepClone(objForClone[key])
        }
        resultObj[key] = objForClone[key];

    }
    return resultObj;
}
let obj1 = {
    age: 18,
    obj: {
        name: "clone"
    }
}
// console.log(deepClone(obj1))