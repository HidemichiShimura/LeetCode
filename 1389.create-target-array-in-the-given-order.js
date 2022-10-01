/* URL of this problem
    https://leetcode.com/problems/create-target-array-in-the-given-order/
*/

/*
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */

var createTargetArray = function(nums, index) {
    const targetArr = [];
    for (let i = 0; i < index.length; i++) {
        targetArr.splice(index[i], 0, nums[i]);
    }
    
    return targetArr;
};