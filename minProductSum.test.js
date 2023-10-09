const minProductSum = require("./1874.minimize-product-sum-of-two-arrays");

test("Return the minimum product sum of two arrays", () => {
  expect(minProductSum([5, 3, 4, 2], [4, 2, 2, 5])).toBe(40);
});

test("Return the minimum product sum of two arrays with negative integers", () => {
  expect(minProductSum([-5, 3, 4, 2], [4, 2, 2, -5])).toBe(-30);
});

test("Return Infinity if either of two arrays has at least one Infinity", () => {
  expect(minProductSum([5, 3, Infinity, 2], [4, 2, 2, 5])).toBe(Infinity);
});

test("Return -Infinity if either of two arrays has at least one -Infinity", () => {
  expect(minProductSum([5, 3, -Infinity, 2], [4, 2, 2, 5])).toBe(-Infinity);
});
