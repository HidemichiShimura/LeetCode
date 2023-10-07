/*
 * @param {string} s
 * @return {number}
 */

/* URL of this problem
    https://leetcode.com/problems/count-asterisks/
*/

var countAsterisks = function(s) {
    const splittedChars = s.split("|");
    let sumOfStars = 0;
    
    for (let i = 0; i < splittedChars.length; i += 2) {
        for (let j = 0; j < splittedChars[i].length; j++) {
            if (splittedChars[i][j] == "*") {
                sumOfStars++;
            }
        }
    }
    
    return sumOfStars;
};