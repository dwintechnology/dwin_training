let outputArray = [];

function permute(arr, start){

    if(start == arr.length ){

        let temp = +arr.join("");
        outputArray.push(temp)
    }
    for (let i = start; i < arr.length ; i++) {
        let temp = arr[start];
        arr[start] = arr[i];
        arr[i] = temp;
        permute(arr.slice(), start + 1);      
    }
    return outputArray;

}


function isPrime(n) {
        let primity = true;
        if(n > 3){
            for (let i = 2; i <= Math.sqrt(n); i ++) {
                if (n % i == 0) {
                    primity = false;
                    break;
                }  
            }  
        }else if( n < 2){
            primity = false;
        }
        
        return primity;
    }    
    function biggestPrime(){
        let arrayForChecking = permute([1, 2, 3, 4], 0);
        let primes = [];

        arrayForChecking = arrayForChecking.sort((a, b) => b-a);

        for (let index = 0; index < arrayForChecking.length; index++) {
            let temp = arrayForChecking[index];
            if(isPrime(temp)){
                console.log(temp)
                break;
            }
            
        }
    }
   
    