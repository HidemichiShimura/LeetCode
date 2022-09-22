/*
 * @param {string} s
 * @return {string}
 */

/* URL of this problem
    https://leetcode.com/problems/reverse-words-in-a-string-iii/
*/

var reverseWords = function(s) {
    const words = s.split(" ");
  
    let outputStr = "";
    for (let i = 0; i < words.length; i++) {
        let reversedWord = "";
        const word = words[i];
        for (let j = word.length-1; j >= 0; j--) {
            reversedWord += word.charAt(j);
        }
        
        outputStr += reversedWord + " ";
    }
  
    return outputStr.substring(0,outputStr.length-1);
  };