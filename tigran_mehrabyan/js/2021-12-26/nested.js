function nestedToOneLevel(obj,outputObj, str){    
    for (const key in obj) {
        str = str + key;
        if(typeof(obj[key]) !== "object") {
            outputObj[str] = obj[key];
            str = str.replace(key, "");

        }else{
            str = str + "_";
            nestedToOneLevel(obj[key],outputObj, str);
        }
    }
    return outputObj;
}

let user = {
    x1: 1,
    x2: {
        x3: 3,
        x4: {
            x5: 5,
            x6: {
                x7:{
                    x8: 8
                }

            }
        }
    }

}

let otherUser = {
    x1: 1,
    x2_x3: 3,
    x2_x4_x5: 5,
    x2_x4_x6_x7_x8: 8

}
let obj = {}
// let res = nestedToOneLevel(user, obj, "");

let resultObject = {}
function oneLevelToNested(obj){
    for (const key in obj) {
        let keys = key.split("_");
        if(keys.lenght == 1){
            resultObject[keys[0]] = obj[key];
        }else{
            resultObject[keys[0]] = {};
        }
    }
    return resultObject;
}
// let result = oneLevelToNested(otherUser);
