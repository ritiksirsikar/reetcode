function firstUniqChar(){
    let charCount = new Map();
    
    for (let i = 0; i < s.length; i++) {
        if (charCount.has(s[i])) {
            charCount.set(s[i], charCount.get(s[i]) + 1);
        }
        else {
            charCount.set(s[i], 1);
        }
  }
  for (let i = 0; i < s.length; i++) {
      if (charCount.get(s[i]) === 1) {
          return i;
        }
    }
    return -1;
}
let s = "leetcode"
console.log(firstUniqChar(s));

s = "loveleetcode"
console.log(firstUniqChar(s));

s = "aabb"
console.log(firstUniqChar(s));

s = "abcdefghijklmnopqrstuvwxyz"
console.log(firstUniqChar(s));

s = "zzzzyyyyyxxxwwwwvvvuuuutttssrrqqppoonnmmllkkjjiihhggffeeddccbba"
console.log(firstUniqChar(s));