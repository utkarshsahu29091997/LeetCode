/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits.length) return [];
  let result = [];
  let map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  var backtrack = function (path, start) {
    if (digits.length == path.length) {
      result.push(path);
      return;
    }
    let letters = map[digits[start]];
    for (let j = 0; j < letters.length; j++) {
      path = path + letters[j];
      backtrack(path, start + 1);
      path = path.slice(0, -1);
    }
  };
  backtrack("", 0);
  return result;
};
// TC - O(n*4^n)
// at each step 4^0, 4^1, 4^2, ...., 4^n
// Auxiliary Space - O(n)
// SC - O(n*4^n)
