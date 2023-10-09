const findClosestNumber = require("./2239.find-closest-number-to-zero");

test("Return a positive number which is the absolute number closest to zero", () => {
  expect(findClosestNumber([-4, -2, 1, 4, 8])).toBe(1);
});

test("Return a negative number which is the absolute number closest to zero", () => {
  expect(findClosestNumber([2, -1])).toBe(-1);
});

test("Return a positive number which is the absolute number closest to zero when the array also has the negative of the absolute number", () => {
  expect(findClosestNumber([2, -1, 1])).toBe(1);
});
