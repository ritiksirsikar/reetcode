function zigzag_conversion(s, numRows){
    if (numRows === 1) return s;

    let res = "";
    for (let r = 0; r < numRows; r++) {
        let increment = 2 * (numRows - 1);
        for (let i = r; i < s.length; i += increment) {
            res += s[i];
            if (r > 0 && r < numRows - 1 && i + increment - 2 * r < s.length) {
                res += s[i + increment - 2 * r];
            }
        }
    }

    return res;
  }
  let s = "PAYPALISHIRING"
  let numRows = 3
  console.log(zigzag_conversion(s, numRows));

  s = "PAYPALISHIRING", numRows = 4
console.log(zigzag_conversion(s, numRows));
  
  s = "a", numRows = 1
  console.log(zigzag_conversion(s, numRows));
  
  s = "bob",numRows = 1
  console.log(zigzag_conversion(s, numRows));

  s = "apple", numRows = 3
  console.log(zigzag_conversion(s, numRows));