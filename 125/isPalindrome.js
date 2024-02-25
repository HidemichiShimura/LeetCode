/* URL of this problem
 * https://leetcode.com/problems/valid-palindrome/description/
 *
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const LowerCasedStr = s.toLowerCase();
  const Chars = LowerCasedStr.split("").filter(
    (char) => isLowerAlphabet(char) || isNumber(char)
  );

  return Chars.join("") === Chars.reverse().join("");
};

function isLowerAlphabet(char) {
  // UTF=16 codes of lower alphabet lettter's start from 97 to 122 on the UTF-16 table
  return char.charCodeAt() >= 97 && char.charCodeAt() <= 122;
}

function isNumber(char) {
  // UTF=16 codes of numbers start from 48 to 57 on the UTF-16 table
  return char.charCodeAt() >= 48 && char.charCodeAt() <= 57;
}

module.exports = isPalindrome;
