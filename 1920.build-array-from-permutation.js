/*
 * @param {number[]} nums
 * @return {number[]}
*/

/* URL of this problem
    https://leetcode.com/problems/build-array-from-permutation/
*/

 var buildArray = function(nums) {
    return nums.map(num => nums[num]);
};