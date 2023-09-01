function repeatedCharachter(s) {
    let set = new Set();
  for(let i = 0; i < s.length; i++){
    if(!set.has(s[i])){
      set.add(s[i]);
    }
    else{
      return s[i];
    }
  }
};

let s = "abccbaacz"
console.log(repeatedCharachter(s));

s = "loool";
console.log(repeatedCharachter(s));

s = "lol"
console.log(repeatedCharachter(s));

s = "abcdd";
console.log(repeatedCharachter(s));

