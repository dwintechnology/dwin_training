https://www.codewars.com/kata/5b1b27c8f60e99a467000041/train/javascript?collection=akvelon-basic-test

function anagramDifference(w1,w2){
    let str=''
     let obj=w1.split('').reduce((acc,val)=>{
       acc[val]=acc[val]?acc[val]+1:1
       return acc
     },{})
    for(let i=0;i<w2.length;i++){
      let current=w2[i]
      if(obj[current]&&obj[current]!=0){
        obj[current]--
        str+=current
      }
    }
    return (w1.length+w2.length)-2*str.length
  }
  