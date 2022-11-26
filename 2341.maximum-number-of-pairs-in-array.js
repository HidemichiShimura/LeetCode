/* URL of this problem
 * https://leetcode.com/problems/maximum-number-of-pairs-in-array/
 *
 * @param {number[]} nums
 * @return {number[]}
 */
 
var numberOfPairs = function(nums) {
	let pairCount = 0;
    let leftoverCount = 0;
    const numOccurMap = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        numOccurMap.set(nums[i], (numOccurMap.get(nums[i]) ?? 0) + 1);
    }
    numOccurMap.forEach((value) => {
        pairCount += Math.floor(value / 2); // Add the number of pairs that can be made from the value
        leftoverCount += value % 2; // Add the remainder as leftover to leftoverCount
    });
    
    return [pairCount, leftoverCount];
};

module.exports = numberOfPairs;