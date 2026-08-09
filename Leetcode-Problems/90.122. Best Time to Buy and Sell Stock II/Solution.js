/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;
  let prevProfit = 0;
  let i = 0,
    j = 1;
  while (j < prices.length) {
    let newProfit = prices[j] - prices[i];
    if (newProfit > prevProfit) {
      profit = profit - prevProfit + newProfit;
      prevProfit = newProfit;
      ++j;
    } else {
      prevProfit = 0;
      i = j;
      ++j;
    }
  }
  return profit;
};
// 2nd approach - much easy to write & understand
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;
  let i = 1;
  while (i < prices.length) {
    if (prices[i - 1] < prices[i]) {
      profit = profit + prices[i] - prices[i - 1];
    }
    i++;
  }
  return profit;
};
