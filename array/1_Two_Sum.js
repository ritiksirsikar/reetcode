function two_sum(nums, target) {
 const hashmap = {};
  for (let i = 0; i < nums.length; i++) {
    hashmap[nums[i]] = i;
  }
 let output = [];
 for(let i = 0; i < nums.length; i++){
  const complement = target - nums[i];
    if (hashmap.hasOwnProperty(complement) && hashmap[complement] !== i) {
      output.push(i, hashmap[complement]);
      break;
    }
 }
  return output;
};

//Test Cases
console.log(two_sum([2,7,11,15], 9))
console.log(two_sum([3, 2, 4], 6))
console.log(two_sum([3,3], 6))