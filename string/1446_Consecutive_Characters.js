function consecutive_charachters(s) {
    let count = 1;
 let output = [];
 for(let i = 0; i < s.length; i++){
  if(s[i] == s[i+1]){
   count++;
  }
  else{
   output.push(count);
   count = 1;
  }
 }
 return Math.max(...output);
};

let s = "leetcode"
console.log(consecutive_charachters(s));

s = "abbcccddddeeeeedcba"
console.log(consecutive_charachters(s));

s = "programming"
console.log(consecutive_charachters(s));

s = "xyzxyzxyz"
console.log(consecutive_charachters(s));

s = "abcdef"
console.log(consecutive_charachters(s));