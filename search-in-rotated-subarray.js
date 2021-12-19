const search = (nums, target) => {
  return searchAlgo(nums, target, 0, nums.length - 1);
};

const searchAlgo = (nums, target, low, high) => {
  if (low > high) return -1;
  let mid = Math.floor((low + high) / 2);
  if (nums[mid] === target) return mid;
  // left portion
  if (nums[mid] >= nums[0]) {
    if (nums[mid] >= target) {
      if (nums[low] > target) return searchAlgo(nums, target, mid + 1, high);
      return searchAlgo(nums, target, low, mid - 1);
    } else {
      return searchAlgo(nums, target, mid + 1, high);
    }
  }
  // right portion
  else {
    if (nums[mid] >= target) return searchAlgo(nums, target, low, mid - 1);
    else {
      if (nums[high] >= target) return searchAlgo(nums, target, mid + 1, high);
      return searchAlgo(nums, target, low, mid - 1);
    }
  }
};

let nums = [1, 3, 5];

console.log(search(nums, 1));
