function merge_strings(word1, word2) {
  let output = "";
  let i = 0;
  let j = 0;
  while (i < word1.length && j < word2.length) {
    output += word1[i++] + word2[j++];
  }
  while (i < word1.length) {
    output += word1[i++];
  }
  while (j < word2.length) {
    output += word2[j++];
  }
  return output;
};


let word1 = "abc"
let word2 = "pqr"
console.log(merge_strings(word1, word2));

word1 = "ab", word2 = "pqrs"
console.log(merge_strings(word1, word2));

word1 = "abcd", word2 = "pq"
console.log(merge_strings(word1, word2));

word1 = "abbb", word2 = "lol"
console.log(merge_strings(word1, word2));