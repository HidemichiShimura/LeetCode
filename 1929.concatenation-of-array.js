/*
 * @param {number[]} nums
 * @return {number[]}
 */

/* URL of this problem
    https://leetcode.com/problems/concatenation-of-array/
*/

var getConcatenation = function(nums) {
    let ans = nums.concat(nums);
    return ans;
};