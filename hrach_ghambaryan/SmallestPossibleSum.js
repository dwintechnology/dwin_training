https://www.codewars.com/kata/52f677797c461daaf7000740/train/javascript

function solution(numbers) {
    while(!numbers.every(elem=>elem==numbers[0])){
        numbers.sort((a,b)=>b-a)
        for(let i=0;i<numbers.length-1;i++){
          if(numbers[i]>numbers[i+1]){
            numbers[i]=numbers[i]-numbers[i+1]
          }
          if(numbers.every(elem=>elem==numbers[i])){
            break
          }
        }
    }
      return numbers[0]*numbers.length
      }


//sa el karch dzev@

function solution(numbers) {
    return numbers.length*numbers.reduce((acc,val)=>stN(acc,val))
}

function stN(a,b){
    if(b==0) return a
    else{return stN(b,a%b)}
}