// credit card valisation

function isEveryDigitNumber(string){
    if(string.length != 16){
        return false;
    }
    let array = string.split("");
    for (let i = 0; i < array.length; i++) {
        if(isNaN(array[i])){
            return false;
        }
    }
    return true;
}

function isValidLengthAndDigits(string){
    if(string.length != 16 && string.length != 19){
        return false;
    }
    if(string.length === 16){
        return isEveryDigitNumber(string);
    }
    if(string.indexOf("-") == 4 && string.indexOf("-", 5) == 9 && string.indexOf("-", 10) == 14){
        let arr = string.split("-");
        let str = arr[0] + arr[1] + arr[2] + arr[3];
        return isEveryDigitNumber(str);
        isEveryDigitNumber
    }
}

function isLastDigitEven(string){
    return (string[string.length - 1] % 2 == 0) ? true : false
}

function isSumMoreThen16(string){
    let array = string.split("");
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return (sum > 16) ? true : false
}
function isAtLeastTwoDiffDigits(string){
    let array = string.split("");
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if(array[i] != array[j]){
                return true;
            }
        }
    }
    return false
}



// MAIN FUNCTION #1

function whetherCardValid(string){
    let str = "";
    if(!(isValidLengthAndDigits(string))){
        return {
            valid: false,
            number: string,
            error: "wrong length or wrong digits(digits must be number)"
        }
    }
    if(string.length === 19){
        let arr = string.split("-");
        str = str.join("");
    }else{
        str = string;
    }
    if(!(isLastDigitEven(str))){
        return {
            valid: false,
            number: string,
            error: "last digit cannot be odd"
        }
    }
    if(!(isSumMoreThen16(str))){
        return {
            valid: false,
            number: string,
            error: "sum of digits must be more then 16"
        }
    }
    if(!(isAtLeastTwoDiffDigits(str))){
        return {
            valid: false,
            number: string,
            error: "all of the digits cannot be the same"
        }
    }

    return {
        valid: true,
        number: string
    }
}


// task3.3

function isValidName(object){
    if(!(object.hasOwnProperty("name"))){
        return false;
    }
    let temp = object.name;
    temp = temp.split(" ");
    if(temp.length != 2){
        return false
    }
    temp = temp[0] + temp[1];
    temp = temp.split("");
    for (let i = 0; i < temp.length; i++) {
        if(temp[i].toLowerCase() == temp[i].toUpperCase()){
            return false;
        }
    }
    return true;

}
function isValidCVC(object){
    if(!(object.hasOwnProperty("CVC"))){
        return false;
    }
    let temp = object.CVC;
    temp = temp.toString();
    temp = temp.split("");
    if(temp.length != 3 ){
        return false;
    }
    for (let i = 0; i < temp.length; i++) {
        if(isNaN(temp[i])){
            return false;
        }
    }
    return true;
}
function isValidCardNumber(object){
    if(!(object.hasOwnProperty("cardNumber"))){
        return false;
    }
    let temp = object.cardNumber;
    temp = temp.toString();
    temp = whetherCardValid(temp)
    return (temp.valid == true) ? true : false;
}
function isValidExpirationDate(object){
    if(!(object.hasOwnProperty("expirationDate"))){
        return false;
    }
    let temp = object.expirationDate;
    if(temp.charAt(2) != "/" || temp.length != 5){
        return false;
    }
    temp = temp.split("/");
    if(isNaN(temp[0]) || isNaN(temp[1])){
        return false;
    }
    return true;

}


// MAIN FUNCTION #2
function isCardFullValid(object){
    if(!(isValidName(object))){
        return {
            valid: false,
            error: "wrong name"
        }
    }
    if(!(isValidCVC(object))){
        return {
            valid: false,
            error: "wrong CVC"
        }
    }
    if(!(isValidCardNumber(object))){
        return {
            valid: false,
            error: "wrong card number"
        }
    }
    if(!(isValidExpirationDate(object))){
        return {
            valid: false,
            error: "wrong expiration date"
        }
    }
    return {
        valid: true
    }
}
















// Task4


let creditCard1 = {
    name: "John surname",
    CVC: 969,
    cardNumber: "1234-1234-1234-1234",
    expirationDate: "01/11",
    balance: 0,
    addMoney: function(money){
        this.balance += money;
    }
}
let creditCard2 = {
    name: "Joe surname",
    CVC: 757,
    cardNumber: "2344-2344-2344-2344",
    expirationDate: "02/22",
    balance: 0,
    addMoney: function(money){
        this.balance += money;
    }
}


let cookies = [{name: "biscuit", price: 20}, {name: "cinabon", price: 30}]
 
// MAIN OBJECT

let user = {
    name: "John",
    gender: "male",
    creditCards: [],
    addCreditCard: function(object){
        let temp = isCardFullValid(object)
        if(temp.valid){
            this.creditCards.push(object)
        }
    },
    buyCookie: function(cookieName, cardNumber){
        let cookie;
        for (let i = 0; i < cookies.length; i++) {
            if(cookies[i].name == cookieName){
                cookie = cookies[i];
            }            
        }
        for (let i = 0; i < this.creditCards.length; i++) {
            if(this.creditCards[i].cardNumber == cardNumber){
                if(this.creditCards[i].balance >= cookie.price){
                    this.creditCards[i].balance -= cookie.price;
                    return {
                        name: cookie.name,
                        status: "success"
                    }
                }
            }
        }
        return {
            name: cookie.name,
            status: "failed"
        }
    }
}

// test
creditCard1.addMoney(100)
user.addCreditCard(creditCard1)
user.addCreditCard(creditCard2)
user.buyCookie("cinabon", "2344-2344-2344-2344") 
/* expected output: return {
            name: cookie.name,
            status: "failed"
        } */
user.buyCookie("cinabon", "1234-1234-1234-1234")
/* expected output: return {
            name: cookie.name,
            status: "success"
        } */



