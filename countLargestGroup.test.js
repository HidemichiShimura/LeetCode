const countLargestGroup = require("./1399.count-largest-group");

test("Return the number of groups that have the largest size", () => {
  expect(countLargestGroup(13)).toBe(4);
});

test("Return 0 if the input number is 0", () => {
  expect(countLargestGroup(0)).toBe(0);
});

test("Return -Infinity if the input number is 0", () => {
  expect(countLargestGroup(-Infinity)).toBe(0);
});

test("Return 0 if the input number is -0", () => {
  expect(countLargestGroup(-0)).toBe(0);
});
