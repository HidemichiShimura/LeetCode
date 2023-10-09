const countDigits = require("./2520.count-the-digits-that-divide-a-number");

/* Input restrictions:
 *
 * 1. 1 <= num <= 109
 * 2. num does not contain 0 as one of its digits.
 *
 */

test("Return the number of digits in num that divide num", () => {
  expect(countDigits(121)).toBe(2);
});

test("Return 1 if num has only one digit", () => {
  expect(countDigits(7)).toBe(1);
});
