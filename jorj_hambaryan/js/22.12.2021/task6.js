// TASK - 6
// Write a function to sum the multiples of 3 and 5 under 1000.

function numbersOfSum(print) {
        let a = 0;
    
        for (let i = 15; i <= 1000 ; i+=15){
        a += i;
        }
        print(a);
    }
    
    numbersOfSum(console.log);