function first_palindromic(words) {
    for (let i = 0; i < words.length; i++) {
    let isPalindrome = true;
    for (let j = 0; j < Math.floor(words[i].length / 2); j++) {
      if (words[i][j] !== words[i][words[i].length - 1 - j]) {
        isPalindrome = false;
        break;
      }
    }
    if (isPalindrome) {
      return words[i];
    }
  }
  return "";
};

let words = ["abc","car","ada","racecar","cool"]
console.log(first_palindromic(words));

words = ["notapalindrome","racecar"]
console.log(first_palindromic(words));

words = ["def","ghi"]
console.log(first_palindromic(words));

words = ["level", "hello", "world"];
console.log(first_palindromic(words));

words = ["abc", "def", "ghi", "ihg", "fed", "cba"];
console.log(first_palindromic(words));


