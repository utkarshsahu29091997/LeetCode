/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  let result = [];
  candidates.sort((a, b) => a - b);
  var backtrack = function (path, start, target) {
    if (target == 0) {
      result.push([...path]);
    }
    if (target <= 0) {
      return;
    }
    for (let i = start; i < candidates.length && candidates[i] <= target; i++) {
      if (i > start && candidates[i] == candidates[i - 1]) {
        continue;
      }
      path.push(candidates[i]);
      backtrack(path, i + 1, target - candidates[i]);
      path.pop();
    }
  };
  backtrack([], 0, target);
  return result;
};
// TC - O(n*2^n)
// Auxiliary Space - O(n)
