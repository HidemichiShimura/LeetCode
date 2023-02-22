const averageValue = require("./2455.average-value-of-even-numbers-that-are-divisible-by-three");

test("Return the average value of all even integers that are divisible by 3", () => {
  expect(averageValue([1, 3, 6, 10, 12, 15])).toBe(9);
});

test("Return 0 if there is no even integers that are divisible by 3", () => {
  expect(averageValue([1, 2, 4, 7, 10])).toBe(0);
});

test("Return 0 if nums is empty", () => {
  expect(averageValue([])).toBe(0);
});

test("Return 0 if all the integers in nums are less than 0", () => {
  expect(averageValue([-1, -2, -4, -7, -10])).toBe(0);
});
