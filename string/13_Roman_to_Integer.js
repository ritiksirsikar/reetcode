function romanto_integer(){
    let map = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
  ]);
  let output = 0;
  for(let i = 0; i < s.length; i++){
      if(map.get(s[i]) < map.get(s[i + 1])){
          output -= map.get(s[i]);
      }
      else{
          output += map.get(s[i]);
      }
  }
  return output;
}

let s = "III";
console.log(romanto_integer(s));

s = "LVIII"
console.log(romanto_integer(s));

s = "MCMXCIV"
console.log(romanto_integer(s));

s = "MCMXCV"
console.log(romanto_integer(s));

s = "I"
console.log(romanto_integer(s));