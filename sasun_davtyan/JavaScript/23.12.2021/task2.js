const obj ={
    name:"bobol",
    age: 33,
  };
  function hasPropery(obj, prop) {
      for(let key in obj) {
          if( key === prop){
              return true;
          }else {
            return false;
          }
              
      }
  }
  
  const e = hasPropery(obj, "name1")
  console.log(e)