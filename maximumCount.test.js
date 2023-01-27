const maximumCount = require("./2529.maximum-count-of-positive-integer-and-negative-integer");

test("Return the maximum between the number of positive integers and the number of negative integer", () => {
  expect(maximumCount([-3, -2, -1, 0, 0, 1, 2])).toBe(3);
});

test("Return the number of negative integer with -Infinity in its array", () => {
  expect(maximumCount([-Infinity, -3, -2, -1, 0, 0, 1, 2])).toBe(4);
});

test("Return the number of positive integer with Infinity in its array", () => {
  expect(maximumCount([-2, -1, 0, 0, 1, 2, Infinity])).toBe(3);
});

test("Return 0 when the array contains only 0s", () => {
  expect(maximumCount([0, 0, 0])).toBe(0);
});
