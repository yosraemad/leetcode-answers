const isValid = (s) => {
  let stack = [];
  for (let letter of s) {
    if (letter === "(" || letter === "{" || letter === "[") {
      stack.push(letter);
    } else {
      let i = stack.pop();
      if (
        !(
          (letter === ")" && i === "(") ||
          (letter === "]" && i === "[") ||
          (letter === "}" && i === "{")
        )
      )
        return false;
    }
  }
  return stack.length === 0;
};
