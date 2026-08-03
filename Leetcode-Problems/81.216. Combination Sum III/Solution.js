/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  let result = [];
  var backtrack = function (path, start, target) {
    if (path.length == k) {
      if (target == 0) result.push([...path]);
      return;
    }
    for (let i = start; i <= 9; i++) {
      path.push(i);
      backtrack(path, i + 1, target - i);
      path.pop();
    }
  };
  backtrack([], 1, n);
  return result;
};
// TC - O(k* (9!/ (k!*(9-k)!) ) )
// Auxiliary Space - O(k)
