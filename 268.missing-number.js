/* URL of this problem
    https://leetcode.com/problems/missing-number/
*/

/*
 * @param {number[]} nums
 * @return {number}
 */

var missingNumber = function(nums) {
    nums.sort((a, b) => {
        return a - b;
    });
    
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        if (nums[i] !== i) {
            return i;
        }
    }
    
    return n;
};