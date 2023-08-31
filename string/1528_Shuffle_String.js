function shuffle_string(s, indices) {
     let arr = s.split("");
  for(let i = 0; i < indices.length; i++){
    arr[indices[i]] = s[i];
  }
  return arr.join("")
    
};

let s = "codeleet";
let indices = [4,5,6,7,0,2,1,3]
console.log(shuffle_string(s, indices));

s = "abc", indices = [0,1,2];
console.log(shuffle_string(s, indices));

s = "xyz"; indices4 = [2, 0, 1];
console.log(shuffle_string(s, indices));

s = "hadoop";indices5 = [5, 2, 4, 0, 3, 1];
console.log(shuffle_string(s, indices));