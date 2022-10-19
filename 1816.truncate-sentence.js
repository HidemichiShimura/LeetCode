/*
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

/* URL of this problem
    https://leetcode.com/problems/truncate-sentence/
*/

var truncateSentence = function(s, k) {
    const sWords = s.split(" ");
    let trancatedS = "";
    
    for (let i = 0; i < k; i++) {
        trancatedS += sWords[i] + " ";
    }
    
    return trancatedS.substring(0,trancatedS.length-1);
};