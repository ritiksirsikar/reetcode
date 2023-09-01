function decodeMessage(key, message) {
    let result = ""
 key = Array.from(new Set(key.split(' ').join('')))
 let mapping  = new Map();
 let alphabets = 'abcdefghijklmnopqrstuvwxyz';
 for(let i = 0; i < alphabets.length; i++){
  mapping.set(key[i], alphabets[i]);
 }
 for(let char of message){
  result += mapping.get(char) || ' '
 }
 return result;

};

let key = "the quick brown fox jumps over the lazy dog" 
let message = "vkbs bs t suepuv"
console.log(decodeMessage(key, message));

key = "eljuxhpwnyrdgtqkviszcfmabo", message = "zwx hnfx lqantp mnoeius ycgk vcnjrdb"
console.log(decodeMessage(key, message));

Key = "aaabbbcccdddeeefffggghhh", Message = "this is a test"
console.log(decodeMessage(key, message));