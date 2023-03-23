/* URL of this problem
 * https://leetcode.com/problems/reshape-the-matrix/description/
 *
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  const FlatMat = mat.flat();
  const ReshapedMat = [];

  if (FlatMat.length !== r * c) return mat;

  for (let i = 0; i < FlatMat.length; i += c) {
    const Row = FlatMat.slice(i, i + c);

    ReshapedMat.push(Row);
  }

  return ReshapedMat;
};

module.exports = matrixReshape;
