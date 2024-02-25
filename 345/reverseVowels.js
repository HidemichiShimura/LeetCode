/* URL of this problem
    https://leetcode.com/problems/reverse-vowels-of-a-string/
*/

/*
 * @param {string} s
 * @return {string}
 */

var reverseVowels = function(s) {
    const vowels = ['a','A','e','E','i','I','o','O','u','U'];
    
    const vowelsInReversedOrder = [];
    for (let i = s.length - 1; i >= 0; i--) {
        const currChar = s.charAt(i);
        if (vowels.includes(currChar)) {
            vowelsInReversedOrder.push(currChar);
        }
    }
    
    const sArray = [...s];
    
    for (let i = 0; i < sArray.length; i++) {
        if (vowels.includes(sArray[i])) {
            sArray[i] = vowelsInReversedOrder.shift();
        }
    }
    
    return sArray.join("");
};