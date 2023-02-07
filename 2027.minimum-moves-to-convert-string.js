/* URL of this problem
 * https://leetcode.com/problems/minimum-moves-to-convert-string/description/
 *
 *
 * @param {string} s
 * @return {number}
 */

var minimumMoves = function (s) {
  let minMove = 0;
  let str = s;

  while (str.length > 0 && str.includes("X")) {
    const FirstIdx = str.indexOf("X");
    const SecondIdx = str.indexOf("X", FirstIdx + 3);

    minMove++;

    // Break the current loop when there is no more 'X' left in the string
    if (SecondIdx === -1) {
      break;
    }
    str = str.substring(SecondIdx);
  }

  return minMove;
};

module.exports = minimumMoves;
