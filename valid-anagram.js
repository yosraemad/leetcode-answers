const isAnagram = (s, t) => {
  let hashmap = {};
  for (let letter of s) {
    if (letter in hashmap) hashmap[letter]++;
    else hashmap[letter] = 1;
  }
  for (let letter of t) {
    if (letter in hashmap) {
      hashmap[letter]--;
      if (hashmap[letter] === 0) delete hashmap[letter];
    } else {
      return false;
    }
  }

  return Object.keys(hashmap).length === 0;
};
