const differenceOfSums = require("./differenceOfSums");

test("Return the integer num1 - num2", () => {
  expect(differenceOfSums(10, 3)).toBe(19);
});

test("Return the integer num1 - num2", () => {
  expect(differenceOfSums(5, 1)).toBe(-15);
});
