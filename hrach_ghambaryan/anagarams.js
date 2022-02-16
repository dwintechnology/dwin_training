https://www.codewars.com/kata/523a86aa4230ebb5420001e1/train/javascript?collection=akvelon-basic-test

function anagrams(word, words) {
    word=word.split('').sort().join('')
    let arr=words.filter(val=>val.split('').sort().join('')===word)
    return arr
  }

