/* URL of this problem
    https://leetcode.com/problems/two-sum-less-than-k/
*/

/*
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 
var twoSumLessThanK = function(nums, k) {
    let maxSum = -1;
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const sum = nums[i] + nums[j];
            
            if (sum < k) {
                maxSum = Math.max(sum, maxSum);
            }
        }
    }
    
    return maxSum;
};