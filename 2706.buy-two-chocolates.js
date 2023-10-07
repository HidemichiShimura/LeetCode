/* URL of this problem
 * https://leetcode.com/problems/buy-two-chocolates/description/
 *
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function (prices, money) {
  const SortedPrices = [...prices].sort((a, b) => a - b);
  const MinChocoPriceSum = SortedPrices[0] + SortedPrices[1];
  const Leftover = money - MinChocoPriceSum;

  return Leftover >= 0 ? Leftover : money;
};

module.exports = buyChoco;
