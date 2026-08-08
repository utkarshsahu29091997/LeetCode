/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function (costs) {
  let amount = 0;
  costs.sort((a, b) => b[1] - b[0] - (a[1] - a[0]));
  let n = costs.length / 2;
  for (let i = 0; i < n; i++) {
    amount = amount + costs[i][0];
    amount = amount + costs[i + n][1];
  }
  return amount;
};
// TC - O(nlogn)
// SC - O(1)
