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
  let max = getLargest(4,12,23,124,-13);
  console.log(max);