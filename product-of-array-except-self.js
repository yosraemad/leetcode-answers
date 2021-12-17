const productExceptSelf = (nums) => {
  let prefix = new Array(nums.length);
  let postfix = new Array(nums.length);

  prefix[0] = nums[0];
  postfix[nums.length - 1] = nums[nums.length - 1];

  for (let i = 1; i < nums.length; i++) {
    prefix[i] = prefix[i - 1] * nums[i];
    postfix[nums.length - 1 - i] =
      postfix[nums.length - 1 - i + 1] * nums[nums.length - 1 - i];
  }

  let output = [];
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      output.push(postfix[i + 1]);
      continue;
    }
    if (i === nums.length - 1) {
      output.push(prefix[i - 1]);
      continue;
    }
    output.push(prefix[i - 1] * postfix[i + 1]);
  }
  return output;
};

const betterSolution = (nums) => {
  let output = new Array(nums.length);
  output[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    output[i] = nums[i - 1] * output[i - 1];
  }
  let postfix = 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    postfix = postfix * nums[i + 1];
    output[i] = output[i] * postfix;
  }
  return output;
};
