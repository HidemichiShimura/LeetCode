const countBalls = require("./1742.maximum-number-of-balls-in-a-box");

test("Return the maximum number of balls in the boxes", () => {
  expect(countBalls(1, 10)).toBe(2);
});

test("Return the maximum number of balls in the boxes when lowLimit is 0", () => {
  expect(countBalls(0, 10)).toBe(2);
});

test("Return 0 if lowLimit is greater than highLimit", () => {
  expect(countBalls(10, 1)).toBe(0);
});

test("Return 0 if lowLimit is greater than highLimit (hightLimit is -Infinity)", () => {
  expect(countBalls(10, -Infinity)).toBe(0);
});
