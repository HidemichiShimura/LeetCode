/* URL of this problem
 * https://leetcode.com/problems/rank-transform-of-an-array
 *
 * @param {number[]} arr
 * @return {number[]}
 */
 
var arrayRankTransform = function(arr) {
    const sorted = [...new Set(arr)].sort((a, b) => a - b);
    const RankMap = new Map();
    const Ranks = [];

    for (let i = 0; i < sorted.length; i++) {
        // Set a value to index + 1 because rank starts from 1 not 0
        RankMap.set(sorted[i], i + 1);
    }
    for (let i = 0; i < arr.length; i++) {
        const Element = arr[i];
        const Rank = RankMap.get(Element);

        Ranks.push(Rank);
    }

    return Ranks;
}

module.exports = arrayRankTransform;