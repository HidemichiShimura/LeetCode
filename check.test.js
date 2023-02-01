const check = require("./1752.check-if-array-is-sorted-and-rotated");

test("Return true if the array was originally sorted in non-decreasing order, then rotated some number of positions (including zero)", () => {
  expect(check([3, 4, 5, 1, 2])).toBeTruthy();
});

test("Return true if the array is already in a non-decreasing order without rotating", () => {
  expect(check([1, 2, 3])).toBeTruthy();
});

test("Return true if all the elements in the array are the same", () => {
  expect(check([1, 1, 1])).toBeTruthy();
});

test("Return false if the array was not originally sorted in non-decreasing order", () => {
  expect(check([2, 1, 3, 4])).toBeFalsy();
});

test("Return false if the array is empty", () => {
  expect(check([])).toBeFalsy();
});
