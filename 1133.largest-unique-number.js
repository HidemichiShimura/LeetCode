/* URL of this problem
 *  https://leetcode.com/problems/largest-unique-number/
 *
 * @param {number[]} nums
 * @return {number}
 */
 
var largestUniqueNumber = function(nums) {
    const numOccurMap = new Map();
    const occurOnceNums = [];
    
    // Create a map of numbers for key and occurrence of the numbers for value
    for (let i = 0; i < nums.length; i++) {
        numOccurMap.set(nums[i], (numOccurMap.get(nums[i]) ?? 0) + 1);
    }
    // Add a key to occurOnceNums if the occurrence is 1
    numOccurMap.forEach((value, key) => {
        if (value === 1) {
            occurOnceNums.push(key);
        }
    });
    
    return Math.max(...occurOnceNums) === -Infinity ? -1 : Math.max(...occurOnceNums);
}

module.exports = largestUniqueNumber;