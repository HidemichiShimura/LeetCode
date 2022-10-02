/* URL of this problem
    https://leetcode.com/problems/n-repeated-element-in-size-2n-array/
*/

/*
 * @param {number[]} nums
 * @return {number}
 */

var repeatedNTimes = function(nums) {
    const n = nums.length / 2;
    const elementMap = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (elementMap.has(num)) {
            return num;
        }
        elementMap.set(num, 1);
    }
};