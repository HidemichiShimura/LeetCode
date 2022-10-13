/* URL of this problem
 *  https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
 *
 * @param {number[]} nums
 * @return {number[]}
 */
 
var findDisappearedNumbers = function(nums) {
    const missingNums = []; 
    
    for (let i = 1; i <= nums.length; i++) {
        if (!nums.includes(i)) {
            missingNums.push(i);
        }
    }
    
    return missingNums;
};