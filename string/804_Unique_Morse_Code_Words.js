function uniqueMorseCodeRepresentation(words){
    let arr = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
  let string = "abcdefghijklmnopqrstuvwxyz";

  let mix = new Map();
  for (let i = 0; i < string.length; i++) {
    mix.set(string[i], arr[i]);
  }

  let transformations = new Set();
  for (let i = 0; i < words.length; i++) {
    let word = '';
    for (let j = 0; j < words[i].length; j++) {
      let char = words[i][j];
      let morse = mix.get(char);
      word += morse;
    }
    transformations.add(word);
  }
  
  return transformations.size;
}

let words = ["gin","zen","gig","msg"]
console.log(uniqueMorseCodeRepresentation(words));

words = ["a"]
console.log(uniqueMorseCodeRepresentation(words));

words = ["hello", "world", "hi", "there"]
console.log(uniqueMorseCodeRepresentation(words));

words = ["abc", "def", "ghi"]
console.log(uniqueMorseCodeRepresentation(words));

words = ["openai", "rocks", "gpt", "is", "awesome"]
console.log(uniqueMorseCodeRepresentation(words));
