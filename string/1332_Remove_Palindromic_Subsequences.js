function removePalindromic(s) {
    let left = 0; 
  let right = s.length -1;
  while(left < right){
    if(s[left] == s[right]){
      left++;
      right--;
    }
    if(s[left] !== s[right]){
      return 2;
    }
  }
  return 1;
};

let s = "ababa";
console.log(removePalindromic(s));

s = "abb"
console.log(removePalindromic(s));

s = "baabb"
console.log(removePalindromic(s));

s = ""
console.log(removePalindromic(s));

s = "lol"
console.log(removePalindromic(s));
