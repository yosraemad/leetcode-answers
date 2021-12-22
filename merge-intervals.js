const merge = (intervals) => {
  if (intervals.length === 1) return intervals;
  intervals = intervals.sort((a, b) => {
    return a[0] - b[0];
  });
  let output = [];
  let last = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    if (last[1] < intervals[i][0]) {
      output.push(last);
      last = intervals[i];
    } else {
      if (intervals[i][1] >= last[1]) last = [last[0], intervals[i][1]];
    }
    if (i === intervals.length - 1) output.push(last);
  }
  return output;
};
