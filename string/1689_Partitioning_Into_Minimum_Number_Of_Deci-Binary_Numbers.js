function partition_into_Minimum(n) {
    let max = 0;
  for(let i = 0; i < n.length; i++){
    let digit = parseInt(n[i], 10);
    max = Math.max(digit, max);
  }
  return max;
};
let n = "32"
console.log(partition_into_Minimum(n));

n = "426"
console.log(partition_into_Minimum(n));

n = "00"
console.log(partition_into_Minimum(n));

n = "82734"
console.log(partition_into_Minimum(n));

n = "27346209830709182346"
console.log(partition_into_Minimum(n));