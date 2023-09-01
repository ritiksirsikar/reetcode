function percentageLetter(s, letter) {
      let output = 0;
  let length = s.length;
  for(let i = 0; i < s.length; i++){
    if(s[i] === letter){
      output++;
    }
  }
  return Math.floor(output / length * 100);
    
};

let s = "foobar"
let letter = "o"
console.log(percentageLetter(s, letter));

s = "jjjj", letter = "k"
console.log(percentageLetter(s, letter));

s = "www.google.com", letter = "w"
console.log(percentageLetter(s, letter));

s = "hallelujah"
console.log(percentageLetter(s, letter));

s = "something", letter = "s"
console.log(percentageLetter(s, letter));