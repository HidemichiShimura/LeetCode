/*
 * @param {number[]} nums
 * @return {number}
 */

/* URL of this problem
    https://leetcode.com/problems/number-of-good-pairs/
*/

 var numIdenticalPairs = function(nums) {
    let goodPairCount = 0;
    
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if (nums[i] == nums[j])　{
                goodPairCount++;
            }
        }
    }
    
    return goodPairCount;
};