let user = {
    name: "Vasya",
    age: 18,
    arr: [1, 2, "po"],
    obj: {
        obj1: 71,
        obj2: "darbin",
        obj3: {
            obj34: {
                ob: 1
            }
        }
    }
}

// task1
function change(obj){
    let resObj = {}
    Object.keys(obj).forEach(el =>{
        resObj[obj[el]] = el;
    })
    return resObj;
}

// task2
function entries(obj){
    return Object.entries(obj);
}

// task3
let sum = 0;
function sumOfNumValues(obj){
    let values = Object.values(obj);
    for (let i = 0; i < values.length; i++) {
        if(typeof values[i] == "number" ){
            sum += values[i];
        }else if(typeof values[i] == "object"){
            sumOfNumValues(values[i]);
        }
    }
    return sum;    
}

// task4
let arr = new Array(6000);
arr.fill(false);
arr[1234] = true

// task5
function sortById(array){
    return array.sort((a,b) => a.libraryID - b.libraryID );
}
