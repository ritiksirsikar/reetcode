 function isEnglishLetter(character) {
  const code = character.charCodeAt(0);
  return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
}

var reverseOnlyLetters = function(s) {
    let left = 0;
  let right = s.length - 1;
  const chars = s.split(""); // Convert string to array for easier manipulation
  
  while (left < right) {
    if (!isEnglishLetter(chars[left])) {
      left++;
    } else if (!isEnglishLetter(chars[right])) {
      right--;
    } else {
      // Swap the two letters
      const temp = chars[left];
      chars[left] = chars[right];
      chars[right] = temp;
      left++;
      right--;
    }
  }
  return chars.join("");
};

let s = "ab-cd";
console.log(reverseOnlyLetters(s));

s = "a-bC-dEf-ghIj"
console.log(reverseOnlyLetters(s));

 s = "Test1ng-Leet=code-Q!"
 console.log(reverseOnlyLetters(s));

 s = "1-2-3-4-5"
 console.log(reverseOnlyLetters(s));

 s = "word-UPPER-Word-lower"
 console.log(reverseOnlyLetters(s));

 s = "a-b-c-d-e-f"
 console.log(reverseOnlyLetters(s));
 