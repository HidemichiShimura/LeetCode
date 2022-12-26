/* URL of this problem
 * https://leetcode.com/problems/check-if-a-number-is-majority-element-in-a-sorted-array/description/
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */

var isMajorityElement = function(nums, target) {
    const Targets = nums.filter(num => num === target);

    // True if target appears more than a half of the length of nums or false if not
    return nums.length / 2 < Targets.length;
};

module.exports = isMajorityElement;