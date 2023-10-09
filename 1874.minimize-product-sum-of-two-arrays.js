/* URL of this problem
 * https://leetcode.com/problems/minimize-product-sum-of-two-arrays/description/
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var minProductSum = function (nums1, nums2) {
  const AscNums1 = [...nums1].sort((a, b) => a - b);
  const DescNums2 = [...nums2].sort((a, b) => b - a);
  let minProductSum = 0;

  for (let i = 0; i < AscNums1.length; i++) {
    minProductSum += AscNums1[i] * DescNums2[i];
  }

  return minProductSum;
};

module.exports = minProductSum;
