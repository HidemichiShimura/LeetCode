/* URL of this problem
 * https://leetcode.com/problems/count-square-sum-triples/description/
 *
 * @param {number} n
 * @return {number}
 */
var countTriples = function (n) {
  let squareTripleCount = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      const Sqrt = Math.sqrt(i * i + j * j);

      if (Number.isInteger(Sqrt) && Sqrt <= n) squareTripleCount++;
    }
  }

  return squareTripleCount;
};

module.exports = countTriples;
