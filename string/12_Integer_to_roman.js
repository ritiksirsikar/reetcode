function integerto_roman(num){
  var symList = [["I", 1], ["IV", 4], ["V", 5], ["IX", 9], ["X", 10], ["XL", 40], ["L", 50], ["XC", 90], ["C", 100], ["CD", 400], ["D", 500], ["CM", 900], ["M", 1000]];

  var res = "";
  for (var i = symList.length - 1; i >= 0; i--) {
    var sym = symList[i][0];
    var val = symList[i][1];

    if (Math.floor(num / val)) {
      var count = Math.floor(num / val);
      res += sym.repeat(count);
      num = num % val;
    }
  }

  return res;
}


let num = 3;
console.log(integerto_roman(num));

num = 58;
console.log(integerto_roman(num));

num = 1994;
console.log(integerto_roman(num));

num = 58;
console.log(integerto_roman(num));

num = 121;
console.log(integerto_roman(num));

num = 5;
console.log(integerto_roman(num));

num = 196;
console.log(integerto_roman(num));