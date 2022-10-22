/* URL of this problem
 *  https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/
 *
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
 
var countCharacters = function(words, chars) {
    // Set a variable to count the sum of lengths of all good strings in words
    let sumOfGdStrLen = 0;
    
    for (let i = 0; i < words.length; i++) {
        // Set varialbes to check if the word is good
        let word = words[i];
        let tempChars = chars;
        
        while (word.length >= 0) {
            const currChar = word[0];
            
            // Break the loop when a character in the word does not exist in chars
            if (!tempChars.includes(currChar)) {
                break;
            }
        
            // Remove the character from both variables
            tempChars = tempChars.replace(currChar, "");
            word = word.replace(currChar, "");
        }
        
        // Add the word length to sumOfGdStrLen when all the characters of the word exist in chars
        if (word.length === 0) {
            sumOfGdStrLen += words[i].length;
        }
    }
    
    return sumOfGdStrLen;
};