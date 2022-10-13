/* URL of this problem
 *  https://leetcode.com/problems/keep-multiplying-found-values-by-two/
 *
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
 
var findFinalValue = function(nums, original) {
    let finalValue = original;
    
    while (nums.indexOf(finalValue) !== -1) {
        finalValue *= 2;
    }
    
    return finalValue;
};