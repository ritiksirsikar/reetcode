function countAstericks(s) {
    let count = 0;
 let astricks = 0;
 for(let i = 0; i < s.length; i++){
  if(s[i] === '|'){
   count++;
  }
  if(count % 2 == 0){
   if(s[i] === '*'){
    astricks++;
   }
  }
  
 }
 return astricks;
};

let s = "l|*e*et|c**o|*de|"
console.log(countAstericks(s));

s = "iamprogrammer";
console.log(countAstericks(s));

s = "*****";
console.log(countAstericks(s));

s = "***&&**";
console.log(countAstericks(s));

s = ""
console.log(countAstericks(s));