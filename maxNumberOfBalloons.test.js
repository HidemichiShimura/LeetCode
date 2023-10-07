const maxNumberOfBalloons = require("./1189.maximum-number-of-balloons");

test("Return the maximum number of instances that can be formed", () => {
  expect(maxNumberOfBalloons("nlaebolko")).toBe(1);
});

test("Return 0 if no instance can be formed from text", () => {
  expect(maxNumberOfBalloons("leetcode")).toBe(0);
});

test("Return 0 if text is an empty string", () => {
  expect(maxNumberOfBalloons("")).toBe(0);
});
