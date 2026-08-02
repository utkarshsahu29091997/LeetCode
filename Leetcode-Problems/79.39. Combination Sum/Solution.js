/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let result = [];
  var backtrack = function (path, start, target) {
    if (target == 0) result.push([...path]);
    if (target <= 0) return;
    for (let i = start; i < candidates.length; i++) {
      path.push(candidates[i]);
      backtrack(path, i, target - candidates[i]);
      path.pop();
    }
  };
  backtrack([], 0, target);
  return result;
};
// TC - O(n^(Depth+1))
// 1 is for root node of tree
// Depth of tree = (target/min value in arr)
// SC - O(Depth)
