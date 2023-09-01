function checktwostrings(word1, word2) {
    let output1 = "";
  let output2 = "";
  for(let i = 0; i < word1.length; i++){
    output1 = output1 + word1[i];
  }
  for(let i = 0; i < word2.length; i++){
    output2 = output2 + word2[i];
  }
  if(output1 === output2){
    return true;
  }
  else{
    return false;
  } 
};

let word1 = ["ab", "c"]
let word2 = ["a", "bc"]
console.log(checktwostrings(word1, word2));

word1 = ["a", "cb"], word2 = ["ab", "c"]
console.log(checktwostrings(word1, word2));

word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]
console.log(checktwostrings(word1, word2));

word1 = ["a", "b", "c", "d"], word2 = ["abcd"];
console.log(checktwostrings(word1, word2));