const sumOfMultiples = require("./2652.sum-multiples");

/* Constraints
 *
 * The range of integers to get the sum is [1, n] inclusive.
 * The integers to add to the sum are divisible by 3, 5, or 7.
 */

test("Return the sum in the given constraints", () => {
  expect(sumOfMultiples(7)).toBe(21);
});

test("Return 0 if n is 0", () => {
  expect(sumOfMultiples(0)).toBe(0);
});

test("Return 0 if n is -0", () => {
  expect(sumOfMultiples(-0)).toBe(0);
});

test("Return 0 if n is a negative number", () => {
  expect(sumOfMultiples(-5)).toBe(0);
});

test("Return 0 if n is -Infinity", () => {
  expect(sumOfMultiples(-Infinity)).toBe(0);
});
