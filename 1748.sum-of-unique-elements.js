/* URL of this problem
    https://leetcode.com/problems/sum-of-unique-elements/
*/

/*
 * @param {number[]} nums
 * @return {number}
 */

var sumOfUnique = function(nums) {
    const numsBoolMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if(numsBoolMap.has(num)) {
            numsBoolMap.set(num, false);
        } else {
            numsBoolMap.set(num, true);
        }
    }
    
    let uniqueElementSum = 0;
    numsBoolMap.forEach((value,key) => {
        if (value) {
            uniqueElementSum += key;
        }
    });
    
    return uniqueElementSum;
};