/* URL of this problem
 * https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/description/
 *
 * @param {string} s
 * @return {string}
 */
var modifyString = function (s) {
  const Chars = [...s];

  for (let i = 0; i < Chars.length; i++) {
    const PrevCharCode = Chars[i - 1] ? Chars[i - 1].charCodeAt() : 0;
    const NextCharCode = Chars[i + 1] ? Chars[i + 1].charCodeAt() : 0;

    if (Chars[i] !== "?") continue;

    // Get a lower English letter which is not same as the previous letter and the next letter
    // The UTF-16 code of lower English letter starts with 97 and ends with 122
    for (let j = 97; j <= 122; j++) {
      if (j !== PrevCharCode && j !== NextCharCode) {
        Chars[i] = String.fromCharCode(j);
        break;
      }
    }
  }

  return Chars.join("");
};

module.exports = modifyString;
