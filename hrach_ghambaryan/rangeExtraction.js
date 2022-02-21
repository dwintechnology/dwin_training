https://www.codewars.com/kata/51ba717bb08c1cd60f00002f/train/javascript?collection=akvelon-basic-test

function solution(list){
    let n=0,arr=[]
    for(let i=0;i<list.length;i++){
      if(list[i+1]-list[i]!==1){
        arr.push(list.slice(n,i+1))
        n=i+1
      }
    }
    return arr.map(val=>{
        if(val.length>2) return val[0]+'-'+val[val.length-1]
        return val
    }
  ).join(',')
  }