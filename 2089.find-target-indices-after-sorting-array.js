/* URL of this problem
    https://leetcode.com/problems/find-target-indices-after-sorting-array/
*/

/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var targetIndices = function(nums, target) {
    const targetIndexArr = [];
    
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            targetIndexArr.push(i);
        }
    }
    
    return targetIndexArr;
};