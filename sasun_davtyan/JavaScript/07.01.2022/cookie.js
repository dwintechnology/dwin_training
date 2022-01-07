//user credit card and info or this card
let UserCreditCard = {
    name: "john Smith",
    cardNumbers:"9999-8888-7777-6666",
    date: "10/2029",
    CVC: "123",
    balance: 0,
    addMoney : function(money){
        this.balance += money
    },
}
UserCreditCard.addMoney(200);
//object user
let user = {
  Name:'bob',
  gender:"male",
  creditCardArray:[], 
  addCreditCard: function(numbersOnCard){
      let cardNumbers = validateCreditCard(numbersOnCard);
      if(cardNumbers){
          this.creditCardArray.push(numbersOnCard);
      }
  }
}
user.addCreditCard(UserCreditCard.cardNumbers);
//cookies
let cookies = {
    cookies1:{
        name:"biscuit",
        price: "22",
    },
    cookies2:{
        name:"macaron",
        price:"50",
    },
    cookies3:{
        name:"Chocolate Chip",
        price:"70",
    },
    cookies4:{
        name:"Shortbread  Cookies",
        price:"100",
    },
  };
  let cookiesArray = Object.values(obj);        
  // finch
  
function buyCookie(cookieName, cardNumber){
        let temp;       
  for (let i = 0;i<cookiesArray.length;i++){
      if (cookiesArray[i].name === cookieName){
          temp = cookiesArray[i]
      }
  }
for(let i =0;i<user.creditCardArray.lenght;i++){
    if(creditCardArray[i]===cardNumber){
        if(UserCreditCard[i].blannce >=cookiesArray.price ){
            UserCreditCard[i].balance -=cookiesArray.price;
            return {
                cookie: "name",
                status:"success",
            }
        }
    }

}
return {
    cookie: "name",
    status:"failed",
}
};
console.log( buyCookie("biscuit","9999-8888-7777-6666"))
  