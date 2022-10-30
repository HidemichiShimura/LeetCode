/* URL of this problem
 * https://leetcode.com/problems/string-matching-in-an-array/
 *
 * @param {string[]} words
 * @return {string[]}
 */
 
var stringMatching = function(words) {
    // Array which cantains all substrings of the other words
    const substrings = [];
    
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if (i === j) {
                continue;
            }
            
            if (words[i].includes(words[j])) {
                substrings.push(words[j]);
            }
        }
    }
    
    return [...new Set(substrings)];
};