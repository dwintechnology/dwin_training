let obj = {
    'a': {
      'b': {
        'c': 12,
        'd': 'Hello World'
      },
      'e': 25
    }
  }
const changeObj = (obj) => {
    let result = {};
    for (const i in obj) {    
        if (typeof obj[i] === 'object' ) {
            const temp = changeObj(obj[i]);
            for (const j in temp) {
                result[i + '_' + j] = temp[j];
            }
        }
        else {
            result[i] = obj[i];
        }
    }
    return result;
};
 
const finaly_obj=changeObj(obj);
console.log(finaly_obj)