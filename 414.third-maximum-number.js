/* URL of this problem
 * https://leetcode.com/problems/third-maximum-number/
 *
 * @param {number[]} nums
 * @return {number}
 */
 
var thirdMax = function(nums) {
    // Create an array with only distinct numbers in nums in a descending order
    const distinctNums = [...new Set(nums)].sort((a, b) => b - a);
    
    return distinctNums.length >= 3 ? distinctNums[2] : distinctNums[0];
};

module.exports = thirdMax;