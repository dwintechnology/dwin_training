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

// Flattens an hierarchical map into a single level
  function flattenMap(map,str='',obj={}) {
    for(let x in map){
      let y=map[x]
      if(typeof y==='object'&&!Array.isArray(y)&&y!==null){
        flattenMap(y,str+x+'/',obj)
      }
      else{
        obj[str+x]=y
      }
    }
    return obj
  }
  flattenMap({
    'a': {
      'b': {
        'c': 12,
        'd': 'Hello World'
      },
      'e': [1,2,3],
      'f':null
    }
  })