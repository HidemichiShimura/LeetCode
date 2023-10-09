const pivotIndex = require("./724.find-pivot-index");

test("Return the pivot index", () => {
  expect(pivotIndex([1, 7, 3, 6, 5, 6])).toBe(3);
});

test("Return -1 when a pivot index does not exist", () => {
  expect(pivotIndex([1, 2, 3])).toBe(-1);
});

test("Return 0 when the pivot index is the first index in the array", () => {
  expect(pivotIndex([2, 1, -1])).toBe(0);
});

test("Return the last index in the array when the pivot index is at the end of the array", () => {
  expect(pivotIndex([1, -1, 2])).toBe(2);
});

test("Return -1 when the array is empty", () => {
  expect(pivotIndex([])).toBe(-1);
});
