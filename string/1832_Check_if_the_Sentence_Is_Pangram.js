function checkpanagram(sentence) {
let setting = new Set(sentence);
 if(setting.size !== 26){
  return false;
 }
 return true;
};

let sentence = "thequickbrownfoxjumpsoverthelazydog"
console.log(checkpanagram(sentence));

sentence = "leetcode"
console.log(checkpanagram(sentence));

sentence = "leetcodeiscool"
console.log(checkpanagram(sentence));