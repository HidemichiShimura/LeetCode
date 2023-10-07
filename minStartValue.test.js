const minStartValue = require("./1413.minimum-value-to-get-positive-step-by-step-sum");

test("Return the minimum positive value of startValue such that the step by step sum is never less than 1", () => {
  expect(minStartValue([-3, 2, -3, 4, 2])).toBe(5);
});

test("Return 1 if all the numbers of nums are positive", () => {
  expect(minStartValue([1, 2])).toBe(1);
});

test("Return 1 if the leftmost number is Infinity", () => {
  expect(minStartValue([Infinity, -3, 2, -3, 4, 2])).toBe(1);
});
