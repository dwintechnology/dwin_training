const obj ={
    name:"bobol",
    age: 33,
  };
  function isEmpty(obj) {
      for(let key in obj) {
          if(!obj.hasOwnProperty(key)){
              return false;
          }else {
            return true;
          }
              
      }
  }
  const a = isEmpty(obj)
  console.log(a);