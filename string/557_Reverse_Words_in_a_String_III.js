function reverseWords(s){
    return words = s.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}

let s = "Let's take LeetCode contest"
console.log(reverseWords(s));

s = "God Ding"
console.log(reverseWords(s));

s = "This is a test";
console.log(reverseWords(s));

s = "a bb ccc dddd";
console.log(reverseWords(s));

s = "One Two Three Four";
console.log(reverseWords(s));