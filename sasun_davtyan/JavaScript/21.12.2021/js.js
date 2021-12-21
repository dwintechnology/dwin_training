let test = prompt("NUMBER", '');
if (test == 1) {
    let str = prompt("str===", '');
    alert(Boolean(Number(str)));
} else if (test == 2) {
    let num1 = prompt("num1==", '');
    let num2 = prompt("num2=", '');
    if (isNaN(num1) || isNaN(num2)) {
        alert(num1 + num2);
    } else {
        alert(Number(num1) + Number(num2))
    }
} else if (test == 3) {
    let num1 = prompt("num1==", '')
    let num2 = prompt("num2=", '')
    alert(num1 - num2)
} else if (test == 4) {
    let num1 = prompt("num1==", '')
    let num2 = prompt("num2=", '')
    if (Number(num1) > Number(num2)) {
        alert("num1>num2")
    } else {
        alert("num1<num2")
    }
}
else if (test == 5) {
    let num1 = prompt("num1==", '')
    let num2 = prompt("num2=", '')
    if (num1 % num2 == 0) {
        alert("No remainder")
    } else {
        alert("There is a remainder")
    }
    }else if(test >= 6 && test < 10) {
    let num1 = prompt("typof", '');
    if (isNaN(num1)) {
        alert("this is a string");
    } else {
        alert("this is a number");
    }
    } else  {
    alert("sorry");
    }
    