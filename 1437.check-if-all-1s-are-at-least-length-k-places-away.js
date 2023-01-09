/* URL of this problem
 * https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/description/
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

var kLengthApart = function(nums, k) {
    const OneIdxes = [];
    let IsKLenApart = true;

    // Create an array of 1's indexes in nums in an order of occurrence 
    nums.forEach((num, idx) => {
        if (num === 1) {
            OneIdxes.push(idx);
        }
    });
    for (let i = 0; i < OneIdxes.length - 1 && IsKLenApart; i++) {
        // Caluculate the distance between two of 1
        const Distance = Math.abs(OneIdxes[i] - OneIdxes[i + 1]) - 1;

        IsKLenApart = Distance >= k ? true : false;
    }

    return IsKLenApart;
};

module.exports = kLengthApart;