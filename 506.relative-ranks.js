/* URL of this problem
 * https://leetcode.com/problems/relative-ranks
 *
 * @param {number[]} score
 * @return {string[]}
 */

var findRelativeRanks = function(score) {
    const ScoreRank = new Map();
    const Sorted = [...score].sort((a, b) => b - a); // Make a copy of score and sort it in a descending order
    const Placements = [...score];
    
    for (let i = 0; i < Sorted.length; i++) {
        if (i === 0) {
            ScoreRank.set(Sorted[i], "Gold Medal");
        } else if (i === 1) {
            ScoreRank.set(Sorted[i], "Silver Medal");
        } else if (i === 2) {
            ScoreRank.set(Sorted[i], "Bronze Medal");
        } else {
            const PlacementNumber = i + 1;
            ScoreRank.set(Sorted[i], `${PlacementNumber}`);
        }
    }

    for (let i = 0; i < Placements.length; i++) {
        Placements[i] = ScoreRank.get(Placements[i]);
    }
    
    return Placements;
};

module.exports = findRelativeRanks;