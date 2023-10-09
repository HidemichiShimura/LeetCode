const getNoZeroIntegers = require("./1317.convert-integer-to-the-sum-of-two-no-zero-integers");

/* No-Zero integer pair requirements
 * a and b are No-Zero integers.
 * a + b = n
 */

test("Return a no-zero integer pair which represents the requirements above", () => {
  expect(getNoZeroIntegers(2)).toEqual([1, 1]);
});

test("Return a no-zero integer pair which represents the requirements above", () => {
  expect(getNoZeroIntegers(11)).toEqual([2, 9]);
});
