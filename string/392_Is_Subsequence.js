function isSubsequence(s,t){
    let left = 0;
    let right = 0;
    let score = 0;
    if(score === s.length){
        return true;
    }
    while(left < s.length && right < t.length){
        if(s[left] === t[right]){
            left++;
            right++;
            score++;
        }
        if(s[left] !== t[right]){
            right++;
        }
        if(score === s.length){
            return true;
        }
    }
    return false;
}
let s = "abc"
let t = "ahbgdc"
console.log(isSubsequence(s, t));

s = "axc", t = "ahbgdc"
console.log(isSubsequence(s, t));

s = "abc", t = "acb"
console.log(isSubsequence(s, t));

s = "xyz", t = "abcdefghijxyz"
console.log(isSubsequence(s, t));

s = "def", t = "abcdef"
console.log(isSubsequence(s, t));

s = "aaa", t = "aaabbb"
console.log(isSubsequence(s, t));

s = "", t = "ahbgdc"
console.log(isSubsequence(s, t));
