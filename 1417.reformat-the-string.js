/* URL of this problem
 * https://leetcode.com/problems/reformat-the-string/
 *
 * @param {string} s
 * @return {string}
 */
 
var reformat = function(s) {
    const permedS = [];
    const digits = [];
    const alphabets = [];
    
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) == Number(s.charAt(i))) {
            digits.push(s.charAt(i));
        } else {
            alphabets.push(s.charAt(i));
        }
    }
    
    if (Math.abs(digits.length - alphabets.length) > 1) {
        return "";
    } 
    
    if (digits.length >= alphabets.length){
        for (let i = 0; i < digits.length; i++) {
            permedS.push(digits[i]);
            permedS.push(alphabets[i]);
        }
    } else {
        for (let i = 0; i < alphabets.length; i++) {
            permedS.push(alphabets[i]);
            permedS.push(digits[i]);
        }
    }
    
    return permedS.includes(undefined) ? permedS.slice(0, permedS.length - 1).join("") : permedS.join("");
};

module.exports = reformat;