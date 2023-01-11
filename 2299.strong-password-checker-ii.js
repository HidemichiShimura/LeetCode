/* URL of this problem
 * https://leetcode.com/problems/strong-password-checker-ii/description/
 *
 * @param {string} password
 * @return {boolean}
 */

var strongPasswordCheckerII = function(password) {
    let HasLowerLetter = false
    let HasUpperLetter = false;
    let HasOneDigit = false;
    let HasSpecialChar = false;

    if (password.length < 8) {
        return false;
    };

    for (let i = 0; i < password.length; i++) {
        const PasswordChar = password.charAt(i);

        // Check if the character is a LOWER English letter from UTF-16 code
        // The range of English lower letter in UTF-16 is [97,122]
        if (PasswordChar.charCodeAt(0) >= 97 && PasswordChar.charCodeAt(0) <= 122) {
            HasLowerLetter = true;
        }
        // Check if the character is a UPPER English letter from UTF-16 code
        // The range of English lower letter in UTF-16 is [65,90]
        else if (PasswordChar.charCodeAt(0) >= 65 && PasswordChar.charCodeAt(0) <= 90) {
            HasUpperLetter = true;
        } else if (!isNaN(Number(PasswordChar))) {
            HasOneDigit = true;
        } else if ("!@#$%^&*()-+".includes(PasswordChar)) {
            HasSpecialChar = true;
        }
        
        // Return false if there are the same characters adjacent to each other
        if (PasswordChar === password.charAt(i + 1)) {
            return false;
        }
    }

    return (
        HasLowerLetter &&
        HasUpperLetter &&
        HasOneDigit &&
        HasSpecialChar
    );
};

module.exports = strongPasswordCheckerII;