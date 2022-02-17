https://www.codewars.com/kata/583af10620dda4da270000c5/train/javascript?collection=akvelon-basic-test

function mergeArrays(a, b) {
    let c=Math.max(a.length,b.length),arr=[]
    for(let i=0;i<c;i++){
      if(a[i]) arr.push(a[i])
      if(b[i]) arr.push(b[i])
    }
    return arr
  }