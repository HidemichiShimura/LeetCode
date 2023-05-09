/* URL of this problem
 * https://leetcode.com/problems/delete-greatest-value-in-each-row/description/
 *
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function (grid) {
  const PerformedGrid = grid.map((elem) => elem.slice());
  const Len = PerformedGrid[0].length;
  let sum = 0;

  for (let i = 0; i < Len; i++) {
    const MaxNums = [];

    for (let j = 0; j < PerformedGrid.length; j++) {
      const Row = PerformedGrid[j];
      const MaxNumIdx = Row.indexOf(Math.max(...Row));
      const MaxNum = Row.splice(MaxNumIdx, 1);

      MaxNums.push(MaxNum);
    }

    sum += Math.max(...MaxNums);
  }

  return sum;
};

module.exports = deleteGreatestValue;
