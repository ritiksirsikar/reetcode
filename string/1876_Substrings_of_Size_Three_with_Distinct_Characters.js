function sizethreesubstrings(s) {
 let count = 0;
 let currentString = '';
 for(let i = 0; i < s.length-2; i++){
  currentString = s.substring(i,i+3);
  if(new Set(currentString).size === 3){
   count++;
  }
 }
 return count;
};
let s = "xyzzaz"
console.log(sizethreesubstrings(s));

s = "aababcabc"
console.log(sizethreesubstrings(s));

s = ""
console.log(sizethreesubstrings(s));

s = "amammmma"
console.log(sizethreesubstrings(s));

s = "uuiiioww"
console.log(sizethreesubstrings(s));