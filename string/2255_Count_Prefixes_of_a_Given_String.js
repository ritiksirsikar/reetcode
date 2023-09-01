function countPrefixes(words, s) {
    let count = 0;
  for (let word of words) {
    let i = 0;
    for (let char of s) {
      if (char !== word[i]) {
        break;
      }
      i++;
    }
    if (i === word.length) {
      count++;
    }
  }
  return count;
};

let words = ["a","b","c","ab","bc","abc"]
let s = "abc"
console.log(countPrefixes(words, s));


words = ["a","a"], s = "aa"
console.log(countPrefixes(words, s));

words = ["abcd","abb"], s = "aa"
console.log(countPrefixes(words, s));

