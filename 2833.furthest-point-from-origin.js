/* URL of this problem
 * https://leetcode.com/problems/furthest-point-from-origin/description/
 *
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function (moves) {
  let leftCount = 0,
    rightCount = 0,
    leftRightCount = 0;

  for (let i = 0; i < moves.length; i++) {
    if (moves.charAt(i) === "L") {
      leftCount++;
    } else if (moves.charAt(i) === "R") {
      rightCount++;
    } else {
      leftRightCount++;
    }
  }

  return Math.abs(leftCount - rightCount) + leftRightCount;
};

module.exports = furthestDistanceFromOrigin;
