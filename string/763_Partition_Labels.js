function partition_labels(s) {
   let output = []
  let charMap = new Map([...s].map((char) => [char, s.lastIndexOf(char)]));
  let counter = 0;
  let end = 0;
  for(let i = 0; i < s.length; i++){
    counter++;
    if(end < charMap.get(s[i])){
      end = charMap.get(s[i])
    }
    if(i == end){
      output.push(counter);
      counter = 0;
    }
  }
  return output;
};

let s = "ababcbacadefegdehijhklij"
console.log(partition_labels(s));

s = "eccbbbbdec"
console.log(partition_labels(s));

s = "kkkkekekkke";
console.log(partition_labels(s));

s =""
console.log(partition_labels(s));

