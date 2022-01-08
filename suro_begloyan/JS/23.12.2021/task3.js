let object_one = {
    age: 18,
    obj: {
        name: "clone",
        mard: {
            name: 'Suren', 
            surname: 'Begloyan',
            isFrom: {
                village: false,
                city: true,
                hi: {
                    hello: true
                }
            }
        }
    }
}
function deepClone(clone){
    let new_object = {};
    for(let key in clone ){
        if(typeof clone[key] === "object"){
            new_object[key] = deepClone(clone[key]);
        } else {
            new_object[key] = clone[key];
        }
    }
    return new_object;
}

let object_two = deepClone(object_one)
console.log(object_two);