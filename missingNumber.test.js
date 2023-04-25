const missingNumber = require("./1228.missing-number-in-arithmetic-progression");

test("Return the missing value in arr", () => {
  expect(missingNumber([5, 7, 11, 13])).toBe(9);
});

test("Return one of the elements in arr if value is 0", () => {
  expect(missingNumber([1, 1, 1])).toBe(1);
});
