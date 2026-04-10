// 1st Approach - Using built in functions

var lengthOfLastWord = function (s) {
  s = s.trim();
  s = s.split(" ");
  return s[s.length - 1].length;
};

// 2nd Approach - Using loop

var lengthOfLastWord = function (s) {
  let n = s.length - 1;
  while (n >= 0) {
    if (s[n] === " ") {
      --n;
    } else {
      break;
    }
  }

  let count = 0;
  while (n >= 0) {
    if (s[n] !== " ") {
      ++count;
      --n;
    } else {
      break;
    }
  }
  return count;
};
