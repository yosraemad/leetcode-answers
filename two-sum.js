//My Solution
const twoSums = (nums, target) => {
  let newArray = [];
  for (let number of nums) {
    const newTarget = target - number;
    newArray.push(newTarget);
  }
  for (let i in newArray) {
    for (let j in nums) {
      if (i === j) continue;
      const newTarget = newArray[i] - nums[j];
      if (newTarget === 0) return [i, j];
    }
  }
};

// Leetcode Solution
//using Hashmap,
// start with an empty hashmap
//in every visit, check if the difference exists in the hashmap
// if it doesn't then add the value to the hashmap
const betterSolution = (nums, target) => {
  let hashmap = {};
  for (let i in nums) {
    if (target - nums[i] in hashmap) {
      return [hashmap[target - nums[i]], i];
    }
    hashmap[nums[i]] = i;
  }
};
