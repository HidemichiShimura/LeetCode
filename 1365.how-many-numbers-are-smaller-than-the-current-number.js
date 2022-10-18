/*
 * @param {number[]} nums
 * @return {number[]}
 */

/* URL of this problem
    https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/
*/

var smallerNumbersThanCurrent = function(nums) {
    const ans = [];
    
    for (let i = 0; i < nums.length; i++) {
        const currNum = nums[i];
        let count = 0;
        
        for (let j = 0; j < nums.length; j++) {
            if (i === j) {
                continue;
            }
            
            if (currNum > nums[j]) {
                count++;
            }
        }
        
        ans.push(count);
    }
    
    return ans;
};