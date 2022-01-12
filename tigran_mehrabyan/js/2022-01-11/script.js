// sum of array integers
function foo(array){

    // debugger;
    let temp = 0;

    if(array.length == 1){
        return array[0];
    }
    temp = array[array.length - 1] + array[array.length -2 ];
    array[array.length -2 ] = temp;

    array.pop();
    return foo(array);
}


