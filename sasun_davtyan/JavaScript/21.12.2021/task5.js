

function factorial(n,print) {
    let  result = n;
      for (let i = n - 1; i > 1; --i) {
      result =result *i;
      }
      print(result);
      return result;
      }
  factorial(6,console.log)