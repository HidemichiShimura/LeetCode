/* URL of this problem
 * https://leetcode.com/problems/max-consecutive-ones/
 *
 * @param {number[]} nums
 * @return {number}
 */
 
var findMaxConsecutiveOnes = function(nums) {
    const consecutiveOnes = nums.join("").split(0);
    const consecutiveOneLenghts = consecutiveOnes.map(element => element.length);
    
    return Math.max(...consecutiveOneLenghts);
};