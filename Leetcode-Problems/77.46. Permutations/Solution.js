/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let result = [],
    n = nums.length;
  var backtrack = function (path) {
    if (path.length == n) {
      result.push([...path]);
    }
    for (let i = 0; i < n; i++) {
      if (!path.includes(nums[i])) {
        path.push(nums[i]);
        backtrack(path);
        path.pop();
      }
    }
  };
  backtrack([]);
  return result;
};
// TC - O(n*n!)
// SC - O(n*n!)
// Auxiliary Space - O(n)
