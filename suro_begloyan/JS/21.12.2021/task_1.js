  let fibnum1 = 0;
        let fibnum2 = 1;
        let number; 
        let n = +prompt("mutqagreq tivy"); 
        if(n < 0){
            alert(error)
        }else if(n === 0 || n === 1){
            number = n
        }  
        for(let i = 2; i <= n; i++){
           number = fibnum1 + fibnum2
           fibnum1 = fibnum2
           fibnum2 = number 
        }
        alert(number)