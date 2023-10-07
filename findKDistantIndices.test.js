const findKDistantIndices = require("./2200.find-all-k-distant-indices-in-an-array");

test("Return a list of all k-distant indices sorted in increasing order", () => {
  expect(findKDistantIndices([3, 4, 9, 1, 3, 9, 5], 9, 1)).toEqual([
    1, 2, 3, 4, 5, 6,
  ]);
});

test("Return an empty array if key does not exist in nums", () => {
  expect(findKDistantIndices([3, 4, 9, 1, 3, 9, 5], 10, 1)).toEqual([]);
});

test("Return an empty array if k is a negative integer", () => {
  expect(findKDistantIndices([3, 4, 9, 1, 3, 9, 5], 9, -1)).toEqual([]);
});

test("Return a list of all the indices of nums if k is Infinity", () => {
  expect(findKDistantIndices([3, 4, 9, 1, 3, 9, 5], 9, Infinity)).toEqual([
    0, 1, 2, 3, 4, 5, 6,
  ]);
});

test("Return an empty array if k is -Infinity", () => {
  expect(findKDistantIndices([3, 4, 9, 1, 3, 9, 5], 9, -Infinity)).toEqual([]);
});
