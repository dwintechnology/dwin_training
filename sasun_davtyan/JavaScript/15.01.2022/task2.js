function repeatFunc(str, number, callBack) {
    let result = "";
    while (number > 0) {
        result += callBack(str)
        number--;
        console.log(result)
    }
}
function itsCallBack(str) {
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    str = str + " " + possible.charAt(Math.floor(Math.random() * possible.length));
    return str;
}
repeatFunc('abc', 2, itsCallBack)