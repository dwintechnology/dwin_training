https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript?collection=akvelon-basic-test

function pigIt(str){
    let arr=str.split(' ')
  for(let i=0;i<arr.length;i++){
    if(arr[i].match(/[A-Za-z]/)){
      arr[i]=arr[i].slice(1)+arr[i][0]+'ay'
    }
  }
    return arr.join(' ')
  }