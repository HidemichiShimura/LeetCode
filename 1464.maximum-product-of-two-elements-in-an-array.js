/*
 * @param {number[]} nums
 * @return {number}
 */

/* URL of this problem
    https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/
*/

var maxProduct = function(nums) {
    let maxValue = 0;
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            const currValue = (nums[i]-1) * (nums[j]-1);
            if (maxValue < currValue) {
                maxValue = currValue;
            }
        }
    }
    
    return maxValue;
};