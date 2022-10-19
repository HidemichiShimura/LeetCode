/* URL of this problem
    https://leetcode.com/problems/divide-array-into-equal-pairs/
*/

/*
 * @param {number[]} nums
 * @return {boolean}
 */
 
var divideArray = function(nums) {
    if (nums.length % 2 !== 0) {
        return false;
    }
    
    nums.sort((a, b) => {
        return a - b;
    });
    
    for (let i = 0; i < nums.length; i += 2) {
        if (nums[i] !== nums[i + 1]) {
            return false;
        }
    }
    
    return true;
};