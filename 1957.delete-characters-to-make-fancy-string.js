/* URL of this problem
 * https://leetcode.com/problems/delete-characters-to-make-fancy-string/description/
 *
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function (s) {
  const Chars = [...s];

  for (let i = 0; i < Chars.length - 2; i++) {
    if (Chars[i] === Chars[i + 1] && Chars[i + 1] === Chars[i + 2]) {
      Chars[i] = "";
    }
  }

  return Chars.join("");
};

module.exports = makeFancyString;
