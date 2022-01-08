let obj = {
    'a_b_c': 20,
    'b_c_d': 'Hello World',
    'd_e': 10
  }
  const changeObj = (obj) => {
      let result = {};
      for (const i in obj) {
          if(i.includes('_')){
              if(result[i.split('_')[0]]) {
                  result[i.split('_')[0]] = changeObj({[i.slice(i.indexOf('_') + 1)]: obj[i]})
              } else {
                  if(i.includes('_')) {
                      result[i.split('_')[0]] = changeObj({[i.slice(i.indexOf('_') + 1)]: obj[i]})
                  }
              }
          } else {
              result[i] = obj[i];
          }
      }
      return result;
  };
  const finaly_obj=changeObj(obj);
  console.log(finaly_obj);