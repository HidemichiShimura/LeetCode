/* URL of this problem
 * https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values/description/
 *
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function (nums1, nums2) {
  const NumsConcated = [...nums1].concat(nums2).sort((a, b) => a[0] - b[0]);
  const IdBySum = new Map();
  const ResultArr = [];

  for (let i = 0; i < NumsConcated.length; i++) {
    const Id = NumsConcated[i][0];
    const Value = NumsConcated[i][1];

    IdBySum.set(Id, IdBySum.has(Id) ? IdBySum.get(Id) + Value : Value);
  }
  IdBySum.forEach((value, key) => ResultArr.push([key, value]));

  return ResultArr;
};

module.exports = mergeArrays;
