/* URL of this problem
 * https://leetcode.com/problems/form-smallest-number-from-two-digit-arrays/description/
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minNumber = function (nums1, nums2) {
  const AllDigits = nums1.concat(nums2).sort((a, b) => a - b);
  const Digits = [Math.min(...nums1), Math.min(...nums2)].sort((a, b) => a - b);

  // Return the digit if there is a digit which exists in both arrays
  // Return the smallest number which consists of digits from each array if not
  for (let i = 0; i < AllDigits.length - 1; i++) {
    if (AllDigits[i] === AllDigits[i + 1]) return AllDigits[i];
  }
  return Number(Digits.join(""));
};

module.exports = minNumber;
