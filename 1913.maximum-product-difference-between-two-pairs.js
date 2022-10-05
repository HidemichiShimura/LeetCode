/* URL of this problem
    https://leetcode.com/problems/maximum-product-difference-between-two-pairs/
*/

/*
 * @param {number[]} nums
 * @return {number}
 */

var maxProductDifference = function(nums) {
    nums.sort((a, b) => b - a);
    
    const maxProduct = nums[0] * nums[1];
    const minProduct = nums[nums.length - 2] * nums[nums.length - 1];
    
    return maxProduct - minProduct ;
};