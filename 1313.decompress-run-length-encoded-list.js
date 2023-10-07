/* URL of this problem
 * https://leetcode.com/problems/decompress-run-length-encoded-list/description/
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
  const DecompressedList = [];

  for (let i = 0; i < nums.length; i += 2) {
    const Freq = nums[i];
    const Val = nums[i + 1];

    for (let j = 0; j < Freq; j++) {
      DecompressedList.push(Val);
    }
  }

  return DecompressedList;
};

module.exports = decompressRLElist;
