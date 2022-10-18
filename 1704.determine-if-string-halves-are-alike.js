/* URL of this problem
    https://leetcode.com/problems/determine-if-string-halves-are-alike/
*/

/*
 * @param {string} s
 * @return {boolean}
 */

var halvesAreAlike = function(s) {
    const a = s.substring(0, s.length / 2);
    const b = s.substring(s.length / 2);
    
    const vowels = ['a','e','i','o','u','A','E','I','O','U'];
    
    let aVowelCount = 0;
    let bVowelCount = 0;
    
    for (let i = 0; i < a.length; i++) {
        if (vowels.indexOf(a.charAt(i)) !== -1) {
            aVowelCount++;
        }
        
        if (vowels.indexOf(b.charAt(i)) !== -1) {
            bVowelCount++;
        }
    }
    
    return aVowelCount === bVowelCount;
};