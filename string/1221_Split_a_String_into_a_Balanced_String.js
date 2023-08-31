function splitintoBalanced(s) {
  let Lside = 0;
  let Rside = 0;
  let output = 0;
  for(let i = 0; i<s.length; i++){
    if(s[i] === "L"){
      Lside = Lside + 1;
    }
    if(s[i] === "R"){
      Rside = Rside + 1;
    }
    if(Lside !== 0 && Lside === Rside){
      output++;
    }
  }
  return output;
}
let s = "RLRRLLRLRL";
console.log(splitintoBalanced(s));

s = "RLRRRLLRLL"
console.log(splitintoBalanced(s));

s = "LLLLRRRR"
console.log(splitintoBalanced(s));

s = "RLRLRLRLRL"
console.log(splitintoBalanced(s));
