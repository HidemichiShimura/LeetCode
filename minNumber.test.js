const minNumber = require("./2605.form-smallest-number-from-two-digit-arrays");

test("Return the smallest number that contains at least one digit from each array", () => {
  expect(minNumber([4, 1, 3], [5, 7])).toBe(15);
});

test("Return the smallest digit that exists in both arrays", () => {
  expect(minNumber([3, 5, 2, 6, 7], [3, 1, 7])).toBe(3);
});
