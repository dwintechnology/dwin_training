https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript?collection=akvelon-basic-test

snail = function(array) {
    let arr=[]
    while(array.length>0){
      arr.push(...array.shift(),...array.map(val=>val.pop()))
      array.reverse().map(val=>val.reverse())
    }
    return arr
  }

//es mek@ lucum@ ancac shabat nayelei,bayc hima inqnuruyn greci
