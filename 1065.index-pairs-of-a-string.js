/* URL of this problem
 * https://leetcode.com/problems/index-pairs-of-a-string/
 *
 * @param {string} text
 * @param {string[]} words
 * @return {number[][]}
 */
 
var indexPairs = function(text, words) {
    const indexPairs = [];
     
    for (let i = 0; i < words.length; i++) {
        const subStr = words[i];
        
        for (let j = 0; j < text.length; j++) {
            if (subStr === text.substring(j, j + subStr.length)) {
                indexPairs.push([j, (j + subStr.length - 1)]);
            }
        }
    }
    
    return indexPairs.sort((pair1, pair2) => {
        // Sort pairs by the second coordinates when the first coordinates are the same
        if (pair1[0] === pair2[0]) {
            return pair1[1] - pair2[1];
        }
        
        // Sort pairs by the first coordinates
        return pair1[0] - pair2[0];
    });
};