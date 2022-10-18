/*
 * @param {string} s
 * @return {string}
*/

/* URL of this problem
    https://leetcode.com/problems/remove-vowels-from-a-string/
*/

 var removeVowels = function(s) {
    const vowels = ['a','e','i','o','u'];
    let outputStr = "";
    
    for (let i = 0; i < s.length; i++) {
        if (vowels.indexOf(s.charAt(i)) === -1) {
            outputStr += s.charAt(i);
        }
    }
    
    return outputStr;
};