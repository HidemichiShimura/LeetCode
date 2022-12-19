/* URL of this problem
 * https://leetcode.com/problems/shortest-word-distance/description/
 *
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */

var shortestDistance = function(wordsDict, word1, word2) {
    // The shortest distance between word1 and word2 in wordsDict
    // Set default value to the length of wordsDict
    let ShotestDistance = wordsDict.length;

    for (let i = 0; i < wordsDict.length; i++) {
        if (wordsDict[i] !== word1) {
            continue;
        }
        
        for (let j = 0; j < wordsDict.length; j++) {
            if (wordsDict[j] === word2) {
                const CurrDistance = Math.abs(i - j);

                ShotestDistance = Math.min(ShotestDistance, CurrDistance);
            }
        }
    }

    return ShotestDistance;
};

module.exports = shortestDistance;