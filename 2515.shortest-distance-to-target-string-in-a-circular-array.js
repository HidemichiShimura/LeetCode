/* URL of this problem
 * https://leetcode.com/problems/shortest-distance-to-target-string-in-a-circular-array/description/
 *
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */

var closetTarget = function (words, target, startIndex) {
  const Res = words.slice(startIndex + 1).concat(words.slice(0, startIndex));
  const Words = [...Res];
  const WordsReversed = [...Res].reverse();

  Words.unshift(words[startIndex]);
  WordsReversed.unshift(words[startIndex]);

  return Math.min(Words.indexOf(target), WordsReversed.indexOf(target));
};

module.exports = closetTarget;
