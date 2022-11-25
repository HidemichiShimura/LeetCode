/* URL of this problem
 * https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/
 *
 * @param {number[]} nums
 * @return {number}
 */
 
var countElements = function(nums) {
    const maxNum = Math.max(...nums);
    const minNum = Math.min(...nums);
    // Extract elements from nums which have smaller elements and greater elemtns than the number itself
    const matchedNums = nums.filter(num => num !== maxNum && num !== minNum); 

    return matchedNums.length;
};

module.exports = countElements;