const options = {
    name: "test",
    with: 1024,
    height: 1024,
    color: {
        border: 'black',
        bg: 'red',
    }
};

let key;

function haveKeysOrNot (objName){
    for (key in objName) {
        console.log(Boolean(1));
        break;
    }
    if (key == undefined) {
        console.log(Boolean(0));
    }

}

haveKeysOrNot(options);
