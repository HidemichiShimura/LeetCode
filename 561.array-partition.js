/* URL of this problem
    https://leetcode.com/problems/array-partition/
*/

/*
 * @param {number[]} nums
 * @return {number}
 */

var arrayPairSum = function(nums) {
    let maximizedMinSum = 0; 
    
    nums.sort((a, b) => b - a);
    for (let i = 0; i < nums.length; i += 2) {
        maximizedMinSum += Math.min(nums[i], nums[i + 1]);
    }
    
    return maximizedMinSum;
};