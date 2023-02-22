/* URL of this problem
 * https://leetcode.com/problems/average-value-of-even-numbers-that-are-divisible-by-three/description/
 *
 * @param {number[]} nums
 * @return {number}
 */

var averageValue = function (nums) {
  const NumsDivisibleByThree = nums.filter((num) => {
    return num % 2 === 0 && num % 3 === 0;
  });

  if (NumsDivisibleByThree.length === 0) {
    return 0;
  } else {
    const Sum = NumsDivisibleByThree.reduce((sum, curr) => sum + curr, 0);

    return Math.floor(Sum / NumsDivisibleByThree.length);
  }
};

module.exports = averageValue;
