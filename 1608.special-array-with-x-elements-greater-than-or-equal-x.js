/* URL of this problem
 * https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/
 *
 * @param {number[]} nums
 * @return {number}
 */
 
var specialArray = function(nums) {    
    for (let i = nums.length; i > 0; i--) {
        const greaterOrEqualNums = nums.filter(num => i <= num);
        
        if (i == greaterOrEqualNums.length) {
            return i;
        }
    }
    
    return -1;
};

module.exports = specialArray;