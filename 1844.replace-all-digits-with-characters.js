/*
 * @param {string} s
 * @return {string}
 */

/* URL of this problem
    https://leetcode.com/problems/replace-all-digits-with-characters/
*/

var replaceDigits = function(s) {
    for (let i = 1; i < s.length; i += 2) { 
        const charAfterShift = shift(s[i-1], s[i]);
        s = s.substring(0, i) + charAfterShift + s.substring(i+1);
    }
    return s;
};

const shift = function(c, x) {
    const alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    return alphabets[alphabets.indexOf(c) + parseInt(x)];
}