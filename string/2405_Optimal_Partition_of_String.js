function partitionString(s) {
    let output = 1;
  let set = new Set();
  for(let i = 0; i < s.length; i++){
    if(set.has(s[i])){
      output++
      set.clear();
      set.add(s[i]);
     }
    else{
      set.add(s[i]);
    }
  }
  return output;
};

let s = "abacaba"
console.log(partitionString(s));

s = "ssssss"
console.log(partitionString(s));

s = "Leetcode"
console.log(partitionString(s));