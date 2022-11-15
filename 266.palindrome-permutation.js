/* URL of this problem
 * https://leetcode.com/problems/palindrome-permutation/
 *
 * @param {string} s
 * @return {boolean}
 */
 
var canPermutePalindrome = function(s) {
    const charMap = new Map();
    const isLengthOdd = s.length % 2 === 1;
    let oddOccurCount = 0; // Count characters which appear at odd times in the input s

    if (s.length < 1 || 5000 < s.length) {
        return false;
    }
    
    for (let i = 0; i < s.length; i++) {
        charMap.set(s.charAt(i), (charMap.get(s.charAt(i)) ?? 0) + 1);
    }
    charMap.forEach((value) => {
       if (value % 2 === 1) {
          oddOccurCount++;
       }
    });
    
    return isLengthOdd && oddOccurCount === 1 || !isLengthOdd && oddOccurCount === 0;
};

module.exports = canPermutePalindrome;