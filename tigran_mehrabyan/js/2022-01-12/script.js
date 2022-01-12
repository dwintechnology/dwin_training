// #1
let dateNow = new Date();

// #2
new Date("2017-01-01");

// #3
let today = new Date();
let jan_1_2017 = new Date("2017-01-01");
let diffInMs = today - jan_1_2017;
let numberOfWeeks = Math.floor(diffInMs / 1000 / 3600 / 24 / 7);

// #4
// let array =[];
// let date = new Date("2021-12-01");
// let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
// function getShortDate(date){
//     return date.getFullYear() + "-" + months[date.getMonth()] + "-" + date.getDate();
// }
// for (let i = 0; i < 43; i++) {
//     let temp1 = date.setDate(date.getDate() + i);
//     let temp2 = getShortDate(temp1)
//     array.push(temp2)
// }

// #5
function ifInLast5Days(date) {
  let now = new Date();
  let diff = now - date;
  if (diff > 1000 * 3600 * 24 * 5) {
    return false;
  }
  return true;
}

// #6
function getAgeGroup(user) {
  let now = new Date();
  let birthDate = new Date(user.birthday);
  let temp = now - birthDate;
  temp = temp / 1000 / 3600 / 24 / 365;
  switch (true) {
    case temp > 0 && temp <= 3:
      return "baby";
      break;
    case temp > 3 && temp <= 9:
      return "child";
      break;
    case temp > 9 && temp <= 12:
      return "pre teen";
      break;
    case temp > 12 && temp <= 17:
      return "teenager";
      break;
    case temp > 17 && temp <= 24:
      return "young adult";
      break;
    case temp > 24 && temp <= 60:
      return "adult";
      break;
    case temp > 60:
      return "adult";
      break;
  }
}

const user = {
    name: "John",
    birthday: "2011/01/25"
 }
