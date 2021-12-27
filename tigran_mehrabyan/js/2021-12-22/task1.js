

// algortm@ asuma: verdznum enq araji element@ u swap enq anum bolori het(nuynisk ira)
// heto mer cucich@ gnuma mi hat aj,hamarelov vor araji element@ el chka(dzaxic mi hat ktrum enq)
// u ste kanchum enq mer function@(recursion) arden mi element poqr array-i hamar



/* start@ mer cucichna vor@ amen angam gnalua mi hat aj minchev naxaverji tiv@*/
function permutation(arr, start) { 
    // let arr = String(number).split("");
    if (arr.lenght - 1 == start) {
         console.log(arr);
    }
    // debugger
    for (let index = start; index < arr.length; index++) {
        
        let temp = arr[start];/*swap*/
        arr[start] = arr[index];
        arr[index] = temp;
        permutation(arr, start + 1);
    }
}

permutation([1, 2, 3], 0);
