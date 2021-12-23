function getLargest(a, b, c, d, e) {
    if (a > b && a > c && a > d && a > e) {
      return a;
    }
    if (b > a && b > c && b > d && b > e) {
      return b;
    }
    if (c > a && c > b && c > d && a > e) {
      return c;
    }
    if (d > a && d > b && d > c && d > e) {
      return d;
    }
    if (e > a && e > b && e > c && e > d) {
      return e;
    }
  }
  let max = getLargest(20,102,-23,1240,1113);
  console.log(max);