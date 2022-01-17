function repeatFunc(str, number, callBack) {
    let result = "";
    while (number > 0) {
        result += callBack(str)
        number--;
        console.log(result)
    }
}
function itsCallBack(str) {
    let possible = "jgpaosjgposakflsfapf";
    str = str + " " + possible.charAt(Math.floor(Math.random() * possible.length));
    return str;
}
repeatFunc('askfo', 2, itsCallBack)