/* URL of this problem
 * https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/description/
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var largestSumAfterKNegations = function(nums, k) {
    const ModifiedNums = [...nums];
    let minNum = Math.min(...ModifiedNums);
    let minNumIdx = ModifiedNums.indexOf(minNum);
    let repeat = k;

    while (minNum < 0 && repeat > 0) {
        ModifiedNums[minNumIdx] *= -1;
        
        minNum = Math.min(...ModifiedNums);
        minNumIdx = ModifiedNums.indexOf(minNum);
        repeat--;
    }

    // Convert the minimum negative number to the positive one by multiplying -1 to maximize the sum of numbers
    // if the conversion still needs to be done, which is that repeat is odd
    if (repeat % 2 === 1) {
        ModifiedNums[minNumIdx] *= -1;
    }

    return ModifiedNums.reduce((sum, curr) => {
        return sum + curr
    }, 0);
};

module.exports = largestSumAfterKNegations;