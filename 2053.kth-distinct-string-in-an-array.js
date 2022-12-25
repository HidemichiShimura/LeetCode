/* URL of this problem
 * https://leetcode.com/problems/kth-distinct-string-in-an-array/description/
 *
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */

var kthDistinct = function(arr, k) {
    const CharsByOccur = new Map();
    const DistinctChars = [];

    for (let i = 0; i < arr.length; i++) {
        CharsByOccur.set(arr[i], (CharsByOccur.get(arr[i]) ?? 0) + 1);
    }
    // Extract distinct strings which only appear once in arr and push each to DistinctChars
    CharsByOccur.forEach((value, key) => {
        if (value === 1) {
            DistinctChars.push(key);
        }
    });

    // Return k th char in DisctinctChars(1-indexed) or an empty string if such string does not exist
    return DistinctChars.length < k  ? "" : DistinctChars[k - 1];
};

module.exports = kthDistinct;