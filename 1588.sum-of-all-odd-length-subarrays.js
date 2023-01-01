/* URL of this problem
 * https://leetcode.com/problems/sum-of-all-odd-length-subarrays/description/
 *
 * @param {number[]} arr
 * @return {number}
 */

var sumOddLengthSubarrays = function(arr) {
    let SubarraySum = 0;

    for (let i = 1; i <= arr.length; i += 2) {
        for (let j = 0; i + j <= arr.length; j++) {
            const Subarray = arr.slice(j, i + j);
            const Sum = Subarray.reduce((sum, curr) => sum + curr);

            SubarraySum += Sum;
        }
    }

    return SubarraySum;
}

module.exports = sumOddLengthSubarrays;