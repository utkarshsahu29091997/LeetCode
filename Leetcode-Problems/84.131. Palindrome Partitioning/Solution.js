/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  let result = [];
  var backtrack = function (path, remainingString) {
    if (!remainingString.length) {
      result.push([...path]);
    }
    for (let i = 0; i < remainingString.length; i++) {
      let choice = remainingString.slice(0, i + 1);
      if (!isPalindrome(choice)) {
        continue;
      }
      path.push(choice);
      backtrack(path, remainingString.slice(i + 1));
      path.pop();
    }
  };
  backtrack([], s);
  return result;
};
var isPalindrome = (s) => {
  let i = 0,
    j = s.length - 1;
  while (i < j) {
    if (s[i++] != s[j--]) return false;
  }
  return true;
};
// TC - O(n*2^n)
// SC - O(n)
