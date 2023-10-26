/* URL of this problem
 * https://leetcode.com/problems/number-of-beautiful-pairs/description/
 *
 * @param {number[]} nums
 * @return {number}
 */
var countBeautifulPairs = function (nums) {
  let beautifulPairCount = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const firstDigit = Number(`${nums[i]}`.charAt(0));
      const lastDigit = Number(`${nums[j]}`.charAt(`${nums[j]}`.length - 1));

      if (gcd(firstDigit, lastDigit) === 1) beautifulPairCount++;
    }
  }

  return beautifulPairCount;
};

function gcd(num1, num2) {
  for (let i = 2; i <= Math.min(num1, num2); i++) {
    if (num1 % i === 0 && num2 % i === 0) return i;
  }
  return 1;
}

module.exports = countBeautifulPairs;
