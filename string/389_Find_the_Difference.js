function findTheDifference(s, t) {
  for(let char of s){
    t = t.replace(char, '')
  }
  return t;
}

let s = "abcd";
let t = "abcde";
console.log(findTheDifference(s, t));

s = "ritik";
t = "retick"
console.log(findTheDifference(s, t));

 s = "", t = "y"
 console.log(findTheDifference(s, t));

 s = "k", t = "y"
 console.log(findTheDifference(s, t));

 s = "camp", t = "camera"
 console.log(findTheDifference(s, t));

 s = "", t = "yolo"
 console.log(findTheDifference(s, t));