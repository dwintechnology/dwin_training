// #1
function ucFirst(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

//#2
function checkSpam(str){
    if(str.toUpperCase().includes("VIAGRA") || str.toUpperCase().includes("XXX") ){
        return true;
    }else {
        return false;
    }
}

// #3
function truncate(str, maxlength){
    if(str.length > maxlength){
        return str.slice(0, maxlength).concat("...");
    }else{
        return str  
    }
}

// #4
function extractCurrencyValue(str){
    return +str.slice(1);
}