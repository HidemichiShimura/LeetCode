/* URL of this problem
    https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/
*/

/*
 * @param {number[]} nums
 * @return {number}
 */

 var minOperations = function(nums) {
    let operationCount = 0;
    
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] < nums[i + 1]) {
            continue;
        }
        
        const currOperationCount = Math.abs(nums[i + 1] - nums[i]) + 1;
        operationCount += currOperationCount;
        nums[i + 1] += currOperationCount;
        
    }
    
    return operationCount;
};