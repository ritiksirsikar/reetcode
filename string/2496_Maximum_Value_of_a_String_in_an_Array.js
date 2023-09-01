function maximum_value(strs) {
    let maxVal = 0;
  for (let s of strs) {
    let val = 0;
    for (let c of s) {
      if (!isNaN(c)) {
        val = val * 10 + parseInt(c);
      } else {
        val = s.length;
        break;
      }
    }
    maxVal = Math.max(maxVal, val);
  }
  return maxVal;
};

let strs = ["alic3","bob","3","4","00000"];
console.log(maximum_value(strs));

strs = ["1","01","001","0001"]
console.log(maximum_value(strs));

