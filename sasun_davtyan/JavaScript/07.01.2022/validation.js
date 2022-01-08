function validateCreditCard(numbersOnCard) {

    let creditCardNum = '';
    for (let i = 0; i < numbersOnCard.length; i++) {
      if (numbersOnCard[i] !== '-') {
        creditCardNum += numbersOnCard[i];
      }
    }
    if (creditCardNum.length !== 16) {
      // console.log("{valid:false , number: ", creditCardNum,"error: wrong_length}" )
      console.error("{valid:false , number: ", creditCardNum, "error: wrong_length}")
      return false;
    }
    for (let i = 0; i < creditCardNum.length; i++) {
      let currentNumber = creditCardNum[i];
      currentNumber = Number.parseInt(currentNumber);
      if (!Number.isInteger(currentNumber)) {
        console.error("{valid:false , number: ", creditCardNum, "error:there are letters}")
        return false;
      }
    }
    let obj = {};
    for (let i = 0; i < creditCardNum.length; i++) {
      obj[creditCardNum[i]] = true;
    }
    if (Object.keys(obj).length < 2) {
      console.error("{valid:false , number: ", creditCardNum, "error: the same number}")
      return false;
    }
    if (creditCardNum[creditCardNum.length - 1] % 2 !== 0) {
      console.error("{valid:false , number: ", creditCardNum, "error:it's an odd number}")
      return false;
    }
    var sum = 0;
    for (var i = 0; i < creditCardNum.length; i++) {
      sum += Number(creditCardNum[i]);
    }
    if (sum <= 16) {
      console.error("{valid:false , number: ", creditCardNum, "error:sum of numbers less than 16}")
      return false;
    }
    return true;
    };
    
    //cvc kod
    function validateCreditCardCvc(cvcNumbers) {
    if ((cvcNumbers.length !== 3) || (isNaN(cvcNumbers))) {
      console.log("Error: does not match")
      return false;
    }
    return true;
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
    function checkFname(x){
    return /^[a-zA-Z]+$/.test(x)
    };
    
    function checkLname(y){
    return /^[a-zA-Z]+$/.test(y)
    };
    //datati stugum
    function checkDate(date){
      return  /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/.test(date);
    }
    //qarti tveri stugum
    function checkCardNumbers(obj, cardNumbers) {
    let cCardresult;
    for (let key in obj) {
      cCardresult = validateCreditCard(cardNumbers);
      if (cCardresult) {
        return true;
      }
      return false;
    }
    }
    //stugum enq cvc
    function checkCVC(obj, cvcNumbers) {
    let cvcResult;
    for (let key in obj) {
      let cvcResult = validateCreditCardCvc(cvcNumbers);
      if (cvcResult) {
        return true;
      }
      return false;
    }
    }
    //bolor tvyalneri stugums
    function addTruesDatesObj(){
    let checkCardNane = checkCardNumbers(obj, obj.cardNumbers);
    let checkCvc =  checkCVC(obj, obj.cvc); 
    let checkFName = checkFname(obj.Name);
    let checkLName = checkLname(obj.LName);
    let checkDAte = checkDate(obj.date);
    if((checkCardNane)&&(checkCvc)&&(checkFName)&&(checkLName)&&(checkDAte)){
    newObj.Name = obj.Name;
    newObj.LName = obj.LName;
    newObj.cardNumbers = obj.cardNumbers
    newObj.cvc = obj.cvc
    newObj.date = obj.date;
    alert("Everything is correct. get high!!!!!!!")
    }
    return false;
    }
    addTruesDatesObj();
    console.log("my new object", newObj)