/* URL of this problem
    https://leetcode.com/problems/contains-duplicate-ii/
*/

/*
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 
var containsNearbyDuplicate = function(nums, k) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] !== nums[j]) {
                continue;
            }
            
            if (Math.abs(i - j) <= k) {
                return true;
            }
        }
    }
    
    return false;
};