function getData() {
    try {
        console.log(isPositive("-12"))
    } catch (err) {
        if(err.message === "Argument Negative Number"){
            alert(err.name)
        }else{
        throw err
        }
    } finally {
        alert("getData function is finished")
    }
}
function isPositive(num) {
    try {
        if (isNaN(num)) {
            throw new SyntaxError("Argument Not A Number Error")
        } else if (+num < 0) {
            throw new SyntaxError("Argument Negative Number")
        }
    } catch (error) {
        throw error
    }
    return num

}
try{
    getData()
}catch(e){
    alert(e)
}


