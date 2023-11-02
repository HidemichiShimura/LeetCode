const theMaximumAchievableX = require("./theMaximumAchievableX");

test("Return the maximum possible achievable number", () => {
  expect(theMaximumAchievableX(4, 1)).toBe(6);
});

test("Return Infinity if t is Infinity", () => {
  expect(theMaximumAchievableX(4, Infinity)).toBe(Infinity);
});
