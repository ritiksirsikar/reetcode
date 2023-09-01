function removeStars(s) {
    const stack = [];
 for(let i = 0; i < s.length;i++){
  if(s[i] !== "*"){
   stack.push(s[i]);
  }
  if(s[i] === "*"){
   stack.pop();
  }
 }
 return stack.join("");
};

let s = "leet**cod*e";
console.log(removeStars(s));

s = "erase*****"
console.log(removeStars(s));

s = "e***ase*****"
console.log(removeStars(s));

s = "*****"
console.log(removeStars(s));