/*
 * @param {number} n
 * @return {number}
 */

/* URL of this problem
    https://leetcode.com/problems/count-of-matches-in-tournament/
*/

var numberOfMatches = function(n) {
    let matchCount = 0;
    
    while (n > 1) {
        if (n % 2 === 0) {
            matchCount += n / 2;
            n = n / 2;
        } else {
            matchCount += (n - 1) / 2;
            n = (n - 1) / 2 + 1; 
        }
    }
    
    return matchCount;
};