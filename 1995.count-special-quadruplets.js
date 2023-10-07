/* URL of this problem
 * https://leetcode.com/problems/count-special-quadruplets/description/
 *
 * @param {number[]} nums
 * @return {number}
 */
var countQuadruplets = function (nums) {
  let quadrupletCount = 0;

  /* Brute Force
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                for (let l = k + 1; l < nums.length; l++) {
                    if (nums[i] + nums[j] + nums[k] === nums[l]) {
                        quadrupletCount++;
                    }
                }
            }
        }
    }
    */

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const Sum = nums[i] + nums[j] + nums[k];
        const NumsOnRight = nums.slice(k + 1);
        const NumsEqualToSum = NumsOnRight.filter((num) => num === Sum);

        quadrupletCount += NumsEqualToSum.length;
      }
    }
  }

  return quadrupletCount;
};

module.exports = countQuadruplets;
