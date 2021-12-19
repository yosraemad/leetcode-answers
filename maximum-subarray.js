const maxSubArray = (nums) => {
  let maxSum = nums[0];
  sum = nums[0];
  for (let num of nums.slice(1)) {
    if (num > sum && sum < 0) sum = num;
    else {
      sum += num;
    }
    if (sum > maxSum) maxSum = sum;
  }

  return maxSum;
};
