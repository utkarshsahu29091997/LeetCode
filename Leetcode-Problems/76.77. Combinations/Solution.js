/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let result = [];
  var backtrack = function (path, start) {
    if (path.length == k) {
      result.push([...path]);
      return;
    }
    for (let i = start; i <= n; i++) {
      path.push(i);
      backtrack(path, i + 1);
      path.pop();
    }
  };
  backtrack([], 1);
  return result;
};
// TC - O( k*( n!/(k!(n-k)!) ) )
// SC - O( k*( n!/(k!(n-k)!) ) )
// Auxiliary SC - O(k) // while calculating auxiliary space extra input is ignored as it is not taking part in any calculation
