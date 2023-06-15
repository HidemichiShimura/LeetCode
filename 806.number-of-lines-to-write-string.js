/* URL of this problem
 * https://leetcode.com/problems/number-of-lines-to-write-string/description/
 *
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function (widths, s) {
  const WidthCharMap = [...s].map((char) => {
    // Get the current character's index in widths by using UTF-16 code where lower English letters start from 97 - 122
    const Idx = char.charCodeAt() - 97;

    return widths[Idx];
  });
  let lineCount = 0;
  let lineWidth = 0;

  for (let i = 0; i < WidthCharMap.length; i++) {
    const CurrWidth = WidthCharMap[i];

    if (lineWidth + CurrWidth > 100) {
      lineCount++;
      lineWidth = CurrWidth;
    } else {
      lineWidth += CurrWidth;
    }
  }
  lineCount++;

  return [lineCount, lineWidth];
};

module.exports = numberOfLines;
