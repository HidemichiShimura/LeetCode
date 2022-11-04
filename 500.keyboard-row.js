/* URL of this problem
https://leetcode.com/problems/keyboard-row/
 *
 * @param {string[]} words
 * @return {string[]}
 */
 
var findWords = function(words) {
    const topRow = "qwertyuiop";
    const middleRow = "asdfghjkl";
    const bottomRow = "zxcvbnm";
    const wordsInOneRow = [];
    
    for (let i = 0; i < words.length; i++) {
        const currWord = words[i].toLowerCase();          
        const targetRow = topRow.includes(currWord.charAt(0)) ? topRow : middleRow.includes(currWord.charAt(0)) ? middleRow : bottomRow;
                
        wordsInOneRow.push(words[i]);    
        for (let j = 1; j < currWord.length; j++) {
            if (!targetRow.includes(currWord[j])) {
                wordsInOneRow.pop();
                break;
            }
        }
    }
    
    return wordsInOneRow;
};