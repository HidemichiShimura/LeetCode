/* URL of this problem
 * https://leetcode.com/problems/faulty-keyboard/description/
 *
 * @param {string} s
 * @return {string}
 */
var finalString = function (s) {
  let chars = [];

  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === "i") {
      chars.reverse();
      continue;
    }
    chars.push(s.charAt(i));
  }

  return chars.join("");
};

module.exports = finalString;
