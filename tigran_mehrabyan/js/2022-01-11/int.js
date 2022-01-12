function getInts(from, to){
    if(Math.ceil(from) == Math.floor(to)){
        console.log(Math.ceil(from))
        return;
    }
    console.log(Math.ceil(from))
    getInts(from + 1, to)

}