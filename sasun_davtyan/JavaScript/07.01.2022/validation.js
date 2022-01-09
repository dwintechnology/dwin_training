function validateCreditCard(numbersOnCard) {
  let creditCardNum;
  if (numbersOnCard.indexOf("-") == 4 && numbersOnCard.indexOf("-", 5) == 9 && numbersOnCard.indexOf("-", 10) == 14) {
    let part = numbersOnCard.split("-");
    creditCardNum = part[0] + part[1] + part[2] + part[3];

  }
  if (creditCardNum.length !== 16) {
    return {
      valid: false,
      number: creditCardNum,
      error: "wrong_length"
    }
  }
  for (let i = 0; i < creditCardNum.length; i++) {
    let currentNumber = creditCardNum[i];
    currentNumber = Number.parseInt(currentNumber);
    if (!Number.isInteger(currentNumber)) {
      return {
        valid: false,
        number: creditCardNum,
        error: "there are letters",
      }
    }
  }
  // for (let i = 0; i < creditCardNum.length; i++) {
  //   for (let j = 0; j < creditCardNum.length; j++) {
  //     if (creditCardNum[i] == creditCardNum[j]) {
  //       return {
  //         valid: false,
  //         number: creditCardNum,
  //         error: "the same number",
  //       }
  //     }
  //   } 
  // }
  if (creditCardNum[creditCardNum.length - 1] % 2 !== 0) {
    return {
      valid: false,
      number: creditCardNum,
      error: "it's an odd number",
    }
  }
  var sum = 0;
  for (var i = 0; i < creditCardNum.length; i++) {
    sum += Number(creditCardNum[i]);
  }
  if (sum <= 16) {
    return {
      valid: false,
      number: creditCardNum,
      error: "sum of numbers less than 16",
    }
  }
  return {
    valid: true,
    number: creditCardNum,
  }
};


//cvc kod
function validateCreditCardCvc(cvcNumbers) {
  return /^([0-9]|[0-9]|[0-9])$/.test(cvcNumbers)
}

//tvyalneri nermucum
let obj = {}
let newObj = {}
//***** */
function addDateInObj() {
  obj.Name = prompt("your first name");
  obj.LName = prompt("your last name");
  obj.cardNumbers = prompt("Please dial your card number");
  obj.cvc = prompt("please dial the number on the back of your card:CVC");
  obj.date = prompt("dial the validity period of your card(month/year)")
}
addDateInObj();

//anun azganun stugum
function checkFname(x) {
  return /^[a-zA-Z]+$/.test(x)
};

function checkLname(y) {
  return /^[a-zA-Z]+$/.test(y)
};
//datati stugum
function checkDate(date) {
  return /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/.test(date);
}
//qarti tveri stugum
function checkCardNumbers(cardNumbers) {
  let cCardresult = validateCreditCard(cardNumbers);
  if (cCardresult) {
    return true;
  }
  return false;

}
//stugum enq cvc
function checkCVC(cvcNumbers) {
  let cvcResult = validateCreditCardCvc(cvcNumbers);
  if (cvcResult) {
    return true;
  }
  return false;
}
//bolor tvyalneri stugums
function addTruesDatesObj() {
  let checkCardNane = checkCardNumbers(obj, obj.cardNumbers);
  let checkCvc = checkCVC(obj, obj.cvc);
  let checkFName = checkFname(obj.Name);
  let checkLName = checkLname(obj.LName);
  let checkDAte = checkDate(obj.date);
  if ((checkCardNane) && (checkCvc) && (checkFName) && (checkLName) && (checkDAte)) {
    newObj = obj;
    alert("Everything is correct. get high!!!!!!!")
  }
  return false;
}
addTruesDatesObj();
console.log("my new object", newObj)