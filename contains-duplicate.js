//My Solution
const containsDuplicate = (nums) => {
  let foundSoFar = {};
  for (let num of nums) {
    if (num in foundSoFar) return true;
    foundSoFar[num] = num;
  }
  return false;
};
