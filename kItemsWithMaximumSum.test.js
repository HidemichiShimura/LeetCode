const kItemsWithMaximumSum = require("./2600.k-items-with-the-maximum-sum");

test("Return the maximum possible sum of numbers written on the items", () => {
  expect(kItemsWithMaximumSum(3, 2, 0, 2)).toBe(2);
});

test("Return 0 if the input k is 0", () => {
  expect(kItemsWithMaximumSum(3, 2, 0, 0)).toBe(0);
});

test("Return 0 if the input k is -0", () => {
  expect(kItemsWithMaximumSum(3, 2, 0, -0)).toBe(0);
});

test("Return the sum of all the numbers written on the items if the input k is Infinity", () => {
  expect(kItemsWithMaximumSum(5, 2, 3, Infinity)).toBe(2);
});
