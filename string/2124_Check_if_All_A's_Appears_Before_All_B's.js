function checkall(s) {
    let aoutput = [];
  let boutput = [];
  for (let i = 0; i < s.length; i++) {
  if (s[i] === 'a') {
    const index = s.indexOf('a', i); // Search for 'a' starting at index i
    if (index >= 0) {
      aoutput.push(index);
    }
  }
  if (s[i] === 'b') {
    const index = s.indexOf('b', i); // Search for 'b' starting at index i
    if (index >= 0) {
      boutput.push(index);
    }
  }
}
  for(let i = 0; i < aoutput.length; i++){
    for(let j = 0 ; j < boutput.length; j++){
      if(aoutput[i] > boutput[j]){
        return false;
      }
    }
  }
  return true;
};

let s = "aaabbb"
console.log(checkall(s));

s = "abab"
console.log(checkall(s));

s = "bbb"
console.log(checkall(s));

s = "00110110";
k = 2;
console.log(hasAllCodes(s, k)); 

s = "1010101";
k = 3;
console.log(hasAllCodes(s, k)); 