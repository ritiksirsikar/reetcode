function two_sum(nums, target){
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

let nums = [2,7,11,15];
let target = 9;
console.log(two_sum(nums, target));

nums = [3,2,4];
target = 6;
console.log(two_sum(nums, target));

nums = [3, 3];
target = 6;
console.log(two_sum(nums, target));

nums = [3, 2];
target = 2;
console.log(two_sum(nums, target));

nums = [0];
target = 6;
console.log(two_sum(nums, target));

nums = [2,2];
target = 4;
console.log(two_sum(nums, target));

nums = [0, 0];
target = 0;
console.log(two_sum(nums, target));

nums = [100, 100];
target = 300;
console.log(two_sum(nums, target));