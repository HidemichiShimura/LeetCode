const splitNum = require("./2578.split-with-minimum-sum");

test("Return the minimum possible sum of num1 and num2", () => {
  expect(splitNum(4325)).toBe(59);
});

test("Return the minimum possible sum of num1 and num2 with leading zeros", () => {
  expect(splitNum(206046331)).toBe(1582);
});

test("Return 0 if num consists only of zeros", () => {
  expect(splitNum(00000)).toBe(0);
});
