function anagrams(word, words) {
    let arr=[]
    word=word.split('').sort().join('')
    for(let i=0;i<words.length;i++){
      let current=words[i].split('').sort().join('')
      if(current===word){
        arr.push(words[i])
      }
    }
    return arr
  }
  anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])