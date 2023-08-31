function valid_anagram(s, t){
    if (s.length !== t.length) {
    return false;
  }

    const sCount = new Map();
  const tCount = new Map();
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    if (sCount.has(char)) {
      sCount.set(char, sCount.get(char) + 1);
    } else {
      sCount.set(char, 1);
    }
  }
  for (let i = 0; i < t.length; i++) {
    const char = t.charAt(i);
    if (tCount.has(char)) {
      tCount.set(char, tCount.get(char) + 1);
    } else {
      tCount.set(char, 1);
    }
  }
 for (const [char, count] of sCount) {
    if (tCount.get(char) !== count) {
      return false;
    }
  }

  return true;
}

let s = "anagram";
let t = "nagaram";
console.log(valid_anagram(s, t));

s = "rat", t = "car"
console.log(valid_anagram(s, t));

s = "listen", t = "silent"
console.log(valid_anagram(s, t));

s = "hello", t = "world"
console.log(valid_anagram(s, t));

s = "12345", t = "54321"
console.log(valid_anagram(s, t));

