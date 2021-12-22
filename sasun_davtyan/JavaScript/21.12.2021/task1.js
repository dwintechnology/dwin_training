function fibon(n,print) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
      print(c)
    }
    return b;
  }
  fibon(12,console.log)

