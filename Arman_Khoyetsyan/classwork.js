// 28.12.21


// 1. Ստուգել տրված տողը ստորակետով թիվ է թե ոչ:
//  function foo(str){
//      let index = str.indexOf(",")
//      if(index > 0){
//          return true
//      }else{
//         return false
//      }
//  }

//2. Եթե տրված տողը Integer է տպել “n is integer number”, Եթե ստորակետով թիվ  է տպել
//       “n is floating number”, հակառակ դեպքում տպել “Not A Number”
// function numberInteger ( text  ){
//     if (typeof(text)=== "number"){
//         if(Number.isInteger(text)){
//             alert("n is integer number")
//         }else{
//             alert("n is floating number")
//         }
//     }else{
//         "Not A Numbe"
//     }
// }




//3. $ to AMD կոնվերտոր
//- արդյունքը կլորացնել հարյուրերոդական ճշտությամբ

// function converter( num ){
//     let exchangeRate = num * 485
//     exchangeRate = exchangeRate.toFixed(2)
//  return exchangeRate
// }
// alert(converter(73.5))


//5. Գրել ֆունկցիա որը 50/50 հարաբերակցությամբ կտպի 1 կամ 0
// function getRandomMark() {
//     return Math.floor(Math.random() *  2);
// }
// alert(getRandomMark())

//6. Գրել ֆունկցիա որը կստուգի արդյքո տրված 5 թվերի ամենամեծի խորանարդը մեծ է ամենափոքրի 4 աստիճանից

// function goo(a, b, c, d, e) {
//     let max = Math.max(a, b, c, d, e)
//     let min = Math.min(a, b, c, d, e)
//     max = Math.pow(max, 3)
//     min = Math.pow(min, 4)
//     if (max > min) {
//         return true
//     }
//     return false
// }
// goo(3, 6, 9, 4, 5)



//29.12.21



function getNotComent(arr, arr2) {
    let notComent = []
    
    for(let i of arr){
        if(arr2.indexOf(i)!== -1){
            if(!notComent.includes(i)){
                notComent.push(i)
            }
        }
        
    }
    return notComent

}


console.log(getNotComent([1,2,2,2,2,2,3,4,5,6],[1,2,6,6,6,6,6,6,3,8,9]))