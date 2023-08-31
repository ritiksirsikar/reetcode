function longest_substring(s){
    let set = new Set()
 let left = 0;
 let right = 0;
 let output = 0;
 
 while(right < s.length){
  if(!set.has(s[right])){
   set.add(s[right]);
   right++;
   output = Math.max(output, right - left)
  }
  else{
   set.delete(s[left]);
   left++;
  }
 }
 return output;
}

let s = "abcabcbb";
console.log(longest_substring(s));

s = "bbbbb"
console.log(longest_substring(s));

s = "pwwkew"
console.log(longest_substring(s));

s = "gasoline";
console.log(longest_substring(s));

s = "diesel";
console.log(longest_substring(s));

s = "pppp";
console.log(longest_substring(s));

s = "";
console.log(longest_substring(s));

s = "a";
console.log(longest_substring(s));