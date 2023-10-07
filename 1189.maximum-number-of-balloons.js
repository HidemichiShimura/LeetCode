/* URL of this problem
 * https://leetcode.com/problems/maximum-number-of-balloons/description/
 *
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  let str = text;
  let instanceCount = 0;

  while (str.length > 0) {
    for (let j = 0; j < "balloon".length; j++) {
      const Char = "balloon".charAt(j);

      if (str.includes(Char)) {
        const CharIdx = str.indexOf(Char);

        str = str.substring(0, CharIdx) + str.substring(CharIdx + 1);
      } else {
        return instanceCount;
      }
    }
    instanceCount++;
  }
  return instanceCount;
};

module.exports = maxNumberOfBalloons;
