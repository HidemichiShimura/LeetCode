/*
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */

/* URL of this problem
    https://leetcode.com/problems/shuffle-the-array/
*/

var shuffle = function(nums, n) {
    let outputArr = [];
    for (let i = 0; i < n; i++) {
        outputArr.push(nums[i], nums[i+n]);
    }
    
    return outputArr;
};