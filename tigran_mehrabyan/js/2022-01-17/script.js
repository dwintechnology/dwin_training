// #1
function wait(delay) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve(1), delay);
  });
}
// wait(2000).then(console.log)

// #2
// doSomething().then(function(result) {
//     return doSomethingElse(result)
//     .then(newResult => doThirdThing(newResult));
//   }).then(() => doFourthThing());

// #3
function sum(a, b) {
  return new Promise(function (res, rej) {
    if (typeof a != "number" || typeof b != "number") {
      rej(`${a} or/and ${b} aren't numbers`);
    } else {
      res(a + b);
    }
  });
}

// sum(7, "p").then(console.log).catch(console.log).finally(console.log( "sum function is finished!" ))

// #4
const sendEmail = (userEmail) => {
  return new Promise(async (resolve, reject) => {
    //this is a fake email send logic
    setTimeout(() => {
      resolve(`Email Sent to ${userEmail}`);
    }, 3000);
  });
};
function sendEmails(arrayOfEmails) {
  arrayOfEmails.forEach((element) => {
    sendEmail(element).then(console.log);
  });
}

// #5
function foo(arrayOfPromises){
   arrayOfPromises.reduce((a, b) => {
       a.then((res) => {
          console.log(res);
          return b;
       }).then(console.log)
   } )
}

const wt = wait(5000);
const sm = sum(5, 5);
let arr = [wt, sm];

// let array = [1, 2, 3, 4, 5, 6];
// array.reduce((a,b) => {
//     console.log(a);
//     return b
// })
