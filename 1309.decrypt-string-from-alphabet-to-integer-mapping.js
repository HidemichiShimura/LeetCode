/* URL of this problem
 *  https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/
 *
 * @param {string} s
 * @return {string}
 */
 
var freqAlphabets = function(s) {
    const mappingNumbers = [];
    let index = s.length - 1;
    let MappedStr = "";
    
    while (index >= 0) {
        if (s[index] === "#") {
            // Extract 2 digits before # and them to mappingNumbers
            mappingNumbers.unshift(s.substring(index - 2, index));
            index -= 3;
        } else {
            mappingNumbers.unshift(s.charAt(index));
            index--;
        }
    }
    
    for (let i = 0; i < mappingNumbers.length; i++) {
        // Get a UTF-16 nubmer corresponding to the character by adding each element and 96
        // because 'a' is 97 on the UTF-16 table.
        const utfSixteenNum = Number(mappingNumbers[i]) + 96;
        
        MappedStr += String.fromCharCode(utfSixteenNum);
    }
    
    return MappedStr;
}