// class task
function findIndex(array, value) {
    try {
      for (let i = 0; i < array.length; i++) {
        if (array[i] == value) {
          return `index of ${value} is ${i}`;
        }
      }
      throw new Error("wrong value");
    } catch (err) {
      console.log("EROR :" + err.message);
    } finally {
      console.log("function is finished");
    }
  }
  
  // homewrok task
  
  function isPositive(str) {
    try {
      if (typeof str != "number") {
        throw new Error("NotANumberError");
      }
      if (str < 0) {
        throw new Error("NegativeNumber");
      }
    } catch (err) {
      throw err;
    }
  }
  function getData(){
    try{
      isPositive(ko)
    }
    catch(err){
      if(err.message == "NegativeNumber"){
        alert("ERROR:" + err.message)
      }else if(err.message == "NotANumberError"){
        console.log("ERROR : " + err.message);
      }else{
        throw err;
      }
    }
    finally{
      console.log("getData function is finished")
    }
  }
  try{
    getData();
  }
  catch(err) {
    console.log("Another Error :" + err.message)
  }