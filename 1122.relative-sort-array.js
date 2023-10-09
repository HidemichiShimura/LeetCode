/* URL of this problem
 * https://leetcode.com/problems/relative-sort-array/description/
 *
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */

var relativeSortArray = function (arr1, arr2) {
  const Sorted = [];
  // Extract uncommon numbers which exist only in arr1
  // Sort them in a ascending order
  const UncmnNums = arr1
    .filter((num) => !arr2.includes(num))
    .sort((a, b) => a - b);

  for (let i = 0; i < arr2.length; i++) {
    const Filtered = arr1.filter((num) => num === arr2[i]);

    Sorted.push(Filtered);
  }
  Sorted.push(UncmnNums);

  return Sorted.flat();
};

module.exports = relativeSortArray;
