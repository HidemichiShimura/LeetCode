const mergeArrays = require("./2570.merge-two-2d-arrays-by-summing-values");

/* Return value is a 2d array which meets the following conditions
 *
 * 1. Only ids that appear in at least one of the two arrays should be included in the resulting array.
 * 2. Each id should be included only once and its value should be the sum of the values of this id in the two arrays.
 *
 * If the id does not exist in one of the two arrays then its value in that array is considered to be 0.
 */

test("Return the resulting array meeting the conditions", () => {
  expect(
    mergeArrays(
      [
        [1, 2],
        [2, 3],
        [4, 5],
      ],
      [
        [1, 4],
        [3, 2],
        [4, 1],
      ]
    )
  ).toEqual([
    [1, 6],
    [2, 3],
    [3, 2],
    [4, 6],
  ]);
});

test("Return the resulting array meeting the conditions when there is an subarray with Infinity for its value", () => {
  expect(
    mergeArrays(
      [
        [1, Infinity],
        [2, 3],
      ],
      [
        [1, 4],
        [3, 2],
      ]
    )
  ).toEqual([
    [1, Infinity],
    [2, 3],
    [3, 2],
  ]);
});

test("Return the resulting array meeting the conditions when there is an subarray with -Infinity for its value", () => {
  expect(
    mergeArrays(
      [
        [1, -Infinity],
        [2, 3],
      ],
      [
        [1, 4],
        [3, 2],
      ]
    )
  ).toEqual([
    [1, -Infinity],
    [2, 3],
    [3, 2],
  ]);
});
