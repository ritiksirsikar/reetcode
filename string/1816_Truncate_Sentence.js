function truncate_sentence(s, k) {
let output = [];
  let result = "";
  let sentence = s.split(' ')
  for(let i = 0; i < k; i++){
    output.push(sentence[i]);
  }
  result = output.join(' ')
  return result;
};
let s = "Hello how are you Contestant";
let k = 4
console.log(truncate_sentence(s, k));

s = "What is the solution to this problem", k = 4
console.log(truncate_sentence(s, k));

s = "chopper is not a tanuki", k = 5
console.log(truncate_sentence(s, k));

s = "I ain't going tomorrow", k = 0;
console.log(truncate_sentence(s, k));
