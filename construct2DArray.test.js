const construct2DArray = require("./2022.convert-1d-array-into-2d-array");

test("Return an m x n 2D array constructed according to the procedure of m rows and n columns", () => {
  expect(construct2DArray([1, 2, 3, 4], 2, 2)).toEqual([
    [1, 2],
    [3, 4],
  ]);
});

test("Return an empty array when it is impossible to create a 2D array of m x n", () => {
  expect(construct2DArray([1, 2], 1, 1)).toEqual([]);
});

test("Return an empty array when the input array is empty", () => {
  expect(construct2DArray([], 2, 2)).toEqual([]);
});

test("Return an empty array when m is 0", () => {
  expect(construct2DArray([1, 2, 3, 4], 0, 2)).toEqual([]);
});

test("Return an empty array when n is 0", () => {
  expect(construct2DArray([1, 2, 3, 4], 2, 0)).toEqual([]);
});

test("Return an empty array when both m and n are 0", () => {
  expect(construct2DArray([1, 2, 3, 4], 0, 0)).toEqual([]);
});
