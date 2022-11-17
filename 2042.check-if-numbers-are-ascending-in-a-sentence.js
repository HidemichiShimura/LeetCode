/* URL of this problem
 * https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/
 *
 * @param {string} s
 * @return {boolean}
 */
 
var areNumbersAscending = function(s) {
    const tokenNumbers = s.split(" ").filter((token) => {
        if (token == Number(token)) {
            return token;
        }
    });
    
    for (let i = 0; i < tokenNumbers.length - 1; i++) {        
        if (Number(tokenNumbers[i]) >= Number(tokenNumbers[i + 1])) {
            return false;
        }
    }
    return true;
};

module.exports = areNumbersAscending;