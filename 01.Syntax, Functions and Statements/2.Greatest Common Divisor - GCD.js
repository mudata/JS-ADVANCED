function gcd(x,y){
    while(y) {
        var t = y;
        //console.log(y)
        y = x % y;
        //console.log(y)
        x = t;
      }
      return x;
}
console.log(gcd(50, 10))