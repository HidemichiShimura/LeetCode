const dietPlanPerformance = require("./1176.diet-plan-performance");

test("Return the total number of points", () => {
  expect(dietPlanPerformance([1, 2, 3, 4, 5], 1, 3, 3)).toBe(0);
});

test("Return 0 for the total points if calories is an empty array", () => {
  expect(dietPlanPerformance([], 1, 3, 3)).toBe(0);
});
