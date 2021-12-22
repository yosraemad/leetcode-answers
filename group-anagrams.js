const groupAnagrams = (strs) => {
  let outputs = [];
  for (let i in strs) {
    let exists = -1;
    for (let j in outputs) {
      if (isAnagram(outputs[j][0], strs[i])) {
        exists = j;
      }
    }

    if (exists === -1) outputs[outputs.length] = [strs[i]];
    else {
      outputs[exists][outputs[exists].length] = strs[i];
    }
  }

  return outputs;
};

const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;
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

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

console.log(groupAnagrams(strs));
