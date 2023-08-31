function numJewelsInStones(jewels, stones) {
  let output = 0;
 let setting = new Set(jewels);
 for(let i = 0; i < stones.length; i++){
  if(setting.has(stones[i])){
   output++;
  }
 }
 return output;
}


let jewels = "aA";
let stones = "aAAbbbb";
console.log(numJewelsInStones(jewels, stones));

jewels = "k" 
stones = "Ka"
console.log(numJewelsInStones(jewels, stones));


jewels = "z" 
stones = "ZZ"
console.log(numJewelsInStones(jewels, stones));


jewels = "abababa" 
stones = "AAA"
console.log(numJewelsInStones(jewels, stones));

jewels = "ZAA" 
stones = "AAZ"
console.log(numJewelsInStones(jewels, stones));
