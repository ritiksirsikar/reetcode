function maxnumofwords(text, brokenLetters) {
    let array1 = text.split(' ');
  let array2 = brokenLetters.split('');
  let set = new Set(array2);
  let output = [];
  for(let i = 0; i < array1.length; i++){
    for(let j = 0; j < array1[i].length; j++){
      if(set.has(array1[i][j])){
        output.push(array1[i]);
        j = array1[i].length;
      }
    }
  }
  return array1.length - output.length;
};
let text = "hello world";
let brokenLetters = "ad"
console.log(maxnumofwords(text, brokenLetters));

text = "leet code", brokenLetters = "lt"
console.log(maxnumofwords(text, brokenLetters));

text = "leet code", brokenLetters = "e"
console.log(maxnumofwords(text, brokenLetters));

 text = "apple", brokenLetters = "ap"
console.log(maxnumofwords(text, brokenLetters));

text = "missing vowels", brokenLetters = "aeiou"
console.log(maxnumofwords(text, brokenLetters));