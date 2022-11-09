/* URL of this problem
 * https://leetcode.com/problems/monotonic-array/
 *
 * @param {number[]} nums
 * @return {boolean}
 */
 
var isMonotonic = function(nums) {
    const isIncreasing = nums.indexOf(Math.min(...nums)) <= nums.indexOf(Math.max(...nums));
    
    if (isIncreasing) {
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] > nums[i + 1]) {
                return false;
            }
        }
    } else {
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] < nums[i + 1]) {
                return false;
            }
        }
    }
    
    return true;
};

module.exports = isMonotonic;