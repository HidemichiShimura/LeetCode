/*
 * @param {number[]} nums
 * @return {number}
 */

/* URL of this problem
    https://leetcode.com/problems/find-greatest-common-divisor-of-array/
*/

var findGCD = function(nums) {
    const minNum = Math.min(...nums);
    const maxNum = Math.max(...nums);
    
    if (maxNum % minNum === 0) {
        return minNum;
    }
    
    for (let i = (minNum - 1); i > 0; i--) {
        if (minNum % i === 0 && maxNum % i === 0) {
            return i;
        }
    }
};