/* URL of this problem
 * https://leetcode.com/problems/max-consecutive-ones/
 *
 * @param {number[]} nums
 * @return {number}
 */
 
var findMaxConsecutiveOnes = function(nums) {
    let maxConsecutiveOneNum = 0;
    // Count consecutive ones temporarily until 0 is reached
    let tempNum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            tempNum++;
            maxConsecutiveOneNum = Math.max(tempNum ,maxConsecutiveOneNum);
        } else {
            tempNum = 0;
        }
    }
    
    return maxConsecutiveOneNum;
};