const separateDigits = require("./2553.separate-the-digits-in-an-array");

test("Return an array of all the digits of numbers in nums", () => {
  expect(separateDigits([13, 25, 83, 77])).toEqual([1, 3, 2, 5, 8, 3, 7, 7]);
});

test("Return the original array if all the elements in nums consist of one digit", () => {
  expect(separateDigits([7, 1, 3, 9])).toEqual([7, 1, 3, 9]);
});

test("Return an array whose elements are 0s if all the elements in nums consist of 0", () => {
  expect(separateDigits([0, 0, 0, 0])).toEqual([0, 0, 0, 0]);
});

test("Return an empty array if nums is empty", () => {
  expect(separateDigits([])).toEqual([]);
});
