let num = +prompt("mutqagreq tiv")
let x = true
    for(i = 2; i <= Math.sqrt(num); i++ ){
    if(num%i===0){
        x = !x
        break
    }
}    
if(x){
    alert(num + " tivy parz e ")
}else{
    alert("dzer mutqagrac tivy parz che")
}