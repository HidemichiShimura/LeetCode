const sumOfSquares = require("./2778.sum-of-squares-of-special-elements");

test("Return the sum of squares of special elements", () => {
  expect(sumOfSquares([1, 2, 3, 4])).toBe(21);
});

test("Return Infinity if the array nums has Infinity", () => {
  expect(sumOfSquares([2, 7, 1, 19, 18, 3, Infinity])).toBe(Infinity);
});

test("Return Infinity if the array nums has -Infinity", () => {
  expect(sumOfSquares([2, 7, 1, 19, 18, 3, -Infinity])).toBe(Infinity);
});

test("Return the sum of squares of special elements, one of which is 0", () => {
  expect(sumOfSquares([0, 2, 3, 4])).toBe(20);
});

test("Return the sum of squares of special elements, one of which is -0", () => {
  expect(sumOfSquares([-0, 2, 3, 4])).toBe(20);
});
