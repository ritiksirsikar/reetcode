    function maximum_numofwords(sentences) {
  let maxCount = 0;
  for (let sentence of sentences) {
    let words = sentence.split(" ");
    let count = words.length;
    if (count > maxCount) {
      maxCount = count;
    }
  }
  return maxCount;
}

let sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
console.log(maximum_numofwords(sentences));

sentences = ["please wait", "continue to fight", "continue to win"]
console.log(maximum_numofwords(sentences));

sentences = ["this is a test", "a simple example", "more words in this sentence"];
console.log(maximum_numofwords(sentences)); 

sentences = ["a", "b", "c"];
console.log(maximum_numofwords(sentences));