const options = {
    name: "test",
    with: 1024,
    height: 1024,
    color: {
        border: 'black',
        bg: 'red',
        ob: {
            ob1: "zrzar",
            ob2: "zarzar"
        }
    }
};

debugger;

function dup(o) {
    // "string", number, boolean
    if(typeof(o) != "object") {
        return o;
    }
    
     // null
    if(!o) {
        return o; // null
    }
    
    var r = (o instanceof Array) ? [] : {};
    for(var i in o) {
        if(o.hasOwnProperty(i)) {
            r[i] = dup(o[i]);
        }
    }
    return r;
}



dup(options);
console.log(options);