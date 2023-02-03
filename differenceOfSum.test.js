const differenceOfSum = require("./2535.difference-between-element-sum-and-digit-sum-of-an-array");

test("Return the absolute difference between the element sum and digit sum of nums", () => {
  expect(differenceOfSum([1, 15, 6, 3])).toBe(9);
});

test("Return 0 when all the elements in nums consist of one digit", () => {
  expect(differenceOfSum([1, 2, 3, 4])).toBe(0);
});

test("Return 0 when all the elements in nums are 0", () => {
  expect(differenceOfSum([0, 0, 0, 0])).toBe(0);
});

test("Return -Infinity when nums contains -Infinity", () => {
  expect(differenceOfSum([])).toBe(0);
});
