const alternateDigitSum = require("./2544.alternating-digit-sum");

test("Return the sum of all digits with their corresponding sign", () => {
  expect(alternateDigitSum(521)).toBe(4);
});

test("Return 0 if n is 0", () => {
  expect(alternateDigitSum(0)).toBe(0);
});
