/* URL of this problem
 * https://leetcode.com/problems/backspace-string-compare/description/
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var backspaceCompare = function (s, t) {
  const strS = backspaceCompareHelper(s);
  const strT = backspaceCompareHelper(t);

  return strS === strT;
};

function backspaceCompareHelper(str) {
  const BackSpace = "#";
  let text = str;

  while (text.includes(BackSpace)) {
    const BackSpaceIdx = text.indexOf(BackSpace);

    text =
      text.substring(0, BackSpaceIdx - 1) + text.substring(BackSpaceIdx + 1);
  }

  return text;
}

module.exports = backspaceCompare;
