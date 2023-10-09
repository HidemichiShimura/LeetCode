/* URL of this problem
 * https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/description/
 *
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */

var minimumRecolors = function (blocks, k) {
  let minRecolor = Infinity;

  for (let i = 0; i <= blocks.length - k; i++) {
    const SubArr = blocks.substring(i, i + k).split("");
    const WhiteCount = SubArr.filter((color) => color === "W").length;

    minRecolor = Math.min(minRecolor, WhiteCount);
  }

  return minRecolor;
};

module.exports = minimumRecolors;
