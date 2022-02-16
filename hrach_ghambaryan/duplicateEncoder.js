https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript?collection=akvelon-basic-test

function duplicateEncode(word){
  word=word.toLowerCase()
  let str=''
    for(let i=0;i<word.length;i++){
      let current=word[i]
      if(word.indexOf(current)===word.lastIndexOf(current)){
        str+='('
      }
      else{
        str+=')'
      }
    }
  return str
}
