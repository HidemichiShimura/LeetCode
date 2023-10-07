/* URL of this problem
 * https://leetcode.com/problems/reverse-only-letters/description/
 *
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
  const ReversedEnglishLetters = s
    .split("")
    .filter((char) => isEnglishLetter(char))
    .reverse();

  for (let i = 0; i < s.length; i++) {
    const CurrChar = s.charAt(i);

    if (isEnglishLetter(CurrChar)) {
      continue;
    }
    ReversedEnglishLetters.splice(i, 0, CurrChar);
  }

  return ReversedEnglishLetters.join("");
};

function isEnglishLetter(char) {
  const UTFCode = char.charCodeAt(0);

  // The range of UTF-16 code of English letters is 65 - 90 for uppercase and 97 - 122 for lowercase.
  const IsUpperCase = UTFCode >= 65 && UTFCode <= 90;
  const IsLowerCase = UTFCode >= 97 && UTFCode <= 122;

  return IsUpperCase || IsLowerCase;
}

module.exports = reverseOnlyLetters;
