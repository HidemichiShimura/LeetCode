/* URL of this problem
    https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/
*/

/*
 * @param {string} s
 * @return {boolean}
 */

var areOccurrencesEqual = function(s) {
    const charOccurrenceMap = new Map();
    
    for (let i = 0; i < s.length; i++) {
        const currChar = s.charAt(i);
        charOccurrenceMap.set(currChar, (charOccurrenceMap.get(currChar) ?? 0)  + 1);
    }
    
    const values = [];
    
    charOccurrenceMap.forEach((value) => {
       values.push(value); 
    });
    
    const value = values[0];
    
    for (let i = 1; i < values.length; i++) {
        if (value !== values[i]) {
            return false;
        }
    }
    
    return true;
};