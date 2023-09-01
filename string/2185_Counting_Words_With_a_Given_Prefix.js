function prefixCount(words, pref) {
    let output = 0;
  for(let i = 0; i < words.length; i++){
    if(words[i].startsWith(pref)){
      output++;
    }
  }
  return output;
};

let words = ["pay","attention","practice","attend"]
let pref = "at"
console.log(prefixCount(words, pref));

words = ["leetcode","win","loops","success"]
pref = "code"
console.log(prefixCount(words, pref));

words = ["codewars","codepractice","codefun","codesuccess"]
pref = "code"
console.log(prefixCount(words, pref));