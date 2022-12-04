/* URL of this problem
 * https://leetcode.com/problems/find-subarrays-with-equal-sum/
 *
 * @param {number[]} nums
 * @return {boolean}
 */
 
var findSubarrays = function(nums) {
    // This contains entries of sums of two adjacent elements for key and occurrences of the sums for value
    const IntPairMap = new Map();
    let HasTwoSubarrays = false;
    
    for (let i = 0; i < nums.length - 1; i++) {
        const PairSum = nums[i] + nums[i + 1];
        
        IntPairMap.set(PairSum, (IntPairMap.get(PairSum) ?? 0) + 1);
    }
    IntPairMap.forEach((value) => {
        if (value >= 2) {
            HasTwoSubarrays = true;
        }
    });
    
    return HasTwoSubarrays;
};

module.exports = findSubarrays;