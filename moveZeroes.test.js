const moveZeroes = require("./283.move-zeroes");

/* Shifting zero approach
 * Move all 0's in nums to the end of it while maintaining the relative order of the non-zero elements
 */

test("Return an array after applying the shifting zero approach to nums", () => {
  expect(moveZeroes([0, 1, 0, 3, 12])).toEqual([1, 3, 12, 0, 0]);
});

test("Return an array after applying the shifting zero approach to nums whose elements are all negative", () => {
  expect(moveZeroes([0, -1, 0, -3, -12])).toEqual([-1, -3, -12, 0, 0]);
});

test("Return an array after applying the shifting zero approach to nums whose elements are all zeros", () => {
  expect(moveZeroes([0, 0])).toEqual([0, 0]);
});

test("Return an array after applying the shifting zero approach to nums which has Infinity for its element", () => {
  expect(moveZeroes([Infinity, 0, 3, 6])).toEqual([Infinity, 3, 6, 0]);
});

test("Return an array after applying the shifting zero approach to nums which has -Infinity for its element", () => {
  expect(moveZeroes([-Infinity, 0, 3, 6])).toEqual([-Infinity, 3, 6, 0]);
});

test("Return empty array if nums is empty", () => {
  expect(moveZeroes([])).toEqual([]);
});
